import useGetBrWidth from "@/hooks/useGetBrWidth"
import { type CSSObject } from "styled-components"

const useAwardTableStyle = () => {
  const { browserWidth } = useGetBrWidth()

  const setTableTitleWidth = (mobileWidth: number) => {
    if (browserWidth > 500) return undefined
    else return String(mobileWidth)
  }

  const setTableCheckBoxSize = () => {
    if (browserWidth > 500) return undefined
    else return "10px"
  }
  const setTableCheckBoxTableWidth = (mobileWidth: number) => {
    if (browserWidth > 500) return "59"
    else return String(mobileWidth)
  }

  const setExplaneWidth = (mobileWidth: number) => {
    if (browserWidth > 500) return "186"
    else return String(mobileWidth)
  }

  const explaneFontSize = (): CSSObject => {
    return {
      fontSize: browserWidth > 500 ? "12px" : "6px",
      padding: "0 18px",
    }
  }

  const contextFontSize = (): CSSObject => {
    return {
      fontSize: browserWidth > 500 ? "12px" : "6px",
      fontStyle: "normal",
    }
  }

  const setExampleInput = (): CSSObject => {
    if (browserWidth > 500)
      return { margin: "0 auto", height: "36px", textAlign: "center" }
    else
      return {
        margin: "0 auto",
        height: "20px",
        textAlign: "center",
        width: "50px",
        fontSize: "10px",
        padding: "0",
      }
  }

  return {
    setTableTitleWidth,
    setTableCheckBoxSize,
    setTableCheckBoxTableWidth,
    setExplaneWidth,
    explaneFontSize,
    contextFontSize,
    setExampleInput,
  }
}

export default useAwardTableStyle
