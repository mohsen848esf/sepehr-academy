import jwt_decode from 'jwt-decode'
const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key) || false)
}

const removeItem = (key) => {
  if (getItem(key) === false) return false
  localStorage.removeItem(key)
}

const clearStorage = () => {
  localStorage.clear()
}

const getCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem('user' || false))

  return currentUser
}

const getUserID = () => {
  const jwtToken = getItem('token')
  const decode = jwt_decode(jwtToken)

  const userId = decode._id
  return userId
}

export { setItem, getItem, removeItem, clearStorage, getCurrentUser, getUserID }
