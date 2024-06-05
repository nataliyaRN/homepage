import React from 'react';
import './App.css';
import ThemeProvider from "./theme";
import {ProgressBarStyle} from "./components/ProgressBar";
import Router from "./routes";

function App() {
  return (
      <ThemeProvider>
            <ProgressBarStyle/>
            <Router/>
      </ThemeProvider>
  );
}

export default App;
