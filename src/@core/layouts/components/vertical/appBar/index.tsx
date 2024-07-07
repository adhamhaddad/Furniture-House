// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'
import { styled, useTheme } from '@mui/material/styles'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

interface Props {
  hidden: LayoutProps['hidden']
  toggleNavVisibility: () => void
  settings: LayoutProps['settings']
  saveSettings: LayoutProps['saveSettings']
  appBarContent: NonNullable<LayoutProps['verticalLayoutProps']['appBar']>['content']
  appBarProps: NonNullable<LayoutProps['verticalLayoutProps']['appBar']>['componentProps']
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1F2A4A',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  padding: '0 !important',
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition: 'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out'
}))

const MenuToolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  padding: '0 !important',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`
}))

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8),
  color: 'black'
}))

const LayoutAppBar = (props: Props) => {
  // ** Props
  const { settings, appBarProps, appBarContent: userAppBarContent } = props

  // ** Hooks
  const theme = useTheme()

  // ** Vars
  const { appBar, contentWidth } = settings

  if (appBar === 'hidden') {
    return null
  }

  let userAppBarStyle = {}
  if (appBarProps && appBarProps.sx) {
    userAppBarStyle = appBarProps.sx
  }
  const userAppBarProps = Object.assign({}, appBarProps)
  delete userAppBarProps.sx

  return (
    <>
      <AppBar
        elevation={0}
        color='default'
        className='layout-navbar'
        sx={{ ...userAppBarStyle }}
        position={appBar === 'fixed' ? 'sticky' : 'static'}
        {...userAppBarProps}
      >
        <Toolbar
          className='navbar-content-container'
          sx={{
            ...(contentWidth === 'boxed' && {
              '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` }
            })
          }}
        >
          {(userAppBarContent && userAppBarContent(props)) || null}
        </Toolbar>
        <MenuToolbar className='layout-navbar'>
          <Toolbar
            className='navbar-content-container'
            sx={{
              ...(contentWidth === 'boxed' && {
                '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` }
              })
            }}
          >
            <StyledLink href='/furniture'>Furniture</StyledLink>
            <StyledLink href='/furniture'>Storage</StyledLink>
            <StyledLink href='/furniture'>Home</StyledLink>
            <StyledLink href='/furniture'>Decor</StyledLink>
            <StyledLink href='/furniture'>Office Furniture</StyledLink>
            <StyledLink href='/furniture'>Lighting</StyledLink>
            <StyledLink href='/furniture'>Fabric & Bedding</StyledLink>
          </Toolbar>
        </MenuToolbar>
      </AppBar>
    </>
  )
}

export default LayoutAppBar
