import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useNavigate } from 'react-router-dom'

import './Menu.css'

function Menu() {
  const navigate = useNavigate();

  return (
    <AppBar className="app-bar">
        <Toolbar sx={{ px: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AnimaDots
        </Typography>

        <Box>
          <Button className="botao-menu" onClick={() => navigate('/gerenciar-animal')}>Gerenciar Animal</Button>
          <Button className="botao-menu" onClick={() => navigate('/analisar-adocao')}>Analisar Adoção</Button>
          <Button className="botao-menu" onClick={() => navigate('/')}>Sair</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;