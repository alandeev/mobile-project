import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	// TouchableOpacity é um wrapper para fazer com que uma View responda apropriadamente a toques
} from "react-native";
import * as Animatable from "react-native-animatable";
import { getUserByEmail } from "../../services/users";
// para adicionar animações simples ao RN (react native), apresentaremos como usar react - native - animatable que reuniu animações úteis básicas

const SignIn = ({ navigation }) => {
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")

	const handleSignButton = async () => {
		if(email.length < 6) {
			return alert("Email não preenchido corretamente.")
		}	

		if(password.length < 6) {
			return alert("Senha não preenchido corretamente.")
		}	

		const user = await getUserByEmail(email)
		if(!user) {
			return alert("Usuário não encontrado.")
		}

		if(user.password !== password) {
			return alert("Senha invalida.")
		}

		navigation.navigate("Home")
	}

	return (
		<View style={styles.container}>
			<Animatable.View
				animation="fadeInLeft"
				delay={500}
				style={styles.containerHeader}
			>
				<Text style={styles.message}>Bem-vindo(a)</Text>
			</Animatable.View>

			<Animatable.View
				animation="fadeInUp"
				delay={500}
				style={styles.containerForm}
			>
				<Text style={styles.title}>Email</Text>
				<TextInput 
					placeholder="Digite um email..." 
					onChangeText={setEmail} 
					style={styles.input} 
				/>

				<Text style={styles.title}>Senha</Text>
				<TextInput 
					placeholder="Sua senha..." 
					onChangeText={setPassword} 
					secureTextEntry 
					style={styles.input} 
				/>

				<TouchableOpacity 
					onPress={handleSignButton} 
					style={styles.button}
				>
					<Text style={styles.buttonText}>Acessar</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					onPress={() => navigation.navigate("SignUp")} 
					style={styles.buttonRegister}
				>
					<Text style={styles.registerText}>
						Não possui uma conta? Cadastre-se
					</Text>
				</TouchableOpacity>
			</Animatable.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#38a69d",
	},
	containerHeader: {
		marginTop: "14%",
		marginBottom: "8%",
		paddingStart: "5%",
	},
	message: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#fff",
	},
	containerForm: {
		flex: 1,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingStart: "5%",
		paddingEnd: "5%",
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 20,
		marginTop: 28,
	},
	input: {
		borderBottomWidth: 1,
		height: 40,
		marginBottom: 12,
		fontSize: 16,
	},
	button: {
		backgroundColor: "#38a69d",
		width: "100%",
		borderRadius: 4,
		paddingVertical: 8,
		marginTop: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
	buttonRegister: {
		marginTop: 14,
		alignSelf: "center",
	},
	registerText: {
		color: "#a1a1a1",
	},
});

export default SignIn;
