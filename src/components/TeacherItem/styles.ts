import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",

    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,

    marginBottom: 16,
    overflow: "hidden",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 22,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,

    backgroundColor: "#eee",
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: "Archivo_700Bold",
    color: "#32264d",
    fontSize: 20,
  },

  subject: {
    //    fontFamily: "Poopins_400Regular",
    color: "#6a6180",
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    //  fontFamily: "Poopins_400Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "#6a6180",
  },

  footer: {
    backgroundColor: "#fafafc",
    padding: 24,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  price: {
    //  fontFamily: "Poopins_400Regular",
    color: "#6a6180",
    fontSize: 14,
  },

  value: {
    //fontFamily: "Arciho_700Bold",
    fontWeight: "bold",
    color: "#8157e5",
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: "#8157e5",
    width: 56,
    height: 56,

    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    marginRight: 8,
  },

  favorited: {
    backgroundColor: "#e33d3d",
  },

  contactButton: {
    backgroundColor: "#04d361",
    flex: 1,
    height: 56,

    borderRadius: 8,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contactButtonText: {
    color: "#FFF",
    //fontFamily: "Arciho_700Bold",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
