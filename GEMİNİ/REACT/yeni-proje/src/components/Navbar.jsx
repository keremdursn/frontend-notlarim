import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


function Navbar() {
  // 3. useContext'i çağırarak global veriyi çek
  const user = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Uygulamam
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Ana Sayfa
          </Button>
          <Button color="inherit" component={RouterLink} to="/posts">
            Postlar
          </Button>
          {user && <Typography sx={{ ml: 2 }}>Hoş geldin, {user.name}</Typography>}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;