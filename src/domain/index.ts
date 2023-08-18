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


export {
    CardInfo
}
export type {INestInfo}
