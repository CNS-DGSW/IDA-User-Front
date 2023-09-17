import WriteLayout from "@/components/common/Write/Layout"
import WriteDocument from "@/components/Write/document"
import WriteSchool from "@/components/Write/school"
import WriteSubject from "@/components/Write/subject"
import WriteType from "@/components/Write/type"
import WritePersonal from "@/components/Write/personal"
import WriteIdPhoto from "@/components/Write/idPhoto"
const apply = () => {
  return (
    <WriteLayout>
      <WritePersonal />
      <div>2</div>
      <WriteIdPhoto />
      <WriteSchool />
      <WriteType />
      <WriteSubject />
      <WriteDocument />
    </WriteLayout>
  )
}

export default apply
