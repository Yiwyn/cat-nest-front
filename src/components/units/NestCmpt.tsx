import React from "react";
import {Avatar, Card} from "antd";
import {CardInfo} from "../../domain";

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
                cover={<img height={150} alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>}
                    title={cardInfo.title}
                    description={cardInfo.content + author}
                />
            </Card>
        </>
    )
}

export default NestCmpt