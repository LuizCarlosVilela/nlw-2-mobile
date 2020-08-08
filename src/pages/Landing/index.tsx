import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

//Img
import landingImg from "../../assets/images/landing.png";

//Icon
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

//Backend
import api from "../../services/api";

function Landing() {
  const { navigate } = useNavigation();
  const [connections, setConnections] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      api
        .get("connections")
        .then(({ data }) => {
          setConnections(data.total);
        })
        .catch((erro) => console.log(erro));
    }, [])
  );

  function handleNavigateToGiveClassesPage() {
    navigate("GiveClasses");
  }

  function handleNavigateToStudy() {
    navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudy}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {connections} conexões já realizadas{" "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
