import React from "react";
import Button from "@material-ui/core/Button";

function ButtonComponents({ val, func, size }) {
  return (
    <Button onClick={func} size={size} variant="contained" color="primary">
      {val}
    </Button>
  );
}

export default ButtonComponents;
