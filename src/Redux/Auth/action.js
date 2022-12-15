import axios from "axios";
export  const  LOGIN_SUCCESS = "LOGIN_SUCCESS";
export  const  LOGIN_REQUEST = "LOGIN_REQUEST";
export  const  LOGIN_FAILURE = "LOGIN_FAILURE";


export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";




const register = (payload) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post("https://user-1xkr.onrender.com/users", payload)
    .then((r) => {
     return  dispatch({ type: REGISTER_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: REGISTER_FAILURE, payload: e }));
};

const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios

    .get("https://user-1xkr.onrender.com/users")
    .then((r) => { 
         
      console.log(email, password) 
      let flag = false;
      for( let i = 0; i < r.data.length; i++)
      {
          if(r.data[i].email === email && r.data[i].password === password)
          {  
            flag = true;
             return dispatch({ type: LOGIN_SUCCESS, payload: r.data[i] });
          }
      }
      if(flag === false){
        return "Invalid email or password"
      }
      

    })
    .catch((e) => {
      dispatch({ type: LOGIN_FAILURE});
    });
};

export {login, register}