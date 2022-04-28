import "./style.css";

type props = { message: string }

const Placeholder = ({ message }: props) => (
  <div className="Placeholder">
    <h2>{message}</h2>
  </div>
);

export default Placeholder;