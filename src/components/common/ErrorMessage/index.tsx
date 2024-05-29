import * as S from "./style"
import type { PropsWithChildren } from "react"

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (children)
    return <S.ErrorMessageTypography>{children}</S.ErrorMessageTypography>
  else return null
}

export default ErrorMessage
