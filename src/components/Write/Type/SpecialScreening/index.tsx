import Card from "@/components/common/Card"
import InputWrapper from "@/components/common/InputWrapper"
import Radio from "@/components/common/Radio"
import Select from "@/components/common/Select"
import { SpecialSelectObject } from "@/constants/Write/specialConstant"
import * as S from "../style"
import React from "react"
import { ApplySubCategory, ApplyType } from "@/types/Write/write"
import type { SpecialTypeUnion } from "../type"
import useType from "@/hooks/Write/useType"

type ReadonlyInputUnion = Exclude<
  SpecialTypeUnion,
  ApplySubCategory.EQUALS_OPPORTUNITY | ApplySubCategory.SOCIAL_DIVERSITY
>

const readonlyInputObject: Record<ReadonlyInputUnion, string> = {
  MEISTER:
    "소프트웨어 분야 마이스터로 성장할 수 있는 잠재력이 있다고 판단되는 학생 중 학교장의 추천을 받은 자",
  LOCAL_FIRST:
    "대구광역시 달성군 소재 중학교 졸업예정자, 중학교 졸업자 또는 중학교 졸업자와 동등한 학력 인정자로서 원서 접수일 현재 전 가족이 대구광역시 달성군에 주민등록이 되어있고 실제 거주하는 자",
}
// const readonlyInputSizeObject: Record<ReadonlyInputUnion, number> = {
//   마이스터인재전형: 48,
//   지역우선전형: 66,
// }

const SpecialScreening = () => {
  const { userTypeInfo, setUserTypeInfo } = useType()

  return (
    <Card>
      <InputWrapper title="특별전형 선택">
        <Radio
          name="kind"
          value={ApplyType.MEISTER}
          width={153}
          onClick={({ target }) => {
            setUserTypeInfo((prev) => {
              return {
                ...prev,
                subCategory: null,
                type: (target as HTMLInputElement).value as ApplyType,
              }
            })
          }}
          checked={userTypeInfo.type === ApplyType.MEISTER}
        >
          마이스터인재전형
        </Radio>
        <Radio
          name="kind"
          value={ApplySubCategory.EQUALS_OPPORTUNITY}
          width={153}
          onClick={({ target }) => {
            setUserTypeInfo((prev) => {
              return {
                ...prev,
                subCategory: (target as HTMLInputElement)
                  .value as ApplySubCategory,
                type: ApplyType.NONE,
              }
            })
          }}
          checked={
            userTypeInfo.subCategory === ApplySubCategory.EQUALS_OPPORTUNITY
          }
        >
          사회통합전형 (기회균등전형)
        </Radio>
        <Radio
          name="kind"
          value={ApplySubCategory.SOCIAL_DIVERSITY}
          width={153}
          onClick={({ target }) => {
            setUserTypeInfo((prev) => {
              return {
                ...prev,
                subCategory: (target as HTMLInputElement)
                  .value as ApplySubCategory,
                type: ApplyType.NONE,
              }
            })
          }}
          checked={
            userTypeInfo.subCategory === ApplySubCategory.SOCIAL_DIVERSITY
          }
        >
          사회통합전형 (사회다양성 전형)
        </Radio>
        <Radio
          name="kind"
          value={ApplyType.LOCAL_FIRST}
          width={153}
          onClick={({ target }) => {
            setUserTypeInfo((prev) => {
              return {
                ...prev,
                subCategory: null,
                type: (target as HTMLInputElement).value as ApplyType,
              }
            })
          }}
          checked={userTypeInfo.type === ApplyType.LOCAL_FIRST}
        >
          지역우선전형
        </Radio>
      </InputWrapper>
      {userTypeInfo.subCategory !== ApplySubCategory.EQUALS_OPPORTUNITY &&
        userTypeInfo.subCategory !== ApplySubCategory.SOCIAL_DIVERSITY &&
        (userTypeInfo.type === ApplyType.MEISTER ||
          userTypeInfo.type === ApplyType.LOCAL_FIRST) && (
          <S.Form>
            {readonlyInputObject[userTypeInfo.type as ReadonlyInputUnion]}
          </S.Form>
          // <Textarea
          //   height={
          //     readonlyInputSizeObject[currentSpecial as ReadonlyInputUnion]
          //   }
          //   readonly
          //   value={readonlyInputObject[currentSpecial as ReadonlyInputUnion]}
          //   style={{ marginTop: "34px" }}
          // />
        )}
      {userTypeInfo.type !== ApplyType.MEISTER &&
        userTypeInfo.type !== ApplyType.LOCAL_FIRST &&
        (userTypeInfo.subCategory === ApplySubCategory.EQUALS_OPPORTUNITY ||
          userTypeInfo.subCategory === ApplySubCategory.SOCIAL_DIVERSITY) && (
          <Select
            changeEvent={(event) => {
              SpecialSelectObject[
                userTypeInfo.subCategory !== null
                  ? userTypeInfo.subCategory
                  : ApplySubCategory.EQUALS_OPPORTUNITY
              ].forEach((val: [ApplyType, string]) => {
                if ((event.target as HTMLLIElement).innerText === val[1]) {
                  setUserTypeInfo((prev) => {
                    return { ...prev, type: val[0] }
                  })
                }
              })
            }}
            list={SpecialSelectObject[
              userTypeInfo.subCategory
            ].map((val) => val[1])}
            value={
              SpecialSelectObject[
                userTypeInfo.subCategory !== null
                  ? userTypeInfo.subCategory
                  : ApplySubCategory.EQUALS_OPPORTUNITY
              ].find((val: [ApplyType, string]) => {
                return userTypeInfo.type === val[0]
              })?.[1]
            }
            width={650}
            style={{ marginTop: "34px" }}
          />
        )}
      {/* <S.FormWrap>
        {selectValue !=== "선택" && <S.Form>dummy</S.Form>}
      </S.FormWrap> */}
    </Card>
  )
}

export default SpecialScreening
