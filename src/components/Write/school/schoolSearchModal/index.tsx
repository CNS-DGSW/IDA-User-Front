import React, { useState } from "react"
import * as S from "./style"
import ExitIcon from "@/assets/img/Icon/ExitModal.svg"
import Input from "@/components/common/Input"
import useScSearchModal from "@/hooks/Write/useScSearchModal"

const dummy = [
  {
    name: "대구소프트웨어마이스터고등학교",
    address: "대구광역시 달성군 구지면 창리로 11길 53",
    NEIS: "123456789",
  },
  {
    name: "대구소프트웨어마이스터고등학교",
    address: "대구광역시 달성군 구지면 창리로 11길 53",
    NEIS: "123456789",
  },
  {
    name: "대구소프트웨어마이스터고등학교",
    address: "대구광역시 달성군 구지면 창리로 11길 53",
    NEIS: "123456789",
  },
  {
    name: "대구소프트웨어마이스터고등학교",
    address: "대구광역시 달성군 구지면 창리로 11길 53",
    NEIS: "123456789",
  },
  {
    name: "대구소프트웨어마이스터고등학교",
    address: "대구광역시 달성군 구지면 창리로 11길 53",
    NEIS: "123456789",
  },
]

interface IScList {
  name: string
  address: string
  NEIS: string
}

const SchoolList = (ScList: IScList[]) => {
  return (
    <>
      {ScList.map((item, idx) => (
        <S.ListValue key={idx}>
          <S.ScName>{item.name}</S.ScName>
          <S.ScAddress>{item.address}</S.ScAddress>
          <S.ScNEIS>NEIS 학교 번호 : {item.NEIS}</S.ScNEIS>
        </S.ListValue>
      ))}
    </>
  )
}

const SchoolSearchModal = () => {
  const [noSchool, setNoSchool] = useState<boolean>(false)
  const { searchName, setSearchName, searchModal, cloasModal } =
    useScSearchModal()
  return (
    <S.ModalLayout>
      <S.SubLayout>
        <S.ExitIcon as={ExitIcon} alt="img error" onClick={cloasModal} />
        <S.Title>학교명 검색</S.Title>
        <S.Card>
          <S.ContentTitle>학교 검색</S.ContentTitle>
          <S.InputWrap>
            <Input
              type="text"
              style={{ fontSize: "1.125rem" }}
              value={searchName}
              onChange={(event) => setSearchName(event.target.value)}
              width={400}
              placeholder="학교 이름을 입력해주세요."
            />
            <S.Button onClick={searchModal}>학교검색</S.Button>
          </S.InputWrap>
        </S.Card>
        <S.Card>
          <S.ContentTitle>조회된 결과</S.ContentTitle>
          <S.List>
            {dummy[0] ? (
              <>{SchoolList(dummy)}</>
            ) : (
              <S.NoSchool>조회된 결과가 없습니다.</S.NoSchool>
            )}
          </S.List>
          <div>
            {noSchool ? (
              <S.InputWrap>
                <Input
                  type="text"
                  style={{ fontSize: "1.125rem" }}
                  width={400}
                  placeholder="학교 이름을 입력해주세요."
                />
                <S.Button>입력완료</S.Button>
              </S.InputWrap>
            ) : (
              <S.RealNoSchool onClick={() => setNoSchool(true)}>
                찾으시는 결과가 없으신가요?
              </S.RealNoSchool>
            )}
          </div>
        </S.Card>
      </S.SubLayout>
    </S.ModalLayout>
  )
}

export default SchoolSearchModal
