import axios from "axios"
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/Auth/auth.constant"
import TokenStorage from "../TokenStorage/tokenStorage"

// IDA용 동적 토큰 처리를 위한 Axios 인스턴스
export const IDAcustomAxios = axios.create({
  baseURL: process.env.REACT_APP_ROLLING_API_KEY,
})

// Interceptor를 사용하여 요청 전에 토큰을 가져와서 설정합니다.
IDAcustomAxios.interceptors.request.use(async (config) => {
  const accessToken = TokenStorage.getToken(ACCESS_TOKEN_KEY) ?? ""
  config.headers[REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`
  return config
})
