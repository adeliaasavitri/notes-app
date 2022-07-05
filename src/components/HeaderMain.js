import { MdLightbulb } from "react-icons/md";

export default function Header({ handleDarkMode }) {
  return (
    <div className="main-header">
      <MdLightbulb
        className="bulb-icon"
        size="1.5rem"
        onClick={() => handleDarkMode((prevDarkMode) => !prevDarkMode)}
      />
    </div>
  );
}
