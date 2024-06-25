import WriteLayout from "@/components/common/Write/Layout"
import WriteDocument from "@/components/Write/document"
import WriteSchool from "@/components/Write/school"
import WriteSubject from "@/components/Write/subject"
import WriteAdmissionType from "@/components/Write/AdmissionType"
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
      <WriteAdmissionType />
      <WriteSubject />
      <WriteDocument />
    </WriteLayout>
  )
}

export default apply
