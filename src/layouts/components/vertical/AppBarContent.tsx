// ** Next Imports
import Link from 'next/link'

// ** React Imports
import { useContext } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

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
  color: 'white'
}))

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, toggleNavVisibility } = props

  // ** Hooks
  const ability = useContext(AbilityContext)

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', width: '70%', alignItems: 'center' }}>
        {/* {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <Icon icon='mdi:menu' />
          </IconButton>
        ) : null} */}

        <Logo width='200' fill='#ffffff' />
        <TextField
          fullWidth
          size='small'
          placeholder='What are you looking for?'
          sx={{ ml: 15, backgroundColor: 'white', borderRadius: 0.5, maxWidth: '600px' }}
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
