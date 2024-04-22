export interface SignInPropsType {
    email : string,
    password : string
}

export interface SignInResType {
    data : {
        accessToken : string,
        refreshToken : string
    }
}