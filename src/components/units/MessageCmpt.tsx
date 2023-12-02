import React, {useState} from 'react';
import {Avatar, Popover, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {MessageInfo} from "../../domain";

const MessageCmpt: React.FC<MessageInfo> = (messageInfo: MessageInfo) => {


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
                        marginLeft: "4rem",
                        width: "max-content",
                        maxWidth: "100%",
                        padding: "0.5rem 0.5rem",
                        boxShadow: "3px 3px 5px 1px",
                        borderRadius: "0.3rem",
                    }}>
                        {messageInfo.msgContent}

                    </div>
                </Popover>
            </Space>
        </>

    )
}

export default MessageCmpt;