import * as S from "./style"
import Chapter1 from "./chapter/chapter1"
import Chapter2 from "./chapter/chapter2"
import Chatbot from "@/components/chatBot"
import Footer from "@/components/common/Footer/index"

const Main = () => {
  return (
    <>
      <S.MainLayout>
        <Chapter1 />
        <Chapter2 />
        <Chatbot />
        <Footer />
      </S.MainLayout>
    </>
  )
}

export default Main
