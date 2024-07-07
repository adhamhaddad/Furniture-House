// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

interface Items {
  qty_stock: number
  image: string
  price: string
  sky: string
  color: string
}

interface Props {
  open: boolean
  handleClose: () => void
  category: string
  brand_name: string
  name: string
  description: string
  width: string
  height: string
  depth: string
  material: string
  items: Items[]
}

const DialogProduct = (props: Props) => {
  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      maxWidth='lg'
      fullScreen={fullScreen}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      <DialogTitle id='responsive-dialog-title'>Product</DialogTitle>
      <DialogContent
        sx={{
          width: { xs: '100%', md: 600 },
          height: { xs: '100%', md: 600 }
        }}
      >
        <img width={137} height={176} alt='Simple Chair' src='/images/products/chair.jpg' />
      </DialogContent>
      <DialogActions className='dialog-actions-dense'>
        <Button onClick={props.handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogProduct
