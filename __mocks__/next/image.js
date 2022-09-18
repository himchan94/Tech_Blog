import React from "react";

export default function image(props) {
  console.log(props);

  let imgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: "border-box",
    padding: 0,
    border: "none",
    margin: "auto",
    display: "block",
    width: 0,
    height: 0,
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%",
    objectFit: props.objectFit ? props.objectFit : undefined,
    objectPosition: props.objectPosition ? props.objectPosition : undefined,
  };

  let wrapperStyle = {
    display: "block",
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: "border-box",
    margin: 0,
    backgroudColor: "red",
  };

  // when layout is responsive
  if (props.layout === "responsive") {
    return (
      <div>
        <img {...props} style={{ width: "100%" }} />
      </div>
    );
  }

  if (props.layout === "fill") {
    return (
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
        }}>
        <img {...props} style={imgStyle} />;
      </div>
    );
  }

  return <img {...props} />;
}
