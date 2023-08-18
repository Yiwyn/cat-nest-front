import React from "react";
import NestCmpt from "../units/NestCmpt.tsx";
import {CardInfo} from "../../domain";


const NestPage: React.FC = () => {
    return (
        <>
            <NestCmpt cardInfo={new CardInfo("每日新闻", "内容")} author={"yiwyn"}
                      lockStatus={true}/>

            <NestCmpt cardInfo={new CardInfo("每日新闻", "内容")} author={"yiwyn"}
                      lockStatus={false}/>
        </>
    )
}

export default NestPage