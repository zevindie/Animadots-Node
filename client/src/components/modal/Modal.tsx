// import { useState } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'

import './Modal.css'

type ModalProps = {
  open: boolean,
  handleClose: any,
  handleAction: any,
  titulo: string,
  descricao: string
}

function ModalComponent(props: ModalProps) {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="box">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {props.titulo}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {props.descricao}
                </Typography>
                <Button onClick={props.handleClose}>Não</Button>
                <Button onClick={props.handleAction}>Sim</Button>
            </Box>
        </Modal>
    )
}

export default ModalComponent