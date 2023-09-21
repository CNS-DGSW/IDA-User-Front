import WriteLayout from "@/components/common/Write/Layout"
import WriteDocument from "@/components/Write/document"
import WriteSchool from "@/components/Write/school"
import WriteSubject from "@/components/Write/subject"
import WriteType from "@/components/Write/type"
import WritePersonal from "@/components/Write/personal"
import WriteParent from "@/components/Write/guardian"
import WriteIdPhoto from "@/components/Write/idPhoto"
const apply = () => {
  return (
    <WriteLayout>
      <WritePersonal />
      <WriteParent />
      <WriteIdPhoto />
      <WriteSchool />
      <WriteType />
      <WriteSubject />
      <WriteDocument />
    </WriteLayout>
  )
}

export default apply
