import WriteLayout from "@/components/common/Write/Layout"
import WriteDocument from "@/components/Write/document"
import WriteSchool from "@/components/Write/school"
import WriteType from "@/components/Write/type"
import WritePersonal from "@/components/Write/personal"
import WriteGuardian from "@/components/Write/Guardian"
const apply = () => {
  return (
    <WriteLayout>
      <WritePersonal />
      <WriteGuardian />
      <div>3</div>
      <WriteSchool />
      <WriteType />
      <div>6</div>
      <WriteDocument />
    </WriteLayout>
  )
}

export default apply
