const { configureStore } = require("@reduxjs/toolkit");
import carReducer from "./slices/carSlice";

export default store = configureStore({
    reducer:{
        car: carReducer,
    },
});