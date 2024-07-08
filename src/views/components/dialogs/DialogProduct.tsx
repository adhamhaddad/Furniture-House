// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Grid, { GridProps } from '@mui/material/Grid'
import { IProduct, IProductVariant } from 'src/types/product-types'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import DialogProductModel from './DialogProductModel'
import ModelViewer from '../models/ModelViewer'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

interface Props {
  open: boolean
  handleClose: () => void
  product: IProduct
}

const DialogProduct = (props: Props) => {
  // ** Vars
  const { open, handleClose, product } = props

  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog maxWidth='lg' fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogTitle id='responsive-dialog-title'>Product</DialogTitle>
      <DialogContent>
        <Grid container spacing={6}>
          <StyledGrid item md={5} xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img width='100%' height='100%' alt={product.name} src='/images/products/chair.jpg' />
            </Box>
            {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img
                width='100px'
                height='100px'
                alt={product.name}
                src='/images/products/chair.jpg'
                style={{ marginRight: 5 }}
              />
              <img
                width='100px'
                height='100px'
                alt={product.name}
                src='/images/products/chair.jpg'
                style={{ marginRight: 5 }}
              />
              <img
                width='100px'
                height='100px'
                alt={product.name}
                src='/images/products/chair.jpg'
                style={{ marginRight: 5 }}
              />
              <img
                width='100px'
                height='100px'
                alt={product.name}
                src='/images/products/chair.jpg'
                style={{ marginRight: 5 }}
              />
            </Box> */}
          </StyledGrid>

          <Grid item md={7} xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              {product.name}
            </Typography>
            <Typography variant='body2' sx={{ mb: 2, height: '50px' }}>
              {product.description}
            </Typography>
            <Box sx={{ my: 5 }}>
              <Typography variant='h6'>Specification</Typography>
              <Typography variant='body2'>Material: {product.material}</Typography>
              <Typography variant='body2'>Width: {product.width}</Typography>
              <Typography variant='body2'>Height: {product.height}</Typography>
              <Typography variant='body2'>Depth: {product.depth}</Typography>
            </Box>
            <Typography sx={{ mb: 2 }}>
              <Box sx={{ pl: 3 }}>
                {product.items.map((variant: IProductVariant, index: number) => (
                  <Badge
                    key={index}
                    badgeContent=''
                    sx={{
                      mr: 7,
                      '& .MuiBadge-badge': {
                        backgroundColor: variant.color,
                        ...(index === 0 && {
                          border: '2px solid black'
                        })
                      }
                    }}
                  ></Badge>
                ))}
              </Box>
            </Typography>
            <Typography sx={{ mt: 10 }}>
              Price:{' '}
              <Box component='span' sx={{ fontWeight: 600 }}>
                ${product.items[0].price}
              </Box>
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', mt: 'auto' }}>
              <TextField size='small' type='number' defaultValue='1' sx={{ maxWidth: 100, display: 'block', mr: 4 }} />
              <Button variant='contained' sx={{ '& svg': { mr: 2 } }}>
                <Icon icon='mdi:cart-plus' fontSize={20} />
                Add to Card
              </Button>
            </Box>
          </Grid>
          <Grid item sm={12} md={12} xs={12} sx={{ my: 4, width: '100%', height: '400px' }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Product 3D Model
            </Typography>
            <Box sx={{ height: '400px', border: '1px solid #757575' }}>
              <ModelViewer model={product.model} />
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className='dialog-actions-dense'>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogProduct
