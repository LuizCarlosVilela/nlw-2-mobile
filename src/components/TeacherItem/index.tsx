import React from "react";

import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

//Icons
import heartOutileIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://github.com/LuizCarlosVilela.png",
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Luiz Carlos</Text>
          <Text style={styles.subject}>Programação</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Professor de programação avançado
        {"\n"}
        {"\n"}
        Gosto sempre de fazer novas descobertas e assim evoluir
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora <Text style={styles.value}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutileIcon} />*/}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
