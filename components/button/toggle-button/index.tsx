import React, { useState } from "react";
import Image from "next/image";

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
        <Image src={offImage} style={offImageStyle} alt='toggle on image' />
      ) : (
        <Image src={onImage} style={onImageStyle} alt='toggle off image' />
      )}
    </div>
  );
};

export default ToggleButton;
