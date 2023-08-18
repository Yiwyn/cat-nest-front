import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import {items} from "../config/menu";
import {Route, Routes, useNavigate} from "react-router-dom";
import Example from "./pages/Example.tsx";
import NestPage from "./pages/NestPage.tsx";

const Index: React.FC = () => {

    const [current, setCurrent] = useState('nest');
    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        navigate(e.key)
        setCurrent(e.key);
    };

    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>

            <Routes>
                <Route path={"/"} element={<NestPage/>}/>
                <Route path={"/nest"} element={<NestPage/>}/>
                <Route path={"/my"} element={<Example/>}/>
            </Routes>

        </>
    )
}

export default Index