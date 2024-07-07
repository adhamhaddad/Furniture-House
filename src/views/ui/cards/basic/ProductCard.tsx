// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid, { GridProps } from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import DialogProduct from 'src/views/components/dialogs/DialogProduct'
import DialogProductModel from 'src/views/components/dialogs/DialogProductModel'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const ProductCard = (props: any) => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid item md={5} xs={12}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img width={137} height={176} alt='Simple Chair' src='/images/products/chair.jpg' onClick={handleOpen} />
          </CardContent>
        </StyledGrid>
        <Grid
          item
          md={7}
          xs={12}
          sx={{
            pt: theme => ['0 !important', '0 !important', `${theme.spacing(6)} !important`],
            pl: theme => [`${theme.spacing(6)} !important`, `${theme.spacing(6)} !important`, '0 !important']
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ mb: 2 }}>
              {props.name}
            </Typography>
            <Typography variant='body2' sx={{ mb: 2, height: '50px' }}>
              {props.description}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <Box sx={{ pl: 3 }}>
                <Badge color='primary' badgeContent='' sx={{ mr: 7 }}></Badge>
                <Badge color='error' badgeContent='' sx={{ mr: 7 }}></Badge>
                <Badge color='success' badgeContent=''></Badge>
              </Box>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Price:{' '}
              <Box component='span' sx={{ fontWeight: 600 }}>
                ${props.items[0].price}
              </Box>
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button sx={{ '& svg': { mr: 2 } }}>
                <Icon icon='mdi:cart-plus' fontSize={20} />
                Add to Card
              </Button>

              <DialogProductModel />
            </Box>
          </CardActions>
        </Grid>
      </Grid>
      <DialogProduct {...props} open={open} handleClose={handleClose} />
    </Card>
  )
}

export default ProductCard
