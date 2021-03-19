
import axios from "axios";
import { setItem, getItem, clearStorage, removeItem } from "./storage/storage";
import http from './http-service.api';

const API_URL= process.env.REACT_APP_PUBLIC_PATH;
// const API_URL = "http://localhost:3000/api/auth/";
// const API_URL = "http://localhost:3000/api/";

// class AuthService {
//   login = async (user) => {
//     try {
//       const response = await 
//         http.post(API_URL + "auth/login", user);  
//       setItem("token", response.data.result.jwtToken);   
//       this.props.history.replace("/");
//       window.location.reload();
//       return response.data.result;
//     }
//     catch (error) {
//       return {};
//     }
//   }
//   // login = async (user) => {
//   //   try {
//   //     const response = await 
//   //       axios.post(API_URL + "auth/login", user);  
//   //       setItem("token", response.data.result.jwtToken);      
//   //     return response.data.result;
//   //   }
//   //   catch (error) {
//   //     return {};
//   //   }
//   // }

//   // async login(email, password) {
//   //   const response = await axios
//   //     .post("http://localhost:3000/api/auth/login", { email, password });
//   //   if (response.data.accessToken) {
//   //     localStorage.setItem("user", JSON.stringify(response.data));
//   //   }
//   //   return response.data;
//   // }
//   // login(username, password) {
//   //   return axios
//   //     .post(API_URL + "signin", { username, password })
//   //     .then((response) => {
//   //       if (response.data.accessToken) {
//   //         localStorage.setItem("user", JSON.stringify(response.data));
//   //       }

//   //       return response.data;
//   //     });
//   // }

//   // logout() {
//   //   clearStorage();
//   // }
//   logout() {
//     removeItem("user");
//   }

//   register(user) {
//      return http.post(API_URL + "auth/register", {
//       fullName: user.fullName,
//       email: user.email,
//       password: user.password,
//       phoneNumber: user.phoneNumber,
//       birthDate: user.birthDate,
//       nationalId: user.nationalId,

//      });
    
//   }
//   getCurrentUser() {
//     return JSON.parse(localStorage.getItem('user'));;
//   }
// }

// export default new AuthService();
// export default {
//   login: AuthService.login,
//   register: AuthService.register,
//   logout: AuthService.logout
// };
export function login(user) {
  return http.post(API_URL + "auth/login", user);
  
}
export function forgetpass(userEmail) {
  return http.post(API_URL + "forgetpassword",{email : userEmail} );
  
}
export function resetpass(token ,userPass) {
  return http.post(API_URL + `resetpassword/:${token}`,{password : userPass} );
  
}
export function UpdateStudent(userId ,userdata) {
  return http.put(API_URL + `student/${userId}`, userdata );
}


export function register(user) {
  return http.post(API_URL + "auth/register", {
       fullName: user.fullName,
       email: user.email,
       password: user.password,
       phoneNumber: user.phoneNumber,
       birthDate: user.birthDate,
       nationalId: user.nationalId,

      });
}

// export const getCourses = async () => {
//   try {
//     const res = await http.get(API_URL + "course")
//   } catch (error) {
    
//   }
// }
// export const getAllTerms = async () => {
//   try {
//     const res = await http.get(API_URL + "term/getall")
//     console.log(res.data.result)
//     return res.data.result
//   } catch (error) {
    
//   }
// };
