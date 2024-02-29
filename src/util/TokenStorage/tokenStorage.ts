import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/Auth/auth.constant"

interface StorageManager {
  getToken: (key: string) => string | null
  setToken: (key: string, token: string, expire?: Date) => void
  clearToken: () => void
  removeToken: (key: string) => void
}

class TokenStorage implements StorageManager {
  public getToken(key: string): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key)
    }
    return null
  }

  public setToken(key: string, token: string, expire?: Date): void {
    localStorage.setItem(key, token)
    if (expire) {
      const expirationTime = expire.getTime()
      const currentTime = new Date().getTime()

      if (currentTime >= expirationTime) {
        console.log("토큰이 만료되었습니다.")
        alert("토큰이 만료되었습니다. 다시 로그인해주세요.")
      }
    }
  }

  public clearToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }

  public removeToken(key: string): void {
    localStorage.removeItem(key)
  }
}

const tokenStorage = new TokenStorage()
export default tokenStorage
