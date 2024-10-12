const Section = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-primary dark:text-accent mb-6">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
