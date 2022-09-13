import React, { useState } from "react";

interface ToggleButtonProps {
  onImage: string | object;
  onImageStyle?: object;
  offImage: string | object;
  offImageStyle?: object;
  _click?: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onImage,
  onImageStyle,
  offImage,
  offImageStyle,
  _click,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div
      onClick={() => {
        handleToggleState();

        if (_click) {
          _click();
        }
      }}>
      {toggle ? (
        <img src={offImage.src} style={offImageStyle} alt='toggle on image' />
      ) : (
        <img src={onImage.src} style={onImageStyle} alt='toggle off image' />
      )}
    </div>
  );
};

export default ToggleButton;
