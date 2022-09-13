import React from "react";

export default function image(props) {
  // when layout is responsive
  if (props.layout === "responsive") {
    return (
      <div>
        <img {...props} style={{ width: "100%" }} />
      </div>
    );
  }

  return <img {...props} />;
}
