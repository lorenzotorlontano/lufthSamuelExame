import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "90%",
  },
}));

export default function DatePickers({ label, setValue, value }) {
  const classes = useStyles();

  const handleSetDataValue = (event, newValue) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        onChange={(event, newValue) => handleSetDataValue(event, newValue)}
        id="date"
        label={label}
        type="date"
        defaultValue={value}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
