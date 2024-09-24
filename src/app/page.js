import DemoSection from "@/components/DemoSection"
import PageHeader from "@/components/PageHeader"
import UploadForm from "@/components/UploadForm"

export default function Home() {


  return (
    <>
      <PageHeader
        h1Text={"Add Epic Captions to Your Videos"}
        h2Text={"Just upload your video and we will do the rest"}
      />
      <div className="flex justify-center">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  )
}
