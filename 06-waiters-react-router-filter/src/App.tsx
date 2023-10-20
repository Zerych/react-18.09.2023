import {Provider} from "react-redux";
import {WaitersApp} from "./features/Waiters";
import {store} from "./store";
import React from "react";

export function App() {
    return (
        <Provider store={store}>
            <WaitersApp/>
        </Provider>
    );
}
