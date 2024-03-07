import { useEffect } from "react"
import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Radio from "@/components/common/Radio"
import Input from "@/components/common/Input"
import CustomDatePicker from "@/components/common/DatePicker"
import * as S from "./style"
import useGetBrWidth from "@/hooks/useGetBrWidth"
import usePersonal from "./usePersonal"
import { formatDate } from "@/util/formatDate"

const WritePersonal = () => {
  const { browserWidth } = useGetBrWidth()
  const { userInfo, setUserInfo, isLoading, error, data } = usePersonal()

  useEffect(() => {
    setUserInfo({ ...data })
  }, [data])

  if (isLoading) return <div>Loading!!</div>
  if (error) return <div>Error!!</div>

  return (
    <S.PersonalSection>
      <Card>
        <InputWrapper>
          <InputWrapper title="성명">
            <Input
              type="text"
              width={browserWidth <= 500 ? 239 : 310}
              value={userInfo.name}
              changeEvent={(event) =>
                setUserInfo((prev) => {
                  return { ...prev, name: event.target.value }
                })
              }
            ></Input>
          </InputWrapper>
          <InputWrapper
            title="성별"
            style={
              browserWidth <= 500
                ? { marginTop: "1.5rem", width: "15rem" }
                : { width: "310px" }
            }
          >
            <Radio
              name="eduStatus"
              value="gender"
              checked={userInfo.gender === "MALE"}
              onClick={() =>
                setUserInfo((prev) => {
                  return { ...prev, gender: "MALE" }
                })
              }
              width={browserWidth <= 500 ? 112 : 149}
            >
              남자
            </Radio>
            <Radio
              name="eduStatus"
              value="gender"
              checked={userInfo.gender === "FEMALE"}
              onClick={() =>
                setUserInfo((prev) => {
                  return { ...prev, gender: "FEMALE" }
                })
              }
              width={browserWidth <= 500 ? 112 : 149}
            >
              여자
            </Radio>
          </InputWrapper>
        </InputWrapper>
        <InputWrapper
          style={browserWidth <= 500 ? undefined : { marginTop: "3.3rem" }}
        >
          <InputWrapper title="생년월일" style={{ position: "relative" }}>
            <Input
              type="text"
              style={browserWidth <= 500 ? { width: "15rem" } : undefined}
              value={userInfo.birth}
              changeEvent={(event) =>
                setUserInfo((prev) => {
                  return { ...prev, birth: event.target.value }
                })
              }
            ></Input>
            <S.CalanderImgBox>
              <CustomDatePicker
                value={userInfo.birth}
                onChange={(event) =>
                  setUserInfo((prev) => {
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
              type="text"
              style={browserWidth <= 500 ? { width: "15rem" } : undefined}
              value={userInfo.phoneNumber}
              changeEvent={(event) =>
                setUserInfo((prev) => {
                  return { ...prev, phoneNumber: event.target.value }
                })
              }
            ></Input>
          </InputWrapper>
        </InputWrapper>
      </Card>
    </S.PersonalSection>
  )
}

export default WritePersonal
