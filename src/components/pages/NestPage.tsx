import React, {useState} from "react";
import NestCmpt from "../units/NestCmpt.tsx";
import {CardInfo} from "../../domain";
import {FloatButton, List, Segmented, Space} from "antd";
import {FireOutlined} from '@ant-design/icons';
import style from "./NestPage.module.css"

const NestPage: React.FC = () => {

    const [data] = useState<CardInfo[]>([
        new CardInfo("每日新闻", "内容", "YIWYN", false),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", false),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true)
    ])

    const [open, setOpen] = useState(true);

    const onClickRecord = () => {
        setOpen(!open);
    };

    return (
        <>
            <Space direction="vertical" style={{margin: "1rem"}}>
                <Segmented options={['OPEN', 'CLOSE', 'LOCK', 'UNLOCK']}/>
                <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}/>
            </Space>

            <Space style={{margin: "1rem"}}>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 5,
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
            </Space>


            <FloatButton.Group
                open={open}
                onClick={onClickRecord}
                trigger="click"
                style={{right: 24}}
                icon={<FireOutlined/>}
            >
                <div className={style.globalBox}>
                    <div className={style.globalInfo}>创建了一个猫窝 ， 去看看吧
                        ～！
                    </div>

                    <div className={style.globalInfo}>创建了一个猫窝 ， 去看看吧
                        ～！
                    </div>
                    <div className={style.globalInfo}>创建了一个猫窝 ， 去看看吧
                        ～！
                    </div>
                    <div className={style.globalInfo}>创建了一个猫窝 ， 去看看吧
                        ～！
                    </div>
                </div>
            </FloatButton.Group>
        </>
    )
}

export default NestPage