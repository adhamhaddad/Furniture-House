// ** React Imports
import { useState, useEffect, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'

interface FileProp {
  name: string
  type: string
  size: number
}

interface FileUploaderSingleProps {
  value: File[] | null
  onChange: (file: File | null) => void
}

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 250
  }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

const FileUploaderSingle: React.FC<FileUploaderSingleProps> = ({ value, onChange }) => {
  // ** State
  const [files, setFiles] = useState<File[]>([])

  // ** Hook
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'video/*': ['.mp4', '.mkv', '.webm', '.avi']
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  useEffect(() => {
    onChange(files[0] || null)
  }, [files, onChange])

  const handleLinkClick = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  const video = files.map((file: FileProp) => (
    <video key={file.name} className='single-file-image' controls style={{ width: '100%', height: '100%' }}>
      <source src={URL.createObjectURL(file as any)} type={file.type} />
      Your browser does not support the video tag.
    </video>
  ))

  return (
    <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {}}>
      {files.length > 0 && (
        <IconButton
          aria-label='upload video'
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            backgroundColor: '#1F2A4A',
            color: 'white',
            '&:hover': { backgroundColor: '#1F2A4A', color: 'white' }
          }}
        >
          <Icon icon='mdi:video' />
        </IconButton>
      )}
      <input {...getInputProps()} />
      {files.length ? (
        video
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            alignItems: 'center'
          }}
        >
          <Img width={300} alt='Upload video' src='/images/misc/upload.png' />
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>
            <HeadingTypography variant='h5'>Drop video files here or click to upload.</HeadingTypography>
            <Typography color='textSecondary'>
              Drop video files here or click{' '}
              <Link href='/' onClick={handleLinkClick}>
                browse
              </Link>{' '}
              through your machine
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default FileUploaderSingle
