interface SectionHeadingProps {
  children: React.ReactNode
  id?: string
}

export function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="font-display text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white mt-24 md:mt-32 mb-8 md:mb-12 scroll-mt-24"
    >
      {children}
    </h2>
  )
}
