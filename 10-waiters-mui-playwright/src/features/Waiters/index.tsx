import React from "react";
import {FormEdit} from "./FormEdit";
import {Route, Routes} from "react-router-dom";
import {NotFound} from "../NotFound";
import {WaitersList} from "./WaitersList";

export function WaitersApp() {
    return (
        <Routes>
            <Route path="/" element={<WaitersList/>}/>
            <Route path="/create" element={<FormEdit/>}/>
            <Route path="/edit/:id" element={<FormEdit/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}