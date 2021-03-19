const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};


const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key) || false)
  // if (localStorage.getItem(key)) return localStorage.getItem(key);
  // return false;
};

const removeItem = (key) => {
  if (getItem(key) === false) return false;
  localStorage.removeItem(key);
};

const clearStorage = () => {
  localStorage.clear();
};
// const setUser = (obj) => {
//   const { email, phoneNumber, birthDate, nationalId } = obj
//   const data = {
//     firstName: '',
//     lastName: '',
//     userName: '',
//     email: email,
//     phoneNumber: phoneNumber,
//     birthDate: birthDate,
//     nationalId: nationalId
//   }
//   localStorage.setItem("user", JSON.stringify(data))

// }
const getCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem('user' || false));


  return currentUser;
}
const postCurrentUser = (data) => {
  const currentUserSet = JSON.parse(localStorage.getItem('user' || false));
  const userData = {
    firstName: data.firstName,
    lastName: data.lastName,
    fullName: data.userName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    birthDate: data.birthDate,
    nationalId: data.nationalId
  }
  // const keys = Object.keys(userData);
  // const currentUser = keys.map(key => currentUserSet[key] = userData[key]);
  const currentUser = Object.assign(currentUserSet , userData)
  setItem('user', currentUser)
  return true
}
const getUserID = () => {
  const user = getItem('user');
  const userId = user._id;
  return userId;
}

export { setItem, getItem, removeItem, clearStorage , getCurrentUser , postCurrentUser , getUserID };
