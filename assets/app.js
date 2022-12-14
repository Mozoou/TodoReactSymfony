/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import React, { Component } from 'react'
import TodoContextProvider from './js/Context/TodoContext';
import AppSnackBar from './js/Components/AppSnackBar';
import TodoTable from './js/Components/TodoTable';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';

class App extends Component {
  render() {
    return  <TodoContextProvider>
      <CssBaseline>
        <TodoTable/>
        <AppSnackBar/>
      </CssBaseline>
    </TodoContextProvider>
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);