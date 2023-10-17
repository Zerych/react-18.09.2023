import React from "react";
import {WaiterList} from "./WaiterList";
import {FormEdit} from "./FormEdit";

export function WaitersApp() {
    return (
        <>
            <FormEdit/>
            <WaiterList/>
        </>
    );
}