import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Search extends React.Component {
  render() {
    return (
      <InputGroup onChange={event => this.props.handleChange(event.target.value)} className="mb-4 w-75 p-3">
        <FormControl placeholder="Search joke..." />
      </InputGroup>
    );
  }
}

export default Search;
