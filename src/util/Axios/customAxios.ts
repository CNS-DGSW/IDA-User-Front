import axios from "axios"
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/Auth/auth.constant"
import Token from "../Token/Token"

// 사용자 지정 기본 URL을 갖는 Axios 인스턴스
export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_IDA_API_KEY,
})

// IDA용 동적 토큰 처리를 위한 Axios 인스턴스
export const IDAaxios = axios.create({
  baseURL: process.env.REACT_APP_ROLLING_API_KEY,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY) ?? ""}`,
  },
})
