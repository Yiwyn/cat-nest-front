import React from "react";
import NestCmpt from "../units/NestCmpt.tsx";
import {CardInfo} from "../../domain";


const NestPage: React.FC = () => {

    return (
        <>
            <NestCmpt cardInfo={new CardInfo("标题", "内容")} author={"yiwyn"}></NestCmpt>
        </>
    )
}

export default NestPage