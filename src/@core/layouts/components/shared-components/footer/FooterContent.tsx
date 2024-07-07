// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const FooterContent = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant='body2' sx={{ mr: 2, color: 'white' }}>
        Made with{' '}
        <Box component='span' sx={{ color: 'error.main', mr: 1 }}>
          ❤️
        </Box>
        {`- © ${new Date().getFullYear()} all rights reserved`}
      </Typography>
    </Box>
  )
}

export default FooterContent
