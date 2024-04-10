import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Slice/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});

export default store;