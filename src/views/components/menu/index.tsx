// ** React Imports
import { MouseEvent, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiMenu, { MenuProps } from '@mui/material/Menu'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

// ** Store & Actions Imports
import { AppDispatch, RootState } from 'src/store'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from 'src/store/products'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import toast from 'react-hot-toast'

// Styled Menu component
const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiMenu-paper': {
    border: `1px solid ${theme.palette.divider}`
  }
}))

// Styled MenuItem component
const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: theme.palette.common.white
    }
  }
}))

interface Props {
  id: number
}
const ProductMenu = (props: Props) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    dispatch(deleteProduct(props.id)).then(res => {
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success('Product deleted successfully', {
          duration: 2000
        })
      }
    })
  }

  return (
    <>
      <IconButton
        aria-label='more'
        aria-controls='long-menu'
        aria-haspopup='true'
        onClick={handleClick}
        sx={{ top: 10, right: 10, position: 'absolute' }}
      >
        <Icon icon='mdi:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        elevation={0}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Link href={`/products/edit/${props.id}`} style={{ textDecoration: 'none' }} passHref>
          <MenuItem>
            <ListItemIcon>
              <Icon icon='mdi:edit' fontSize={20} />
            </ListItemIcon>
            <ListItemText primary='Edit' />
          </MenuItem>
        </Link>
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <Icon icon='mdi:delete' fontSize={20} />
          </ListItemIcon>
          <ListItemText primary='Delete' />
        </MenuItem>
      </Menu>
    </>
  )
}

export default ProductMenu
