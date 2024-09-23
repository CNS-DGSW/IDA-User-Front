import type { SpecialTypeUnion } from "@/components/Write/Type/type"
import { ApplySubCategory, ApplyType } from "@/types/Write/write"

export const SpecialSelectObject: Record<
  Exclude<SpecialTypeUnion, ApplyType.MEISTER | ApplyType.LOCAL_FIRST>,
  Array<[ApplyType,string]>
> = {
  "EQUALS_OPPORTUNITY" : [
    [ApplyType.BASIC_LIVELIHOOD, "국민기초생활수급자"],
    [ApplyType.RELIANCE_RECIPIENTS,"차상위자활대상자"],
    [ApplyType.SECOND_HIGHEST_DEDUCTIBLE,"차상위본인부담경감대상자"],
    [ApplyType.DISABILITY_BENEFIT_RECIPIENTS,"차상위장애수당대상자"],
    [ApplyType.DISABILITY_PENSION_RECIPIENT,"차상위장애연금대상자"],
    [ApplyType.PRIORITY_CARE_RECIPIENT,"차상위우선돌봄대상자"],
    [ApplyType.EDUCATION_BENEFIT_RECIPIENT,"교육급여수급자"],
    [ApplyType.ONE_PARENT_PROTECT,"한부모 가족 보호 대상자"],
    [ApplyType.FINANCIAL_PERSON,"학교장이 추천한 경제적으로 어려운 학생"],
  ],
  "SOCIAL_DIVERSITY": [
    [ApplyType.SPECIAL_TRAINING,"특수교육대상자"],
    [ApplyType.NORTH_KOREAN_CHILD,"북한이탈주민"],
    [ApplyType.MULTICULTURAL,"다문화가정"],
    [ApplyType.CHILD_WELFARE,"아동복지시설수용자"],
    [ApplyType.SOCIAL_TEEN_HOUSEHOLDER,"소년소녀 가장"],
    [ApplyType.GRANDCHILDREN,"조손가정 자녀"],
    [ApplyType.CIVIL_SERVANT_ON_DUTY,"순직 공무원의 자녀"],
    [ApplyType.FAMILY_WITH_DISABILITIES,"장애인(장애인 등록증 5급 이내) 가정 가족 구성원"],
    [ApplyType.FARMING_AND_FISHING,"농어촌거주"],
    [ApplyType.SOLDIER_CHILD,"직업군인 자녀"],
    [ApplyType.CIVIL_SERVANT_CHILD,"경찰․소방․교정 공무원 자녀"],
    [ApplyType.INDUSTRIAL_ACCIDENT_CHILD,"산업재해근로자 자녀"],
    [ApplyType.STREET_CLEANERS_CHILD,"환경미화원 자녀"],
    [ApplyType.MAILMAN_CHILD,"우편집배원 자녀"],
    [ApplyType.HAS_CULTURAL_HERITAGE,"무형문화재보유자 자녀"],
    [ApplyType.ADOPTED_FAMILY,"입양자녀ㆍ입양가족 자녀"],
    [ApplyType.MULTI_CHILD_FAMILIES,"다자녀가정 자녀"],
    [ApplyType.ONE_PARENT,"한부모가정 자녀"],
  ],
}

export const SpecialAdmissionSelectList:Array<[ApplyType,string]> = [
  [ApplyType.FOREIGN_EDUCATION,"외국 교육 이수자"],
  [ApplyType.MIDDLE_SCHOOL_EDUCATION,"중학 학력 인증자"],
  [ApplyType.NORTH_KOREAN_DEFECTORS,"( 정원외 ) 북한 이탈 주민녀"],
  [ApplyType.FOREIGN_SCHOOL,"( 정원외 ) 외국 학교 전학자"],
]
