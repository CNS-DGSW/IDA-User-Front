import WriteLayout from "@/components/common/Write/Layout"
import WriteDocument from "@/components/Write/document"
import WriteSchool from "@/components/Write/school"
import WriteSubject from "@/components/Write/subject"
import WriteType from "@/components/Write/type"
import React from "react"

const apply = () => {
  return (
    <WriteLayout>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <WriteSchool />
      <WriteType />
      <WriteSubject />
      <WriteDocument />
    </WriteLayout>
  )
}

export default apply
