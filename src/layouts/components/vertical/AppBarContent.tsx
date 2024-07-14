// ** Next Imports
import Link from 'next/link'

// ** React Imports
import { useContext } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import Logo from 'src/views/components/logo'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
}

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8),
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 6,
  width: '500px',
  [theme.breakpoints.down('md')]: {
    width: '80%'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, toggleNavVisibility } = props

  // ** Hooks
  const ability = useContext(AbilityContext)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const logoWidth = isSmallScreen ? '150' : '200'

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {hidden && isSmallScreen ? (
          <IconButton sx={{ ml: -2.75, mr: 4, color: 'white' }} onClick={toggleNavVisibility}>
            <Icon icon='mdi:menu' />
          </IconButton>
        ) : null}

        <Logo width={logoWidth} fill='#ffffff' />
        <StyledTextField
          fullWidth
          size='small'
          sx={{ ml: 15 }}
          placeholder='What are you looking for?'
          onChange={e => 'handleFilter(e.target.value)'}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon icon='mdi:magnify' fontSize='1.25rem' />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {ability?.can('read', 'home-page') && (
          <StyledLink href='/home'>
            <Icon icon='mdi:home' style={{ marginRight: 4 }} />
            Home
          </StyledLink>
        )}
        {ability?.can('read', 'cart-page') && (
          <StyledLink href='/cart'>
            <Icon icon='mdi:cart' style={{ marginRight: 4 }} />
            Cart
          </StyledLink>
        )}
        {ability?.can('read', 'products-page') && (
          <StyledLink href='/products'>
            <Icon icon='mdi:shopping' style={{ marginRight: 4 }} />
            My Products
          </StyledLink>
        )}

        <UserDropdown settings={settings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
