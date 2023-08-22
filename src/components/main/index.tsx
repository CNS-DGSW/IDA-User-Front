import Chapter1 from "./Chapter/Chapter1"
import Chapter2 from "./Chapter/Chapter2"
import * as S from "./style"

const Main = () => {
  return (
    <>
      <S.MainLayout>
        <Chapter1 />
        <Chapter2 />
      </S.MainLayout>
    </>
  )
}

export default Main
