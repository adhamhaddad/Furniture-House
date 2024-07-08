// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Custom Components
import FileUploaderSingle from 'src/views/components/file-uploader/FileUploaderSingle'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  name: '',
  description: '',
  width: '',
  height: '',
  depth: '',
  material: '',
  category: '',
  video: null
}

interface FormData {
  name: string
  description: string
  width: string
  height: string
  depth: string
  material: string
  category: string
  video: any
}

const AddProductPage = () => {
  // ** Vars
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0' }}>
          <CardHeader
            title='Add Product'
            action={
              <Link href='/products'>
                <Button startIcon={<Icon icon='mdi:arrow-left' />}>Back to products</Button>
              </Link>
            }
            sx={{ mb: 6 }}
          />
          <CardContent>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={6}>
                <Grid item xs={5} sm={5} md={5}>
                  <Typography variant='h6' mb={5}>
                    Product & Description
                  </Typography>
                  <Typography variant='body2'>
                    Add your product description and necessary information from here
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7} md={7} sx={{ backgroundColor: 'white', pr: 5, pb: 5 }}>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Controller
                          name='name'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <TextField
                              InputLabelProps={{ shrink: true }}
                              label='Name*'
                              value={value}
                              onChange={onChange}
                              error={Boolean(errors.name)}
                            />
                          )}
                        />
                        {errors.name && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Controller
                          name='width'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <TextField
                              InputLabelProps={{ shrink: true }}
                              label='Width*'
                              value={value}
                              onChange={onChange}
                              error={Boolean(errors.width)}
                            />
                          )}
                        />
                        {errors.width && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.width.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Controller
                          name='height'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <TextField
                              InputLabelProps={{ shrink: true }}
                              label='Height*'
                              value={value}
                              onChange={onChange}
                              error={Boolean(errors.height)}
                            />
                          )}
                        />
                        {errors.height && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.height.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Controller
                          name='depth'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <TextField
                              InputLabelProps={{ shrink: true }}
                              label='Depth*'
                              value={value}
                              onChange={onChange}
                              error={Boolean(errors.depth)}
                            />
                          )}
                        />
                        {errors.depth && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.depth.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Controller
                          name='description'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <TextField
                              rows={5}
                              multiline
                              label='Description*'
                              id='textarea-outlined-static'
                              defaultValue='Default Value'
                              value={value}
                              onChange={onChange}
                              error={Boolean(errors.description)}
                            />
                          )}
                        />
                        {errors.description && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.description.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 4 },
                  mt: theme => `${theme.spacing(12)} !important`,
                  mb: theme => `${theme.spacing(12)} !important`
                }}
              />

              <Grid container spacing={6}>
                <Grid item xs={5} sm={5} md={5}>
                  <Typography variant='h6' mb={5}>
                    Categories & Materials
                  </Typography>
                  <Typography variant='body2'>Add your necessary information from here</Typography>
                </Grid>
                <Grid item xs={7} sm={7} md={7} sx={{ backgroundColor: 'white', pr: 5, pb: 5 }}>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Controller
                          name='category'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <TextField
                              InputLabelProps={{ shrink: true }}
                              label='Category*'
                              value={value}
                              onChange={onChange}
                              error={Boolean(errors.category)}
                            />
                          )}
                        />
                        {errors.category && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.category.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Controller
                          name='material'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <TextField
                              InputLabelProps={{ shrink: true }}
                              label='Material*'
                              value={value}
                              onChange={onChange}
                              error={Boolean(errors.material)}
                            />
                          )}
                        />
                        {errors.material && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.material.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 4 },
                  mt: theme => `${theme.spacing(12)} !important`,
                  mb: theme => `${theme.spacing(12)} !important`
                }}
              />

              <Grid container spacing={6}>
                <Grid item xs={5} sm={5} md={5}>
                  <Typography variant='h6' mb={5}>
                    Product Video
                  </Typography>
                  <Typography variant='body2'>Add your necessary information from here</Typography>
                </Grid>
                <Grid item xs={7} sm={7} md={7} sx={{ backgroundColor: 'white', pr: 5, pb: 5 }}>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Controller
                          name='video'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => <FileUploaderSingle onChange={onChange} />}
                        />
                        {errors.video && (
                          <FormHelperText sx={{ color: 'error.main' }}>{errors.video.message}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 5 }}>
                <Button variant='contained' type='submit'>
                  Add Product
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

AddProductPage.acl = {
  action: 'read',
  subject: 'add-product-page'
}

export default AddProductPage
