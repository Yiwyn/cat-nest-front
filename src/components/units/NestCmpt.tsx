import React, {KeyboardEvent, SyntheticEvent, useRef, useState} from "react";
import {Avatar, Button, Card, Input, message} from "antd";
import {CardInfo} from "../../domain";
import CoverCmpt from "./CoverCmpt.tsx";


const {Meta} = Card

interface NestInfo {
    cardInfo: CardInfo
    author: string
    lockStatus: boolean
}

/**
 * 猫窝小组件
 * @constructor
 */
const NestCmpt: React.FC<NestInfo> = (nestInfo: NestInfo) => {

    const [messageApi, contextHolder] = message.useMessage()

    const {cardInfo, author, lockStatus} = nestInfo

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
            console.log(e)
            const currentId = Number.parseInt((e.target as HTMLInputElement).id)
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
                                height: "2rem", width: "2rem"
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
                    {actionsBar(lockStatus)}
                </div>
            </Card>
        </>
    )
}

export default NestCmpt