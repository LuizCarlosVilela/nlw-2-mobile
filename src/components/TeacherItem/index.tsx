import React, { useState } from "react";

import { View, Text, Image, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

//Icons
import heartOutileIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";

import styles from "./styles";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  async function handleLinkToWhatsapp() {
    await api
      .post("connections", {
        user_id: teacher.id,
      })
      .then((e) => console.log("AQUII", e));
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favoritos = await AsyncStorage.getItem("favorites");

    let favoritosArray = [];

    if (favoritos) {
      favoritosArray = JSON.parse(favoritos);
    }

    if (isFavorited) {
      const favoriteIndex = favoritosArray.findIndex((item: Teacher) => {
        return item.id === teacher.id;
      });

      favoritosArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      //Adiconar aos favorites

      favoritosArray.push(teacher);

      setIsFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritosArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: teacher.avatar,
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora <Text style={styles.value}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutileIcon} />
            )}
          </RectButton>

          <RectButton
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
