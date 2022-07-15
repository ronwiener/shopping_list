import React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TodoList = ({
  todos,
  completeTodo,
  editTodo,
  deleteTodo,
  saveTodo,
  noteRef,
  preventSubmit,
}) => {
  const [checked, setChecked] = useState([0]);
  let UniqKey = 123;

  const handleToggle = (value, inx) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    completeTodo(inx);
  };

  return (
    <List>
      {todos.map((todo, inx) => {
        const labelId = `list-todo-${todo}`;
        console.log(labelId);
        return (
          <ListItem key={`todo-${UniqKey++}`} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox
                color="primary"
                edge="start"
                checked={checked.indexOf(todo) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
                onClick={handleToggle(todo, inx)}
                onKeyPress={preventSubmit}
                style={{
                  marginLeft: "5px",
                }}
              />
            </ListItemIcon>
            {!todo.isEditing ? (
              <>
                <ListItemText
                  id={labelId}
                  className="form__list-text"
                  primary={`${todo.text}`}
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "",
                  }}
                />
                <ListItemIcon>
                  <IconButton
                    className="editButton"
                    style={{ color: "#006600", marginRight: "5px" }}
                    edge="end"
                    aria-label="edit"
                    onClick={() => editTodo(inx)}
                  >
                    <EditIcon />
                  </IconButton>
                </ListItemIcon>
              </>
            ) : (
              <>
                <label
                  htmlFor="task" // better accessibility with HTML
                  className="visuallyhidden"
                >
                  {todo.text}
                </label>
                <input
                  className="form__edit-input"
                  defaultValue={todo.text}
                  ref={(element) => (noteRef.current[inx] = element)}
                  onKeyPress={preventSubmit}
                  id="task"
                />
                <ListItemIcon>
                  <IconButton
                    onClick={() => saveTodo(inx)}
                    edge="end"
                    style={{ color: "#006600" }}
                    aria-label="delete"
                  >
                    <CheckCircleIcon />
                  </IconButton>
                </ListItemIcon>
              </>
            )}
            <ListItemSecondaryAction>
              <IconButton
                className="deleteButton"
                onClick={() => deleteTodo(inx)}
                edge="end"
                style={{ color: "#cc0000", marginRight: "5px" }}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
