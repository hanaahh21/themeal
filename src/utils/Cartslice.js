import { createSlice } from '@reduxjs/toolkit'

const Cartslice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        additems:(state,action)=>{
           if(state.items.includes(action.payload)===false)
           {
            state.items.push(action.payload);
           }
           
        },
        removeitems:(state,action)=>{

            let cnt=0;
            state.items.map((data)=>{
                if(data===action.payload)
                {
                    state.items.splice(cnt, 1);
                }
                cnt++;
            })
        },
        clearitems:(state)=>{
            state.items=[];
        },
    }
})

export const{additems,removeitems,clearitems}=Cartslice.actions;
export default Cartslice.reducer;