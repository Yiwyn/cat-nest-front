import React, {KeyboardEvent, SyntheticEvent, useRef, useState} from "react";
import {Avatar, Button, Card, Input, message} from "antd";
import {INestInfo} from "../../domain";
import CoverCmpt from "./CoverCmpt.tsx";


const {Meta} = Card


/**
 * 猫窝小组件
 * @constructor
 */
const NestCmpt: React.FC<INestInfo> = (nestInfo: INestInfo) => {

    const [messageApi, contextHolder] = message.useMessage()

    const {cardInfo} = nestInfo

    const [pwdValues, setPwdValues] = useState(Array(6).fill(""))

    // 检测密码框变化
    const pwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentId = e.target.id;
        const number = Number.parseInt(currentId);
        pwdValues[number] = e.target.value

        setPwdValues([...pwdValues])
        if (!e.target.value) {
            return;
        }
        const nextId = number + 1
        if (nextId > 5) {
            //开始校验密码
            lock.current?.focus();
            messageApi.info(pwdValues)
            return;
        }
        const current = pwdInput.current;
        const element = current?.children[nextId] as HTMLInputElement
        element.focus()
    };

    //选中密码框
    const onPwdSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
        (e.target as HTMLInputElement).value = ''
    }
    const onPwdKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;
        if (key === 'Backspace') {
            const currentId = Number.parseInt((e.target as HTMLInputElement).id)
            pwdValues[currentId] = ''
            setPwdValues([...pwdValues])
            const preId = Math.max(currentId - 1, 0)
            const element = pwdInput.current?.children[preId] as HTMLInputElement
            element.focus()
        }
    }

    const clearAll = () => {
        setPwdValues(Array(6).fill(""))
    }

    //密码组件父组件
    const pwdInput = useRef<HTMLDivElement>(null)
    //解锁组件
    const lock = useRef<HTMLElement>(null)

    //渲染可操作栏
    const actionsBar = (isLock: boolean) => {
        if (isLock) {
            return (
                <div style={{textAlign: "center"}}>
                    <div ref={pwdInput} style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        {Array.from(Array(6).keys()).map(e => (
                            <Input size={"small"} maxLength={1} style={{
                                height: "1.8rem", width: "1.8rem"
                            }} onChange={pwdChange} id={e.toString()}
                                   onSelect={onPwdSelect}
                                   onKeyDown={onPwdKeyDown}
                                   key={e}
                                   value={pwdValues[e]}
                            />
                        ))}
                    </div>
                    <Button ref={lock}>解锁</Button>
                    <Button onClick={clearAll}>清除</Button>
                </div>
            )
        }
        return (
            <div style={{textAlign: "center"}}>
                <Button type={"primary"}>join</Button>
            </div>
        )
    }

    return (
        <>
            {contextHolder}
            <Card
                hoverable
                size={"small"}
                style={{width: 220, margin: 5}}
                cover={
                    <CoverCmpt imgUrl={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                               title={cardInfo.title + cardInfo.author}/>
                }
            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>}
                    description="This is the description"
                />
                <div>
                    {actionsBar(cardInfo.lockStatus)}
                </div>
            </Card>
        </>
    )
}

export default NestCmpt