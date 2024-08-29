import DemoSection from "@/components/DemoSection"
import PageHeader from "@/components/PageHeader"
import UploadIcon from "@/components/UploadIcon"

export default function Home() {
  return (
    <>
      <PageHeader
        h1Text={'Add Epic Captions to Your Videos'}
        h2Text={'Just upload your video and we will do the rest'}
      />
      <div className="flex justify-center">
        <button className="bg-white py-3 px-8 rounded-lg text-black tracking-[-0.3px] font-bold flex gap-2">
          <UploadIcon />
          <span>Choose file</span>
        </button>
      </div>
      <DemoSection />
    </>
  )
}
