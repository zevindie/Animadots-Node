import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Tabela.css'
import { Button } from '@mui/material';

type TabelaProps = {
  lista: any[],
  abrirModal: (item: any) => void
}

function Tabela(props: TabelaProps) {

  if (!props.lista || props.lista.length === 0) return <div>Sem dados</div>;

  const colunas = Object.keys(props.lista[0]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {colunas.map((coluna) => (
              <TableCell key={coluna} className="table-head">
                {coluna}
              </TableCell>
            ))}
            <TableCell className="table-head" sx={{ maxWidth: 40 }}>
              <Button className="btn-adicionar">Adicionar</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.lista.map((row, index) => (
            <TableRow key={index}>
              {colunas.map((coluna) => (
                <TableCell key={coluna}>
                  {row[coluna]}
                </TableCell>
              ))}
              <TableCell sx={{ maxWidth: 35 }}>
                <Button>Editar</Button>
                <Button onClick={() => props.abrirModal(row)}>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tabela
