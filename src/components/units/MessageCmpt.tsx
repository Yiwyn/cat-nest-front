import React, {useState} from 'react';
import {Avatar, Popover, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';

const MessageCmpt: React.FC = () => {


    const username: string = "Yiwyn"

    const [open, setOpen] = useState(false);

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    return (
        <>
            <Space direction="vertical" size="small" style={{display: 'flex', marginBottom: "1rem"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Avatar size={42} icon={<UserOutlined/>}
                            style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}/>
                    {username}:
                </div>
                <Popover
                    content={<a onClick={hide}>Close</a>}
                    trigger="click"
                    open={open}
                    onOpenChange={handleOpenChange}
                >
                    <div style={{
                        marginLeft: "2rem",
                        width: "max-content",
                        padding: "0.5rem 1rem",
                        boxShadow: "0.5px 0.5px 1px 1px gray",
                        borderRadius: "0.3rem"
                    }}>
                        Hello CatNest! 你好 猫窝!


                    </div>
                </Popover>
            </Space>
        </>

    )
}

export default MessageCmpt;