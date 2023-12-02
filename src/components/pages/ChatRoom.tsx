import React, {useEffect, useRef, useState} from "react";
import MessageCmpt from "../units/MessageCmpt.tsx";
import {Button, Flex, Input} from "antd";


const ChatRoom: React.FC = () => {


    const scrollContainerRef = useRef<HTMLElement>(null);

    const [messageList, setMessageList] = useState<string[]>(["123", "234"])


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(e.target.value);
    };

    const handleClearInput = () => {
        setInputValue('');
    };

    useEffect(() => {
        // 滚动到底部
        scrollContainerRef!.current!.scrollTop = scrollContainerRef?.current?.scrollHeight as number;
    }, [messageList]);


    const sendMessage = () => {
        if (inputValue.length == 0) {
            return
        }
        handleClearInput()
        messageList.push(inputValue)
        setMessageList([...messageList])
    }


    return (
        <>
            <Flex style={{width: "100%", height: "48rem"}}>

                <Flex vertical
                      gap={"middle"}
                      style={{
                          width: "70%",
                          height: "100%",
                          margin: "1rem",
                      }}>

                    <Flex vertical
                          ref={scrollContainerRef}
                          style={{
                              height: "90%",
                              padding: "1rem",
                              width: "100%",
                              boxShadow: "3px 3px 10px 1px",
                              borderRadius: "1rem",
                              overflow: "auto",
                          }}>
                        {/*渲染消息列表*/}
                        {
                            messageList.map((e) => (
                                <MessageCmpt msgContent={e} key={e}/>
                            ))
                        }

                    </Flex>

                    <Flex style={{height: "10%"}}>
                        <Input value={inputValue} onChange={handleInputChange} onPressEnter={sendMessage}/>
                        <Button type="primary" onClick={sendMessage}
                                style={{height: "100%", marginLeft: "1rem"}}>发送</Button>
                    </Flex>
                </Flex>

                <Flex vertical

                      style={{
                          width: "30%",
                          height: "100%",
                          boxShadow: "3px 3px 10px 1px",
                          margin: "1rem",
                          padding: "1rem",
                          borderRadius: "1rem"
                      }}>
                    <MessageCmpt msgContent={"文件一"}/>
                    <MessageCmpt msgContent={"文件二"}/>
                    <MessageCmpt msgContent={"文件三"}/>
                </Flex>
            </Flex>

        </>
    )
}

export default ChatRoom