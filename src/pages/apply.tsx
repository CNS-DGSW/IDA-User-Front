import WriteLayout from "@/components/common/Write/Layout"
import WriteDocument from "@/components/Write/document"
import WriteSchool from "@/components/Write/school"
import WriteType from "@/components/Write/type"
import WritePersonal from "@/components/Write/personal"
const apply = () => {
  return (
    <WriteLayout>
      <WritePersonal />
      <div>2</div>
      <div>3</div>
      <WriteSchool />
      <WriteType />
      <div>6</div>
      <WriteDocument />
    </WriteLayout>
  )
}

export default apply
