import { createSlice } from "@reduxjs/toolkit";
import { spinPrice } from "../actions/SpinAction";



const SpinSlice = createSlice({
    name: "Spin",
    initialState: {
        isLoading: false,
        spinData:null,
        // xyz:null,
        // so on ...
    },
    reducers:{
        // setContractTypeData: (state, action) => {
        //     state.xyz = action.payload;
        //   }
    },
    extraReducers:(builder)=> {

        builder.addCase(spinPrice.pending,(state,action)=>{
            state.isLoading= true;
        });
        builder.addCase(spinPrice.fulfilled,(state,action)=>{
            state.isLoading= false;
            state.spinData = action.payload;
        });
        builder.addCase(spinPrice.rejected,(state,action)=>{
            state.isLoading=false;
            state.spinData = action.payload;
        });
    }

})

// export const {setContractTypeData} = spinData.action;

export default SpinSlice.reducer;