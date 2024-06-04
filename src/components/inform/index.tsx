import React from "react"
import * as S from "./style"
import InformContents from "./listbox"
import InformIcon from "@/assets/img/Icon/informIcon.svg"
import { useInformQuery } from "@/hooks/Inform/useInformQuery"

const Inform = () => {
  // const [informData, setInformData] = useState<IInformContentsProps[]>([])
  // useEffect(() => {
  //   const dummyData: IInformContentsProps[] = [...InformData.inform]
  //   setInformData([...dummyData])
  // }, [])

  const { getInformListData } = useInformQuery()

  return (
    <S.MainComponentLayout>
      <S.InformContentsCol>
        <S.InformNotificationIconBox>
          <InformIcon />
        </S.InformNotificationIconBox>
        <S.InformTitleParagraph>공지사항</S.InformTitleParagraph>
        {getInformListData?.map((EachInformData) => (
          <InformContents
            key={EachInformData.id}
            title={EachInformData.title}
            createDate={EachInformData.createDate}
            isMajor={EachInformData.isMajor}
            content={EachInformData.content}
            id={EachInformData.id}
            fileResponse={EachInformData.fileResponse}
          />
        ))}
      </S.InformContentsCol>
    </S.MainComponentLayout>
  )
}

export default Inform
