import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

const TodoCreator = ({
  todo,
  setTodo,
  clearInput,
  inputRef,
  isInputEmpty,
  preventSubmit,
}) => {
  return (
    <div className="form__input">
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Enter Item" // better accessibility with Material UI
          value={todo}
          variant="outlined"
          onChange={(e) => setTodo(e.target.value)}
          onFocus={clearInput}
          ref={inputRef}
          aria-describedby="component-error-text"
          onKeyPress={preventSubmit}
        />

        {!isInputEmpty ? (
          <></>
        ) : (
          <>
            <FormHelperText id="component-error-text">
              Task can't be empty
            </FormHelperText>
          </>
        )}
      </FormControl>
      <Button
        type="submit"
        style={{
          color: "#ffffe6",
          marginLeft: "6px",
          marginTop: "8px",
          height: "40px",
          border: "1px solid black",
          borderRadius: "12px",
          backgroundColor: "#0000e6",
        }}
        className="addButton"
        variant="contained"
        alt="add-note"
        onKeyPress={preventSubmit}
      >
        Add Item
      </Button>
    </div>
  );
};

export default TodoCreator;
