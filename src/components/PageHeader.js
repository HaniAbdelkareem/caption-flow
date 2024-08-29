const PageHeader = ({ h1Text = "Hello", h2Text = "Subheader" }) => {
  return (
    <section className="text-center mt-32 mb-10">
      <h1 className="text-3xl sm:text-6xl font-bold tracking-tight">
        {h1Text}
      </h1>
      <h2 className="text-white/75 text-sm sm:text-lg tracking-tight mt-4">
        {h2Text}
      </h2>
    </section>
  )
}

export default PageHeader
