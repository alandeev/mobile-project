import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { getUserByEmail, signUser } from "../../services/users";

const SignUp = ({ navigation }) => {
	const [ name, setName ] = useState("")
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")
	const [ confirmPassword, setConfirmPassword ] = useState("")

	const handleSignUpButton = async () => {
		if(name.length < 6) {
			return alert("Nome não preenchido corretamente.")
		}

		if(email.length < 6) {
			return alert("Email não preenchido corretamente.")
		}	

		if(password.length < 6) {
			return alert("Senha necessita ter no minimo 6 caracteres.")
		}	

		if(password !== confirmPassword) {
			return alert("Senha de confirmação precisa ser igual a senha.")
		}

		const user = await getUserByEmail(email)
		if(user) {
			return alert("Já existe uma conta com esse email.")
		}

		await signUser({
			name,
			email,
			password,
		})
		
		navigation.navigate("SignIn")
	}

	return (
		<View style={styles.container}>
			<Animatable.View
				animation="fadeInLeft"
				delay={300}
				style={styles.containerHeader}
			>
				<Text style={styles.message}>Cadastre(se)</Text>
			</Animatable.View>

			<Animatable.View
				animation="fadeInUp"
				delay={500}
				style={styles.containerForm}
			>
				<Text style={styles.title}>Nome completo</Text>
				<TextInput 
					onChangeText={setName} 
					placeholder="Nome completo..." 
					style={styles.input} 
				/>

				<Text style={styles.title}>Email</Text>
				<TextInput 
					onChangeText={setEmail} 
					placeholder="Email..." 
					style={styles.input} 
				/>

				<Text style={styles.title}>Senha</Text>
				<TextInput 
					placeholder="Senha..." 
					onChangeText={setPassword} 
					secureTextEntry 
					style={styles.input} 
				/>

				<Text style={styles.title}>Confirmar Senha</Text>
				<TextInput 
					placeholder="Confirmar senha..." 
					onChangeText={setConfirmPassword} 
					secureTextEntry 
					style={styles.input} 
				/>

				<TouchableOpacity 
					onPress={handleSignUpButton} 
					style={styles.button}
				>
					<Text style={styles.buttonText}>Cadastrar</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					onPress={() => navigation.navigate("SignIn")} 
					style={styles.buttonRegister}
				>
					<Text style={styles.registerText}>
						Ja possui uma conta? Conectar-se
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

export default SignUp;
