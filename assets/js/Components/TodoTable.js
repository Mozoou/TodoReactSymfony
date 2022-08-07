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
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

function TodoTable() {
  const context = useContext(TodoContext);
  const [addTodo, setAddTodo] = useState('');

  return (
    <form onSubmit={() => {context.createTodo(event,{name:addTodo})}}>
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
              <TextField value={addTodo} onChange={() => {setAddTodo(event.target.value)}} label='New Task' fullWidth={true}/>
            </TableCell>
            <TableCell align="right">
              <IconButton type="submit">
                <AddIcon></AddIcon>
              </IconButton>
            </TableCell>
          </TableRow>
          {context.todos.slice().reverse().map((todo, index) => (
            <TableRow key={'todo' + index}>
              <TableCell>{todo.name}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <ModeEditIcon></ModeEditIcon>
                </IconButton>
                <IconButton>
                  <ClearIcon></ClearIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </form>
  );
}

export default TodoTable;
