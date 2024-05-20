export interface getInformResType {
    id: number,
    title: string,
    content: string,
    isMajor: boolean,
    createDate: Date,
    fileResponse: [
        {
            originalName: string,
            filePath : string
        }
    ]
}

export interface getInformListResType {
    content : string,
    createDate : Date,
    fileResponse : null,
    id : number,
    isMajor : boolean,
    title : string
}
