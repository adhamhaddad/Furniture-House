// ** React Imports
import { useState, useEffect, useContext } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// ** Types Imports
import { IProduct, IProductVariant } from 'src/types/product-types'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** Custom Components
import SwiperProductImage from '../swiper/SwiperProductImage'
import ModelViewerV2 from '../models/ModelViewerV2'
import ProductMenu from '../menu'

interface Props {
  open: boolean
  handleClose: () => void
  product: IProduct
}

const DialogProduct = (props: Props) => {
  // ** Vars
  const { open, handleClose, product } = props

  // ** States
  const [variant, setVariant] = useState(product.items[0])

  // ** Hooks
  const ability = useContext(AbilityContext)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  // ** Handlers
  const handleVariantChange = (item: IProductVariant) => {
    setVariant(item)
  }

  useEffect(() => {
    return () => {
      setVariant(product.items[0])
    }
  }, [])

  return (
    <Dialog maxWidth='lg' fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogTitle id='responsive-dialog-title'>
        <Typography variant='h6' component='span'>
          Product Details
        </Typography>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{ top: 10, right: 10, position: 'absolute', color: 'grey.500' }}
        >
          <Icon icon='mdi:close' />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ position: 'relative' }}>
        {ability?.can('read', 'card-menu-options') && <ProductMenu id={product.product_id} />}

        <Grid container spacing={6} sx={{ pb: 10 }}>
          <Grid item sm={12} md={5} xs={12}>
            <SwiperProductImage items={product.items} currentVariant={variant} onChange={handleVariantChange} />
          </Grid>

          <Grid item sm={12} md={7} xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              {product.name}
            </Typography>
            <Typography variant='body2' sx={{ my: 3 }}>
              {product.description}
            </Typography>

            <Typography variant='h6'>
              Price:{' '}
              <Box component='span' sx={{ fontWeight: 800 }}>
                ${variant.price}
              </Box>
            </Typography>

            <Box sx={{ my: 3 }}>
              <Typography variant='h6'>Specification</Typography>
              <Typography variant='body2' sx={{ my: 2, fontWeight: 800 }}>
                Material: {product.material}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2, fontWeight: 800 }}>
                Width: {product.width}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2, fontWeight: 800 }}>
                Height: {product.height}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2, fontWeight: 800 }}>
                Depth: {product.depth}
              </Typography>
              <Typography variant='body2' sx={{ fontWeight: 800 }}>
                SKU: {variant.sku}
              </Typography>
            </Box>

            <Box sx={{ p: 5 }}>
              {product.items.map((item: IProductVariant, index: number) => (
                <Badge
                  onClick={() => handleVariantChange(item)}
                  key={index}
                  badgeContent=''
                  sx={{
                    mr: 13,
                    '& .MuiBadge-badge': {
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      cursor: 'pointer',
                      backgroundColor: item.color,
                      ...(item.product_item_id === variant.product_item_id && {
                        border: '2px solid black'
                      })
                    }
                  }}
                ></Badge>
              ))}
            </Box>

            <Box
              sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', mt: 'auto' }}
            >
              <Typography variant='inherit' sx={{ mr: 10, fontWeight: 800 }}>
                {variant.qty_stock} In Stock
              </Typography>
              {ability?.can('read', 'add-to-cart') && (
                <>
                  <TextField
                    size='small'
                    type='number'
                    defaultValue='1'
                    sx={{ maxWidth: 100, display: 'block', mr: 4 }}
                  />
                  <Button variant='contained' sx={{ '& svg': { mr: 2 } }}>
                    <Icon icon='mdi:cart-plus' fontSize={20} />
                    Add to Card
                  </Button>
                </>
              )}
            </Box>
          </Grid>
          <Grid item sm={12} md={12} xs={12} sx={{ my: 4, width: '100%', height: '400px' }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Product 3D Model
            </Typography>
            <Box sx={{ height: '400px', border: '1px solid #757575' }}>
              <ModelViewerV2 src={product.model.url} avatar={product.model.url} />
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default DialogProduct
