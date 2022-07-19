import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loaderState',
    initialState: {
        loader: [false, false], //se puede agregar elementos como cantidad de loaders simultáneos halla
        err:[{
            state:false,
            typeError:""
            },
            {
            state:false,
            typeError:""
            }]
    },
    reducers: {
        //actions
        setStateLoader: (state, action) => {
         state.loader[action.payload.loadPosition]= action.payload.loading;           
        },
        setStateError:(state, action) => {
            console.log(action.payload.errPosition)
            console.log(action.payload.err)

        state.err[action.payload.errPosition]= action.payload.err;
        }
}
})

export default loadingSlice.reducer

export const { setStateLoader,setStateError } = loadingSlice.actions

export const stateLoading = ({loading=false,loadPosition=0}) => {
    return (dispatch) => {
        dispatch(setStateLoader({loading,loadPosition}))
    }
}
export const stateError = (errPosition, err) => {
    return (dispatch) => {
        dispatch(setStateError({errPosition,err}))
    }
}
