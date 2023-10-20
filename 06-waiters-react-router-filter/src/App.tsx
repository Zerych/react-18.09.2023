import {Provider} from "react-redux";
import {WaitersApp} from "./features/Waiters";
import {store} from "./store";
import React from "react";
import {Home} from "./features/Home";
import {NotFound} from "./features/NotFound";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import "./App.css";

export function App() {
    const isActiveClass = ({isActive}: any) => isActive ? "active" : "";

    return (
        <Provider store={store}>
            <BrowserRouter>
                <nav className='navigation'>
                    <NavLink to="/" className={isActiveClass} end>Home</NavLink>{' | '}
                    <NavLink to="/waiters" className={isActiveClass}>Waiters</NavLink>{' | '}
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/waiters/*" element={<WaitersApp/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
