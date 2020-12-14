import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox({
  label,
  value,
  setValue,
  setShowTable,
  defaultValue,
}) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowTable(true);
  };

  return (
    <div className="autoCompleteWrapper">
      <Autocomplete
        value={defaultValue}
        id="combo-box-demo"
        options={value ?? []}
        getOptionLabel={(option) => option ?? []}
        onChange={(event, newValue) => handleChange(event, newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}
