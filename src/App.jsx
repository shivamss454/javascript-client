import React from 'react';
// import Textfielddemo from './pages/TextFieldDemo/TextFieldDemo';
// import { InputDemo } from './pages/InputDemo';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChildrenDemo />
      </ThemeProvider>

    </>
  );
}
export default App;
