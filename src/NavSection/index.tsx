import "../Form/style.css";

type navProps = {
  handlePrimary: any
  handleSecondary: any,
  handleData: any
}

const NavSection = ({ handlePrimary, handleSecondary, handleData }: navProps) => (
  <div className="Form-InnerWrapper">
    <button
      className="App-button"
      onClick={handlePrimary}
    >
      mock&nbsp;/areas/primary
    </button>
    <button
      className="App-button"
      onClick={handleSecondary}
    >
      get&nbsp;/areas/secondary
    </button>
    <button
      className="App-button"
      onClick={handleData}
    >
      get&nbsp;/areas/data
    </button>
  </div>
);

export default NavSection;