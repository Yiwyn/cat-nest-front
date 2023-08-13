import {Button, Input, message} from "antd";
import {useState} from "react";

const {TextArea} = Input
// 案例文件
export default function Example() {

    const [messageApi, contextHolder] = message.useMessage()

    const [context, setContext] = useState("")


    const showInfo = (message: string) => {
        messageApi.info(message)
    };

    const showTextArea = () => {
        console.log(context)
        setContext("")
    }

    return (
        <>
            {contextHolder}
            <div>
                yiwyn's demo
            </div>

            {/*按钮绑定事件*/}
            <Button type={"primary"} onClick={() => showInfo("Hello CatMest")}>
                Hello Cat Nest
            </Button>
            <br/> <br/>

            {/*这里是变量双向绑定的方法*/}
            <TextArea onChange={e => {
                setContext(e.target.value)
            }} value={context}>
            </TextArea>
            <Button type={"primary"} onClick={() => showTextArea()}>
                弹出内容
            </Button>
        </>
    )

}