// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Footer Content Component
import FooterContent from './FooterContent'

interface Props {
  settings: LayoutProps['settings']
  saveSettings: LayoutProps['saveSettings']
  footerStyles?: NonNullable<LayoutProps['footerProps']>['sx']
  footerContent?: NonNullable<LayoutProps['footerProps']>['content']
}

const Footer = (props: Props) => {
  // ** Props
  const { settings, footerStyles, footerContent: userFooterContent } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { skin, footer, layout, contentWidth } = settings

  if (footer === 'hidden') {
    return null
  }

  return (
    <Box
      component='footer'
      className='layout-footer'
      sx={{
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F2A4A',
        ...footerStyles
      }}
    >
      <Box
        className='footer-content-container'
        sx={{
          width: '100%',
          py: theme.spacing(footer === 'fixed' && skin === 'bordered' ? 3.875 : 4),
          ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }),
          ...(layout === 'vertical' && {
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14
          }),
          ...(footer === 'fixed'
            ? {
                px: [5, 6],
                ...(contentWidth === 'boxed' &&
                  layout === 'vertical' && {
                    '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` }
                  }),
                ...(layout === 'vertical' && {
                  ...(skin === 'bordered'
                    ? { border: `1px solid ${theme.palette.divider}`, borderBottomWidth: 0 }
                    : { boxShadow: 6 })
                })
              }
            : { px: [4, 6] })
        }}
      >
        {userFooterContent ? userFooterContent(props) : <FooterContent />}
      </Box>
    </Box>
  )
}

export default Footer
