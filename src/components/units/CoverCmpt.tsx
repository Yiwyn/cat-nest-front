import React from "react";

interface ConverInfo {
    title: string
    imgUrl: string
}

const CoverCmpt: React.FC<ConverInfo> = (info: ConverInfo) => {
    return (
        <>
            <div style={{position: "relative"}}>
                <img height={150} width={240} alt="example"
                     src={info.imgUrl} style={{filter: "blur(1px)"}}/>
                <div style={{position: "absolute", left: "10%", top: "10%", fontSize: "1.5rem"}}>
                    {info.title}
                </div>
            </div>
        </>
    )
}

export default CoverCmpt