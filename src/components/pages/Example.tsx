import {Button, Input, message} from "antd";
import {useState} from "react";
import {get} from "../../utils/http";


const {TextArea} = Input

// 案例文件


class User {
    id: string
    name: string

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }
}


export default function Example() {

    const [messageApi, contextHolder] = message.useMessage()

    const [context, setContext] = useState("")

    const [infos, setInfos] = useState([
        new User("1", "Yiwyn"), new User("2", "Cat"), new User("3", "Cortana")
    ])

    const showInfo = (message: string) => {
        messageApi.info(message)
    };

    const showTextArea = async () => {
        messageApi.info(context)
        const {data: {result}} = await get("/getImages?page=0", {params: {size: 10}})
        console.log(result)
        setContext("")
    }

    const addItem = () => {
        const id = (infos.length + 1).toString()
        const u = new User(id, "随机添加" + id)
        infos.push(u)
        const us = [...infos]
        setInfos(us)
        console.log(infos)
    }

    const infoRender = infos.map(u => (
        <li key={u.id}>
            {u.name}
        </li>
    ));

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


            {/*    列表渲染*/}
            <ul>
                {infoRender}
            </ul>
            <Button onClick={() => addItem()}>
                添加一个随机元素
            </Button>

        </>
    )

}