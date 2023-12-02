import React from "react";

class CardInfo {
    title: string
    content: string
    author: string
    lockStatus: boolean


    constructor(title: string, content: string, author: string, lockStatus: boolean) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.lockStatus = lockStatus;
    }
}

interface INestInfo {
    cardInfo: CardInfo
}


class MessageInfo {

    msgContent: string

    constructor(content: string) {
        this.msgContent = content;
    }
}


class CatNestRoute {
    name: string
    path: string
    element: React.FC

    constructor(name: string, path: string, element: React.FC) {
        this.name = name;
        this.path = path;
        this.element = element;
    }
}


export {
    CardInfo, CatNestRoute, MessageInfo
}
export type {INestInfo}
