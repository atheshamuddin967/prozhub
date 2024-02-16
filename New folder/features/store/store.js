import { configureStore } from "@reduxjs/toolkit";
import Slicer from "../Slicers/Slicer";

export const store = configureStore({
    reducer : {Slicer}
}) 

