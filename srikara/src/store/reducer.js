import { createSlice } from "@reduxjs/toolkit"
const users = [
    {
        id : 1,
        name : "John",
        email : "john@example.com"
    },

    {
        id : 2,
        name : "Smith",
        email : "smith@example.com"
    }
]

const initialState = users;

const reducer = createSlice({
    name : 'users',
    initialState,
    reducers:{

        //Create user
        create(state,action){
            console.log(action.payload);
            state.push(action.payload)
            
        },

        //Delete User
        deleteUser(state,action){
            return state.filter((user)=>user.id !== action.payload)

        },

        updateUser(state,action){
            const{id,name,email} = action.payload;
            const findUser=state.find((users)=>users.id == id)

            if(findUser){
                findUser.name=name;
                findUser.email=email;
            }

        }

    }
})

export const { create,deleteUser,updateUser } = reducer.actions;

export default reducer.reducer;

