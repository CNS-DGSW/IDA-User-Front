import Footer from "../common/Footer"
import Chapter1 from "./chapter/chapter1/index"
import Chapter2 from "./chapter/chapter2/index"
import Chapter3 from "./chapter/chapter3/index"
import * as S from "./style"
import Chatbot from "@/components/ChatBot"

const Main = () => {
  return (
    <>
      <S.MainLayout>
        <Chapter1 />
        <Chapter2 />
        <Chatbot />
        <Chapter3 />
        <Footer />
      </S.MainLayout>
    </>
  )
}

export default Main
