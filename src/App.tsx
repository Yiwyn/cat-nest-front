import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Index from "./components/Index.tsx";
import "./App.css"

const App: React.FC = () => (
    <BrowserRouter>
        <Index></Index>
    </BrowserRouter>
)
export default App;