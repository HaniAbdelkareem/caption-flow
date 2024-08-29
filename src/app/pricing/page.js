import PageHeader from "@/components/PageHeader"

const PricingPage = () => {
  return (
    <div>
      <PageHeader
        h1Text={"Pricing"}
        h2Text={"Our pricing is very simple"}
      />

      <div className="bg-white text-black rounded-lg max-w-xs mx-auto p-4 text-center">
        <h3 className="font-bold text-3xl">Free</h3>
        <h4>Free forever</h4>
      </div>
    </div>
  )
}

export default PricingPage
