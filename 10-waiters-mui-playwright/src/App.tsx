import {Provider} from "react-redux";
import {WaitersApp} from "./features/Waiters";
import {store} from "./store";
import React from "react";
import {Home} from "./features/Home";
import {NotFound} from "./features/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Navigation} from "./components/Navigation";

export function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Container maxWidth="md">
                    <Stack spacing={2}>
                        <AppBar position="static">
                            <Toolbar>
                                <Navigation/>
                            </Toolbar>
                        </AppBar>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/waiters/*" element={<WaitersApp/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </Stack>
                </Container>
            </BrowserRouter>
        </Provider>
    );
}
