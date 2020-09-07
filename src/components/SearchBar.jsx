import React from "react";
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";

function SearchBar(props){

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      props.onFormSubmit(searchTerm);
    }
  }

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
}

export default SearchBar;

