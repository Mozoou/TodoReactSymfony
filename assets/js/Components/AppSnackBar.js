import { Button, Snackbar, SnackbarContent } from '@mui/material';
import * as React from 'react';
import { TodoContext } from '../Context/TodoContext';

export default function AppSnackBar() {
  const context = React.useContext(TodoContext);

  const onClose = () => {
    context.setMessage('');
  }

  return(
    <Snackbar autoHideDuration={5000} onClose={onClose} open={context.message.text != undefined}>
      <SnackbarContent message={context.message.text} action={[
        <Button onClick={() => {context.setMessage({})}} key="dismiss">dismiss</Button>
      ]}/>
    </Snackbar>
  )
}