import AsyncStorage from '@react-native-async-storage/async-storage';

const _getUsersByLocalStorage = async () => {
  const users = await AsyncStorage.getItem("users")
  if(!users) {
    await AsyncStorage.setItem("users", JSON.stringify([]))
    return []
  }

  return JSON.parse(users)
}

const _setUsersByLocalStorage = async (user) => {
  const users = await _getUsersByLocalStorage()
  users.push(user)

  await AsyncStorage.setItem("users", JSON.stringify(users))
  return users
}

export const signUser = async (user) => {
  return _setUsersByLocalStorage(user)
}

export const getUserByEmail = async (email) => {
  const users = await _getUsersByLocalStorage()
  return users.find(user => user.email === email)
}