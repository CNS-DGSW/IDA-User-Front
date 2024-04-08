import Card from "@/components/common/Card"
import Input from "@/components/common/Input"
import InputWrapper from "@/components/common/InputWrapper"
import useGetBrWidth from "@/hooks/useGetBrWidth"
import useChange from "@/hooks/useChange"
import React from "react"

const Examination = () => {
  const [, setPass] = useChange()

  const { browserWidth } = useGetBrWidth()

  return (
    <Card>
      <InputWrapper title="합격년도">
        <Input
          type="text"
          width={browserWidth <= 500 ? 280 : 650}
          changeEvent={setPass}
        />
      </InputWrapper>
    </Card>
  )
}

export default Examination
