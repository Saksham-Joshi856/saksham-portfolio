import { PropsWithChildren } from "react";
import { useInView } from "../hooks/useInView";

type SectionProps = PropsWithChildren<{
  id: string;
  className?: string;
  ariaLabelledBy?: string;
}>;

const Section = ({ id, className = "", ariaLabelledBy, children }: SectionProps) => {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${className} ${isVisible ? "section--visible" : ""}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="section__inner">{children}</div>
    </section>
  );
};

export default Section;
