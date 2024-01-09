import { Box, CssBaseline } from '@mui/material';
import { ToastContainer } from "react-toastify";
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Box>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <CssBaseline />
      <Home />
    </Box>
  );
}

export default App;
