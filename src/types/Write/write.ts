export type PersonalInfo = Record<
  "name" | "birth" | "phoneNumber" | "gender",
  string
>

export type ParentInfo = Record<
  | "name"
  | "relation"
  | "birth"
  | "telephone"
  | "streetAddress"
  | "detailAddress",
  string
> & { zipCode: number }

export enum ApplyType {
  NONE="NONE",
  COMMON="COMMON",
  MEISTER="MEISTER",
  LOCAL_FIRST="LOCAL_FIRST",

  BASIC_LIVELIHOOD="BASIC_LIVELIHOOD",
  RELIANCE_RECIPIENTS="RELIANCE_RECIPIENTS",
  SECOND_HIGHEST_DEDUCTIBLE="SECOND_HIGHEST_DEDUCTIBLE",
  DISABILITY_BENEFIT_RECIPIENTS="DISABILITY_BENEFIT_RECIPIENTS",
  DISABILITY_PENSION_RECIPIENT="DISABILITY_PENSION_RECIPIENT",
  PRIORITY_CARE_RECIPIENT="PRIORITY_CARE_RECIPIENT",
  EDUCATION_BENEFIT_RECIPIENT="EDUCATION_BENEFIT_RECIPIENT",
  VETERANS="VETERANS",
  ONE_PARENT_PROTECT="ONE_PARENT_PROTECT",
  HIGH_WELFARE_RECIPIENTS="HIGH_WELFARE_RECIPIENTS",
  FINANCIAL_PERSON="FINANCIAL_PERSON",

  SPECIAL_TRAINING="SPECIAL_TRAINING",
  NORTH_KOREAN_CHILD="NORTH_KOREAN_CHILD",
  MULTICULTURAL="MULTICULTURAL",
  CHILD_WELFARE="CHILD_WELFARE",
  SOCIAL_TEEN_HOUSEHOLDER="SOCIAL_TEEN_HOUSEHOLDER",
  GRANDCHILDREN="GRANDCHILDREN",
  CIVIL_SERVANT_ON_DUTY="CIVIL_SERVANT_ON_DUTY",
  FAMILY_WITH_DISABILITIES="FAMILY_WITH_DISABILITIES",
  FARMING_AND_FISHING="FARMING_AND_FISHING",
  SOLDIER_CHILD="SOLDIER_CHILD",
  CIVIL_SERVANT_CHILD="CIVIL_SERVANT_CHILD",
  INDUSTRIAL_ACCIDENT_CHILD="INDUSTRIAL_ACCIDENT_CHILD",
  STREET_CLEANERS_CHILD="STREET_CLEANERS_CHILD",
  MAILMAN_CHILD="MAILMAN_CHILD",
  HAS_CULTURAL_HERITAGE="HAS_CULTURAL_HERITAGE",
  ADOPTED_FAMILY="ADOPTED_FAMILY",
  MULTI_CHILD_FAMILIES="MULTI_CHILD_FAMILIES",
  ONE_PARENT="ONE_PARENT",
  NO_PARENT="NO_PARENT",

  FOREIGN_EDUCATION="FOREIGN_EDUCATION",
  MIDDLE_SCHOOL_EDUCATION="MIDDLE_SCHOOL_EDUCATION",
  NORTH_KOREAN_DEFECTORS="NORTH_KOREAN_DEFECTORS",
  FOREIGN_SCHOOL="FOREIGN_SCHOOL"
}

export enum ApplyMainCategory {
  COMMON="COMMON",
  SPECIAL="SPECIAL",
  EXCEPTIONAL="EXCEPTIONAL"
}

export enum ApplySubCategory {
  EQUALS_OPPORTUNITY="EQUALS_OPPORTUNITY",
  SOCIAL_DIVERSITY="SOCIAL_DIVERSITY"
}

export type TypeInfo = {
  type: ApplyType,
  category: ApplyMainCategory | null,
  subCategory: ApplySubCategory | null
}