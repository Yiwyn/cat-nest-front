import React from "react";
import {Avatar, Card} from "antd";
import {CardInfo} from "../../domain";
import CoverCmpt from "./CoverCmpt.tsx";

import {SettingOutlined} from '@ant-design/icons';

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

    const {cardInfo, author} = nestInfo

    return (
        <>
            <Card
                hoverable
                size={"small"}
                style={{width: 240, margin: 5}}
                cover={
                    <CoverCmpt imgUrl={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                               title={cardInfo.title + author}/>
                }
                actions={[
                    <SettingOutlined key="setting"/>,

                ]}
            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>}
                    description="This is the description"
                />
            </Card>
        </>
    )
}

export default NestCmpt