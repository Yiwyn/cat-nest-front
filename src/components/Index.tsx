import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import {items} from "../config/menu";
import {Route, Routes, useNavigate} from "react-router-dom";
import {routers} from "../router";

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

            <div style={{margin: "2rem"}}>
                <Routes>
                    {routers.map(u => (
                        <Route path={u.path} element={<u.element/>}/>
                    ))}
                </Routes>
            </div>
        </>
    )
}

export default Index