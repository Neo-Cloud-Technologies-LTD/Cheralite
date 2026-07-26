export const SectionWrapper = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};