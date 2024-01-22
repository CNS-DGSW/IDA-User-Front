import Card from "@/components/common/Card"
import Input from "@/components/common/Input"
import InputWrapper from "@/components/common/InputWrapper"
import Select from "@/components/common/Select"
import { localDetail, LocalKind } from "@/constants/Write/localKindConstant"
import useChange from "@/hooks/useChange"
import useLocal from "../hooks/useLocal"
import * as S from "../style"
import useWriteNav from "@/hooks/Write/useWriteNav"
import useScSearchModal from "@/hooks/Write/useScSearchModal"

const GraduateForm = () => {
  const { changeDetailLocal, changeLocal, detailLocal, local } = useLocal()
  const [, changesShoolContact] = useChange()
  const [, changeGraduate] = useChange()

  const { width } = useWriteNav()
  const { openModal } = useScSearchModal()

  return (
    <>
      <Card>
        <S.Wrap justify="space-between" column>
          <InputWrapper title="출신 중학교명">
            <S.Wrap>
              <Input
                type="text"
                readonly
                width={width > 500 ? 224 : 180}
                style={width <= 500 ? { fontSize: "14px" } : {}}
                color="gray"
              />
              <S.SchoolButton onClick={openModal}>학교 검색</S.SchoolButton>
            </S.Wrap>
          </InputWrapper>
          <InputWrapper title="NEIS 학교 번호">
            <Input
              type="text"
              readonly
              width={width <= 500 ? 260 : undefined}
              color="gray"
            />
          </InputWrapper>
        </S.Wrap>
        <S.Wrap justify="space-between" column>
          <InputWrapper title="지역명 ( 시도 )">
            <Select list={LocalKind} value={local} changeEvent={changeLocal} />
          </InputWrapper>
          <InputWrapper title="시군구">
            <Select
              list={local ? localDetail[local] : ["지역명을 선택해주세요"]}
              value={detailLocal}
              changeEvent={changeDetailLocal}
            />
          </InputWrapper>
          <InputWrapper title="학교 연락처">
            <Input
              type="text"
              width={width <= 500 ? 260 : 208}
              changeEvent={changesShoolContact}
            />
          </InputWrapper>
        </S.Wrap>
      </Card>
      <Card>
        <InputWrapper title="졸업년도">
          <Input
            type="text"
            width={width <= 500 ? 260 : 650}
            changeEvent={changeGraduate}
          />
        </InputWrapper>
      </Card>
    </>
  )
}

export default GraduateForm
