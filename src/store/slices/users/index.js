import { createSlice } from "@reduxjs/toolkit";
import Alert from "../../../services/AlertService";
import { postPublic } from "../../../services/apiServices";
export const userSlice = createSlice({
  name: "userLogged", //con este name me voy a referir en los estados
  initialState: {
    user: null, //mi usuario al no estar logeado esta en null, luego del pedido a a api lo voy a tener con data
  },
  reducers: {
    //actions
    setUserLogged: (state, action) => {
      //en el action me viene la data de la api y lo igualo al estado asi actualizo ese estado con al nueva data
      state.user = action.payload;
    },
    deleteUserLogged: (state) =>{

      state.user = null
    },
  }, //podemos tener muchos reducers
});

export const selectUser = (state) => state.userLogged.user;

export default userSlice.reducer; //exporto del userSlice el reducer , para poder usarlo en la store, porque el reducer de la store esta formado
// por varios reducer que viene de diferentes slices  que son parte de nuestro estado

//exporto la actions para usarla en los pedidos a la api

export const { setUserLogged, deleteUserLogged } = userSlice.actions; //el userSlice siente una propiedad actions que aloja todas nuestras acciones

//api requests
export const login = (fields, OnSuccess) => {
  //a las actions solo las puede ejecutar un dispatch entonces se lo paso como parámetro a la función
  return (dispatch) => {

    let endpoint = '/auth/login'



   postPublic( endpoint , fields)
      .then(({ data }) => {
        dispatch(setUserLogged(data)); //esto pasa al actions de setUserLogged a la propiedad de payload   
        console.log(data)
        localStorage.setItem("token", data.accessToken);
        OnSuccess();
      })
      .catch((err) => {
        console.log(err)
        Alert.error({ title:  err.response.data.name, message: err.response.data.message })
      });
  };
};

export const register = (fields , OnSuccess) => {
  //a las actions solo las puede ejecutar un dispatch entonces se lo paso como parámetro a la función
  return (dispatch) => {

    let endpoint = '/auth/register'
    console.log(fields)
   postPublic( endpoint , fields)
      .then(({ data }) => {
        dispatch(setUserLogged(data)); //esto pasa al actions de setUserLogged a la propiedad de payload   
        localStorage.setItem("token", data.accessToken);
        OnSuccess();
      })
      .catch((err) => {
        console.log(err)
        Alert.error({ title:  err.response.data.name, message: err.response.data.message })
      });
  };
};



export const logout = (dispatch, onLogout) =>{
  //token name may change in future version, unsafe name.
  localStorage.removeItem("token");
  dispatch(deleteUserLogged())
  return  onLogout()
   
}
