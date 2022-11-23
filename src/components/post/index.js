import React from "react";
import {
	View,
	Text,
	StyleSheet,
} from "react-native";

const Post = ({
  username,
  liked_count,
  created_at,
  title,
  description
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text>
          {username}
        </Text>
      </View>
   
      <Text style={styles.description}>
        {description}
      </Text>
      <View style={styles.rowContainer}>
        <Text>{liked_count} curtidas</Text>
        <Text>{created_at}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
    marginTop: 10,
    marginBottom: 10,
		display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 100,
    borderRadius: 6,
		backgroundColor: "#38a69d",
    padding: 8,
	},
  title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	},
  description: {
    fontSize: 12,
		color: "#fff",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 12,
		color: "#fff",
  }
});

export default Post