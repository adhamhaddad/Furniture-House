// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import ModelViewer from '../models/ModelViewer'

const DialogProductModel = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <IconButton
        id='long-button'
        aria-label='share'
        aria-haspopup='true'
        onClick={handleClickOpen}
        aria-controls='long-menu'
      >
        <Icon icon='mdi:eye' fontSize={20} />
      </IconButton>
      <Dialog
        maxWidth='lg'
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>Product 3D View</DialogTitle>
        <DialogContent
          sx={{
            width: { xs: '100%', md: 600 },
            height: { xs: '100%', md: 600 }
          }}
        >
          <ModelViewer url='/images/models/untitle23d.glb' />
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogProductModel
