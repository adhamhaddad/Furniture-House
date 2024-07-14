// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const FooterContent = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant='body2' sx={{ mr: 2, color: 'white' }}>
        Powered by{' '}
        <Box component='span' sx={{ fontWeight: 800, mr: 1 }}>
          Abdelrahman Hemida
        </Box>
        {`- © ${new Date().getFullYear()} all rights reserved`}
      </Typography>
    </Box>
  )
}

export default FooterContent
