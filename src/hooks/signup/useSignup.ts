import type { AgreementKeys } from "@/types/Agreement"
import { useEffect, useState } from "react"
import type { ChangeEvent } from "react"

const useSignup = () => {
  const [fullAgreement, setFullAgreement] = useState(false)

  const [agreements, setAgreements] = useState<
    Array<{ id: AgreementKeys; checked: boolean }>
  >([
    {
      id: "privacy",
      checked: false,
    },
    {
      id: "termUse",
      checked: false,
    },
    {
      id: "policy",
      checked: false,
    },
  ])

  const checkAllChecked = () => {
    return agreements.every(({ checked }) => checked)
  }

  useEffect(() => {
    setFullAgreement(checkAllChecked())
  }, [agreements])

  const handleCheckboxChange = ({
    target: { name },
  }: ChangeEvent<HTMLInputElement>) => {
    setAgreements((prev) =>
      prev.map((agreement, index) => {
        const { id, checked } = agreement
        return Number(name) === index ? { id, checked: !checked } : agreement
      }),
    )
  }

  const handleChangeFullAgreement = () => {
    const checkState = checkAllChecked()
    setFullAgreement(checkState)
    setAgreements((prev) =>
      prev.map((item) => {
        return { ...item, checked: !checkState }
      }),
    )
  }

  return {
    fullAgreement,
    agreements,
    handleCheckboxChange,
    handleChangeFullAgreement,
    checkAllChecked,
  }
}

export default useSignup
