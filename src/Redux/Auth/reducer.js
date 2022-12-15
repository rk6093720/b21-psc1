import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "./action";

const initState = {
    isAuth : false,
    userInfo : {},
    isLoading : false,
    isError : false ,
   
} 

const reducer = (state = initState, { type, payload }) =>{
    
     switch (type){

      case LOGIN_REQUEST : {
        return {
          ...state,
          isLoading : true
        }
      }


      case LOGIN_SUCCESS : {
        return {
          ...state, 
          isLoading : false,
          isAuth : true,
          userInfo : payload 
        }
      } 

      case LOGIN_FAILURE :{
        return {
          ...state,
          isLoading : false,
          isError : true
        }
      }
        

            default:
              return state;
          }
        };
        
export { reducer };