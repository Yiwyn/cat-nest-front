import React, {useState} from "react";
import NestCmpt from "../units/NestCmpt.tsx";
import {CardInfo} from "../../domain";
import {List} from "antd";

const NestPage: React.FC = () => {

    const [data] = useState<CardInfo[]>([
        new CardInfo("每日新闻", "内容", "YIWYN", false),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", false),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
    ])

    return (
        <>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 5,
                    xxl: 5,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <NestCmpt cardInfo={item}/>
                    </List.Item>
                )}
            />
        </>
    )
}

export default NestPage