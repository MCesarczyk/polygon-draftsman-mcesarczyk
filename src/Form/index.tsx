import "./style.css";

type formProps = {
  loginState: string,
  children: JSX.Element[]
}

const Form = ({ loginState, children }: formProps) => (
  <form>
    <fieldset
      className={`
      Form-fieldset 
      ${loginState === "logged in" ? "Form-fieldset--success" : ""}
      ${loginState === "login failed" ? "Form-fieldset--warning" : ""}
    `}
    >
      <legend className="Form-legend">{loginState}</legend>
      {children}
    </fieldset>
  </form>
);

export default Form;