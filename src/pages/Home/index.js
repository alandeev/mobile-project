import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";
import Post from "../../components/post";

const posts = [
	{
		username: "Alandev",
		title: "Titulo aleatorio...",
		liked_count: "10",
		created_at: "10 minutos atrás...",
		description: "Lorem impsu bal bla bla ...."
	},
	{
		username: "Alandev",
		title: "Titulo aleatorio...",
		liked_count: "10",
		created_at: "10 minutos atrás...",
		description: "Lorem impsu bal bla bla ...."
	},
	{
		username: "Alandev",
		title: "Titulo aleatorio...",
		liked_count: "10",
		created_at: "10 minutos atrás...",
		description: "Lorem impsu bal bla bla ...."
	},
	{
		username: "Alandev",
		title: "Titulo aleatorio...",
		liked_count: "10",
		created_at: "10 minutos atrás...",
		description: "Lorem impsu bal bla bla ...."
	},
	{
		username: "Alandev",
		title: "Titulo aleatorio...",
		liked_count: "10",
		created_at: "10 minutos atrás...",
		description: "Lorem impsu bal bla bla ...."
	},
	{
		username: "Alandev",
		title: "Titulo aleatorio...",
		liked_count: "10",
		created_at: "10 minutos atrás...",
		description: "Lorem impsu bal bla bla ...."
	},
	{
		username: "Alandev",
		title: "Titulo aleatorio...",
		liked_count: "10",
		created_at: "10 minutos atrás...",
		description: "Lorem impsu bal bla bla ...."
	},
	{
		username: "Alandev",
		title: "Titulo aleatorio...",
		liked_count: "10",
		created_at: "10 minutos atrás...",
		description: "Lorem impsu bal bla bla ...."
	},
	{
		username: "Alandev",
		title: "Titulo aleatorio...",
		liked_count: "10",
		created_at: "10 minutos atrás...",
		description: "Lorem impsu bal bla bla ...."
	}
]

const Finish = ({ navigation }) => {
	const handleOpenProfile = () => {
		alert("Perfil temporariamente indisponível...")
	}

	const handleLogoutButton = () => {
		navigation.navigate("SignIn")
	}
	
	return (
		<View style={styles.container}>
			<Animatable.View
				animation="fadeInLeft"
				delay={300}
				style={styles.containerHeader}
			>
				<Text style={styles.textSection}>Facelook</Text>
				<Icon.Button
					name="user"
					size={30}
					color="#fff"
					backgroundColor={"#98FB98"}
					onPress={handleOpenProfile}
				/>
			</Animatable.View>

			<Animatable.View
				animation="fadeInUp"
				delay={300}
				style={styles.sectionContainer}
			>
				<FlatList data={posts} 
					renderItem={({item}) => (
						<Post 
							username={item.username}
							title={item.title}
							liked_count={item.liked_count}
							created_at={item.created_at}
							description={item.description} 
						/>
					)}
				/>
			</Animatable.View>
			<View style={styles.footerContainer}>
				<Icon.Button
					name="logout"
					size={30}
					color="tomato"
					backgroundColor={"#98FB98"}
					onPress={handleLogoutButton}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	textSection: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#fff",
	},
	footerContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "#98FB98",
		height: 60
	},
	sectionContainer: {
		flex: 1,
		margin: 5
	},
	postContainer: {
		backgroundColor: "#000000",
		height: 40,
		width: "100%"
	},
	container: {
		flex: 1,
		backgroundColor: "#98FB98",
	},
	containerHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 12
	},
	message: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#fff",
	},
	title: {
		fontSize: 40,
		marginTop: 48,
	},
	buttonText: {
		color: "#fff",
		fontSize: 28,
	},
	buttonRegister: {
		marginTop: 14,
		alignSelf: "center",
	},
	registerText: {
		color: "#9370DB",
	},
});

export default Finish;
