import Contents from "./contents"
import * as S from "./style"
import type { IContents } from "./type"
import Interview from "@/assets/img/Icon/schedule/Interview.svg"
import MessageIcon from "@/assets/img/Icon/schedule/MessageIcon.svg"
import Notification from "@/assets/img/Icon/schedule/Notification.svg"
import Register from "@/assets/img/Icon/schedule/Register.svg"

const ContentsValue: IContents[] = [
  {
    title: "입학 원서 접수",
    date: {
      startDate: "2023.03.27 (목) 03:00",
      endDate: "2023.03.29 (토) 17:00",
    },
    image: <Register />,
  },
  {
    title: "1차 합격자 발표",
    date: {
      startDate: "2023.03.27 (목) 03:00",
      endDate: "2023.03.29 (토) 17:00",
    },
    image: <Notification />,
  },
  {
    title: "창의협업 및 면접",
    date: {
      startDate: "2023.03.27 (목) 03:00",
      endDate: "2023.03.29 (토) 17:00",
    },
    image: <MessageIcon />,
  },
  {
    title: "최종 결과 발표",
    date: {
      startDate: "2023.03.27 (목) 03:00",
      endDate: "2023.03.29 (토) 17:00",
    },
    image: <Interview />,
  },
]

const ViewAll = () => {
  return (
    <div>
      <S.ContentsTitleParagragh>Schedule</S.ContentsTitleParagragh>
      <S.TitleParagragh>원서 접수 일정이에요</S.TitleParagragh>
      <S.ContentsWrapCol>
        <S.ContentsWrapRow>
          {new Array(2).fill(0).map((_, index) => (
            <Contents
              title={ContentsValue[index].title}
              date={ContentsValue[index].date}
              image={ContentsValue[index].image}
              key={index}
            />
          ))}
        </S.ContentsWrapRow>
        <S.ContentsWrapRow>
          {new Array(2).fill(0).map((_, index) => (
            <Contents
              title={ContentsValue[index + 2].title}
              date={ContentsValue[index + 2].date}
              image={ContentsValue[index + 2].image}
              key={index}
            />
          ))}
        </S.ContentsWrapRow>
      </S.ContentsWrapCol>
    </div>
  )
}

export default ViewAll
