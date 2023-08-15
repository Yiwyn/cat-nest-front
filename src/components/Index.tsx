import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import {items} from "../config/menu";
import {Route, Routes} from "react-router-dom";
import Example from "../pages/Example.tsx";

const Index: React.FC = () => {

    const [current, setCurrent] = useState('index');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>

            <Routes>
                <Route path={"/"} element={<Example/>}/>
            </Routes>

        </>
    )
}

export default Index