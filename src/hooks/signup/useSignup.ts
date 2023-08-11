import { useEffect, useState } from "react"
import type { ChangeEvent } from "react"

const useSignup = () => {
  const [fullAgreement, setFullAgreement] = useState(false)

  const [agreements, setAgreements] = useState([
    {
      title: "[필수] 개인정보 처리 및 개인정보활영 동의",
      checked: false,
    },
    {
      title: "[필수] 입학원서 접수 사이트 이용약관 동의",
      checked: false,
    },
    { title: "[필수] 바탕 개인정보 취급방침 동의", checked: false },
  ])
  useEffect(() => {
    isAllCheckd() ? setFullAgreement(true) : setFullAgreement(false)
  }, [agreements])

  const handleCheckboxChange = ({
    target: { name },
  }: ChangeEvent<HTMLInputElement>) => {
    console.log(name)
    setAgreements((prev) => {
      const newData = prev.map((agreement, index) => {
        const { title, checked } = agreement
        return Number(name) === index ? { title, checked: !checked } : agreement
      })
      return newData
    })
  }

  const handleChangeFullAgreement = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    if (isAllCheckd()) {
      // 모두 끄기
      setFullAgreement(true)
      setAgreements((prev) =>
        prev.map((item) => {
          return { ...item, checked: false }
        }),
      )
    } else {
      //
      setFullAgreement(false)
      setAgreements((prev) =>
        prev.map((item) => {
          return { ...item, checked: true }
        }),
      )
    }
  }

  const isAllCheckd = () => {
    return (
      agreements[0].checked && agreements[1].checked && agreements[2].checked
    )
  }
  return {
    fullAgreement,
    agreements,
    handleCheckboxChange,
    handleChangeFullAgreement,
    isAllCheckd,
  }
}

export default useSignup
