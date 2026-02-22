import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name :"user",
    initialState :{
        userData :null,
    },
    reducers:{
        setUsers :( state , action)=>{
            state.userData=action.payload

        },
        clearUsers:(state)=>{
            state.userData=null
        }
    }
})
export const{setUsers ,clearUsers}=UserSlice.actions
export default UserSlice.reducer