import "../Form/style.css";

type navProps = {
  handleSecondary: any,
  handleData: any
}

const NavSection = ({ handleSecondary, handleData }: navProps) => (
  <div className="Form-InnerWrapper">
    <button
      className="App-button"
      disabled
    >
      get&nbsp;/areas/primary
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