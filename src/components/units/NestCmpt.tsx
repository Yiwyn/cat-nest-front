import React, {useRef} from "react";
import {Avatar, Card, Form, Input, message} from "antd";
import {CardInfo} from "../../domain";
import CoverCmpt from "./CoverCmpt.tsx";

import {LockOutlined} from '@ant-design/icons';

const {Meta} = Card

interface NestInfo {
    cardInfo: CardInfo
    author: string
}

/**
 * 猫窝小组件
 * @constructor
 */
const NestCmpt: React.FC<NestInfo> = (nestInfo: NestInfo) => {

    const [messageApi, contextHolder] = message.useMessage()

    const {cardInfo, author} = nestInfo


    const pwdValues: string[] = Array(6).fill("")
    const pwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentId = e.target.id;
        console.log("当前选择的id", currentId)
        const number = Number.parseInt(currentId);
        pwdValues[number] = e.target.value
        if (!e.target.value) {
            return;
        }
        const nextId = number + 1
        if (nextId > 5) {
            //开始校验密码
            form.resetFields()
            messageApi.info(pwdValues)
            return;
        }
        const current = pwdInput.current;
        const element = current?.children[nextId] as HTMLInputElement
        element.focus()
    };

    const pwdInput = useRef<HTMLDivElement>(null)

    const [form] = Form.useForm();

    return (
        <>
            {contextHolder}
            <Card
                hoverable
                size={"small"}
                style={{width: 240, margin: 5}}
                cover={
                    <CoverCmpt imgUrl={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                               title={cardInfo.title + author}/>
                }
            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>}
                    description="This is the description"
                />

                <div>
                    <div ref={pwdInput} style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        {Array.from(Array(6).keys()).map(e => (
                            <Input size={"small"} maxLength={1} style={{
                                height: "2rem", width: "2rem"
                            }} onChange={pwdChange} id={e.toString()}
                                   key={e}
                            />
                        ))}

                    </div>
                    <LockOutlined key="lock"/>
                </div>
            </Card>
        </>
    )
}

export default NestCmpt