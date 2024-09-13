import PropTypes from "prop-types";
import { useState } from "react";

function ToggleSwitchComponent({ idRef }) {
  const [toggled, setToggled] = useState(false);
  const id = `toggleSwitch-${idRef}`;

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className="toggleSwitch_component">
      <input
        type="checkbox"
        id={id}
        className="toggleSwitch_input"
        checked={toggled}
        onChange={handleToggle}
      />
      <label htmlFor={id} className="toggleSwitch_label">
        Toggle
      </label>
    </div>
  );
}

ToggleSwitchComponent.propTypes = { idRef: PropTypes.string.isRequired };

export default ToggleSwitchComponent;
