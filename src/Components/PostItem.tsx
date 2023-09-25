import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export const PostItem = (props: any) => {
  return (
    <View style={styles.postItem}>
      <Image
        source={{
          uri: "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/JEtA5GKG9IF.png",
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {props.title}
        </Text>
        <Text style={styles.content} numberOfLines={2} ellipsizeMode="tail">
          {props.content}
        </Text>
        {/* <Text style={styles.timestamp}>{props.createdAt}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postItem: {
    width: "100%",
    height: 90,
    borderColor: "#ccc",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginHorizontal: 15,
  },
  textContainer: {
    width: "70%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 14,
    fontWeight: "400",
  },
  timestamp: {
    fontSize: 9,
    color: "blue",
  },
});
