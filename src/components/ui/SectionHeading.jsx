/**
 * SectionHeading
 * Renders the h2 + optional sub-paragraph used in most sections.
 */
export default function SectionHeading({ title, sub }) {
  return (
    <>
      <h2
        className="text-section-h2 font-bold tracking-[-1px] leading-[1.15] text-text-1"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && (
        <p className="text-text-2 text-base mt-3 max-w-[560px] leading-[1.7]">
          {sub}
        </p>
      )}
    </>
  )
}
