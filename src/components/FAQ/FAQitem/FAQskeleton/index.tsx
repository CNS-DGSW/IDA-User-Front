import React from "react"
import * as S from "./style"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const SkeletonFAQItem = () => {
  return (
    <S.FAQskeletonMainContentContainer>
      <Skeleton height={50} width={`100%`} />
    </S.FAQskeletonMainContentContainer>
  )
}

export default SkeletonFAQItem
