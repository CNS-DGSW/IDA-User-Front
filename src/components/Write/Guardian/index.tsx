import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Input from "@/components/common/Input"
import Select from "@/components/common/Select"
import { GuardianRelation } from "@/constants/Write/guardianRelationConstant"
import CustomDatePicker from "@/components/common/DatePicker"
import * as S from "./style"
import { useEffect } from "react"
import useGuardian from "@/hooks/Write/useGuardian"
import useGetBrWidth from "@/hooks/useGetBrWidth"
import { formatDate } from "@/util/formatDate"
import DaumPostCode from "@/components/common/DaumPostCode/DaumPostCode"

const WriteGuardian = () => {
  const {
    parentInfo,
    setParentInfo,
    isLoading,
    isError,
    data,
    relationChangeHandler,
    onCompletePost,
    modalState,
    setModalState,
  } = useGuardian()

  const { browserWidth } = useGetBrWidth()

  useEffect(() => {
    setParentInfo({ ...data })
  }, [data])

  return (
    <section>
      <DaumPostCode
        onCompletePost={onCompletePost}
        modalState={modalState}
        setModalState={setModalState}
      />
      <Card>
        <InputWrapper>
          <InputWrapper title="성명">
            <Input
              type="text"
              width={browserWidth <= 500 ? 239 : 310}
              disabled={isLoading || isError}
              value={parentInfo.name}
              changeEvent={(event) =>
                setParentInfo((prev) => {
                  return { ...prev, name: event.target.value }
                })
              }
            />
          </InputWrapper>
          <InputWrapper
            title="지원자와의 관계"
            style={
              browserWidth <= 500 ? { marginTop: 24, borderRadius: 8 } : {}
            }
          >
            <Select
              list={GuardianRelation}
              style={
                browserWidth <= 500 ? { width: "15rem" } : { width: "19.3rem" }
              }
              // width={310}
              changeEvent={(e) => relationChangeHandler(e)}
              disabled={isLoading || isError}
              value={parentInfo.relation}
            />
          </InputWrapper>
        </InputWrapper>
        <InputWrapper
          style={
            browserWidth <= 500
              ? { marginTop: "1.5rem" }
              : { marginTop: "3.3rem" }
          }
        >
          <InputWrapper title="생년월일" style={{ position: "relative" }}>
            <Input
              type="text"
              disabled={isLoading || isError}
              value={parentInfo.birth}
              changeEvent={(event) =>
                setParentInfo((prev) => {
                  return { ...prev, birth: event.target.value }
                })
              }
              style={browserWidth <= 500 ? { width: "15rem" } : undefined}
            />
            <S.CalanderImgBox>
              <CustomDatePicker
                value={parentInfo.birth}
                disabled={isLoading || isError}
                onChange={(event) =>
                  setParentInfo((prev) => {
                    return { ...prev, birth: formatDate(event.toDate()) }
                  })
                }
              />
            </S.CalanderImgBox>
          </InputWrapper>
          <InputWrapper
            title="휴대폰"
            style={browserWidth <= 500 ? { marginTop: "1.5rem" } : undefined}
          >
            <Input
              type="tel"
              width={browserWidth <= 500 ? 239 : 310}
              disabled={isLoading || isError}
              value={parentInfo.telephone}
              changeEvent={(event) =>
                setParentInfo((prev) => {
                  return { ...prev, telephone: event.target.value }
                })
              }
            />
          </InputWrapper>
        </InputWrapper>
        <InputWrapper
          title="주소"
          style={
            browserWidth <= 500
              ? { marginTop: "1.5rem" }
              : { marginTop: "3.3rem" }
          }
        >
          <Input
            onClick={() => setModalState(true)}
            type="text"
            width={browserWidth <= 500 ? 239 : 650}
            disabled={isLoading || isError}
            value={parentInfo.streetAddress}
            changeEvent={(event) =>
              setParentInfo((prev) => {
                return {
                  ...prev,
                  streetAddress: event.target.value,
                  zipCode: 10,
                }
              })
            }
          />
        </InputWrapper>
        <InputWrapper
          title="상세주소"
          style={
            browserWidth <= 500
              ? { marginTop: "1.5rem" }
              : { marginTop: "3.3rem" }
          }
        >
          <Input
            type="text"
            width={browserWidth <= 500 ? 239 : 650}
            disabled={isLoading || isError}
            value={parentInfo.detailAddress}
            changeEvent={(event) =>
              setParentInfo((prev) => {
                return { ...prev, detailAddress: event.target.value }
              })
            }
          />
        </InputWrapper>
      </Card>
    </section>
  )
}

export default WriteGuardian
