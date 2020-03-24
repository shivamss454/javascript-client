import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
// import Textfielddemo from './pages/TextFieldDemo/TextFieldDemo';
// import { InputDemo } from './pages/InputDemo';
// import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';
import theme from './theme';
import Trainee from './pages/Trainee/Trainee';
//  import Login from './pages/Login/Login';
// import { Navbar } from './pages/components/Navbar';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Trainee />
      </ThemeProvider>

    </>
  );
}
export default App;
