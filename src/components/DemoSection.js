import SparklesIcon from "./SparklesIcon"

const DemoSection = () => {
  return (
    <section className="flex mt-12 justify-around items-center">
      <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl"></div>
      <div>
        <SparklesIcon />
      </div>
      <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl"></div>
    </section>
  )
}

export default DemoSection
