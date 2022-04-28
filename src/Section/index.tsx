import "./style.css";

type props = {
  sectionRef?: any, 
  children: JSX.Element | JSX.Element[]
}

const Section = ({ sectionRef, children }: props) => (
  <section ref={sectionRef} className="Section">
    {children}
  </section>
);

export default Section;