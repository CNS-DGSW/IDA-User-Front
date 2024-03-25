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
