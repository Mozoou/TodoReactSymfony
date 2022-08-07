import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import React, { Fragment, useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import DeleteDialog from "./DeleteDialog";

function TodoTable() {
  const context = useContext(TodoContext);
  const [addTodo, setAddTodo] = useState("");
  const [editIsShown, setEditIsShown] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
  const [todoToBeDeleted, SetTodoToBeDeleted] = useState(null);


  return (
    <Fragment>

      <form
        onSubmit={() => {
          context.createTodo(event, { name: addTodo });
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  value={addTodo}
                  onChange={() => {
                    setAddTodo(event.target.value);
                  }}
                  label="New Task"
                  fullWidth={true}
                />
              </TableCell>
              <TableCell align="right">
                <IconButton type="submit">
                  <AddIcon></AddIcon>
                </IconButton>
              </TableCell>
            </TableRow>
            {context.todos
              .slice()
              .reverse()
              .map((todo, index) => (
                <TableRow key={"todo" + index}>
                  <TableCell>
                    {editIsShown === todo.id ? (
                      <TextField
                        fullWidth
                        value={editTodo}
                        onChange={(event) => {
                          setEditTodo(event.target.value);
                        }}
                        InputProps={{
                          endAdornment: (
                            <Fragment>
                              <IconButton
                                onClick={() => {
                                  setEditIsShown(false);
                                }}
                              >
                                <DoDisturbIcon></DoDisturbIcon>
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  context.updateTodo({
                                    id: todo.id,
                                    name: editTodo,
                                  });
                                  setEditIsShown(false);
                                }}
                              >
                                <DoneIcon></DoneIcon>
                              </IconButton>
                            </Fragment>
                          ),
                        }}
                      />
                    ) : (
                      todo.name
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        setEditIsShown(todo.id);
                        setEditTodo(todo.name);
                      }}
                    >
                      <ModeEditIcon></ModeEditIcon>
                    </IconButton>
                    <IconButton onClick={() => {
                      setDeleteConfirmationIsShown(true);
                      SetTodoToBeDeleted(todo)
                    }}>
                      <ClearIcon></ClearIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </form>

      {deleteConfirmationIsShown && (
        <DeleteDialog todo={todoToBeDeleted} open={deleteConfirmationIsShown} setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}/>
      )}
    </Fragment>
  );
}

export default TodoTable;
