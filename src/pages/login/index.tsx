// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: 450 }
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'mohamed.khaled@kanaba.com'
}

interface FormData {
  email: string
  password: string
}

const LoginV1 = () => {
  // ** State
  const [rememberMe, setRememberMe] = useState<boolean>(true)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // ** Hook
  const auth = useAuth()

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
    const { email, password } = data
    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width='350' height='120' viewBox='0 0 370 83.48319253264016'>
              <defs id='SvgjsDefs1011'></defs>
              <g
                id='SvgjsG1012'
                transform='matrix(1.2099013328552246,0,0,1.2099013328552246,-12.09901341052756,-18.14852011579134)'
                fill='#111111'
              >
                <g xmlns='http://www.w3.org/2000/svg'>
                  <g>
                    <path
                      fill='#111111'
                      d='M63,52h-6v-4c0-3.30859-2.69141-6-6-6H26c-3.30859,0-6,2.69141-6,6v4h-6c-2.20557,0-4,1.79443-4,4v12v4v12    h57V72v-4V56C67,53.79443,65.20605,52,63,52z M24,52v-4c0-1.10303,0.89697-2,2-2h25c1.10254,0,2,0.89697,2,2v4v16H24V52z M14,56h6    v12h-6V56z M63,80H14v-8h6h4h29h4h6V80z M63,68h-6V56h6V68z'
                    ></path>
                    <path
                      fill='#111111'
                      d='M72.49121,15l-5.14258,18H78v47h-5v4h14v-4h-5V33h10.65137l-5.14258-18H72.49121z M72.65137,29l2.85742-10    h8.98242l2.85742,10H72.65137z'
                    ></path>
                  </g>
                </g>
              </g>
              <g
                id='SvgjsG1013'
                transform='matrix(1.8037841320037842,0,0,1.8037841320037842,116.37295846394639,-2.74923231283676)'
                fill='#111111'
              >
                <path d='M7.44 32.76 c0 -1.4 -0.2 -5.2 -0.16 -6 c0 -0.12 0.08 -0.28 0.12 -0.28 c0.08 0 0.24 0.08 0.28 0.12 c1.28 1.68 7.28 13.32 8 13.36 c0.2 0.04 0.4 0.04 0.6 0.04 c1.36 -0.08 2.56 0 3.92 0 c1.4 0 0.48 -1.36 0.24 -1.72 c-0.36 -0.52 -5.12 -9.04 -5.4 -9.56 c-0.8 -1.36 -1.48 -2.84 -2.28 -4.16 c-0.08 -0.16 -0.16 -0.4 -0.12 -0.56 c0.08 -0.48 0.2 -0.92 0.4 -1.36 c0.96 -1.88 1.96 -3.8 3.12 -5.6 c1.28 -2.04 2 -3.32 3.04 -5.16 c0.24 -0.44 0.4 -0.92 0.56 -1.44 c0.04 -0.2 -0.12 -0.4 -0.36 -0.4 c-0.76 -0.04 -3.52 0 -4.4 0 c-0.4 0 -0.8 0.08 -1 0.44 c-0.52 1 -5.88 10.8 -6.4 11.68 c-0.04 0.08 -0.16 0.12 -0.28 0.12 c0 0 -0.08 -0.12 -0.08 -0.2 c-0.04 -2.24 0.36 -9.56 0.28 -11.04 c-0.04 -0.88 -0.2 -0.96 -1.08 -1 c-0.96 -0.04 -2.28 -0.04 -3.24 -0.04 c-0.88 0 -0.96 0.48 -1.08 1.12 c-0.04 0.12 -0.04 3.88 -0.04 5.56 c0 2.44 -0.2 17.72 0.08 22.56 c0 0.48 0.12 0.76 0.52 0.76 c1.08 -0.08 2.68 0 3.76 0 c0.76 0 0.88 -0.08 0.88 -1.36 c0 -1.72 0.16 -3.28 0.16 -5.4 c0 -0.16 -0.04 -0.32 -0.04 -0.48 z M31.608 39.68 c0.12 0.04 0.48 0.04 0.84 0.04 c0.8 0 1.04 -2.88 1.12 -3.48 c0.04 -0.48 0.16 -0.52 0.56 -0.6 c2 -0.24 3 -0.08 5 -0.04 c0.44 0 0.68 0.2 0.8 0.56 l0.28 0.92 c0.24 0.68 0.44 1.52 0.68 2.2 c0.16 0.48 0.2 0.44 0.68 0.44 c0.64 0 2.96 0 3.64 -0.04 c0.92 0 0.28 -1.88 0.16 -2.2 c-0.36 -1.12 -0.44 -2.28 -0.8 -3.4 c-0.16 -0.48 -4.72 -22.12 -4.92 -23.32 c-0.28 -0.72 -0.04 -0.76 -0.68 -0.76 c-1.36 0 -2.8 0.08 -4.2 0 c-0.56 0 -0.52 0.16 -0.6 0.76 c-0.08 0.56 -1.52 6.92 -2.08 9.56 c-0.72 3.32 -1.36 6.52 -2.16 9.8 c-0.28 1.16 -2.2 9.52 -1.96 9.56 c0.12 0.08 0.32 0.04 0.48 0.04 c1 0 1.92 0 3.16 -0.04 z M36.848 30.6 l-0.84 0 c-1.12 0 -1.16 0 -0.88 -1.16 c0.2 -0.88 1.28 -5.64 1.52 -6.8 c0.04 -0.08 0.12 -0.16 0.16 -0.16 c0.08 0 0.16 0.08 0.2 0.12 c0.16 0.48 0.32 1.68 0.48 2.16 c0.36 1.52 0.6 2.8 0.96 4.44 c0.36 1.44 0.2 1.44 -0.52 1.44 c-0.36 0 -0.72 -0.04 -1.08 -0.04 z M69.696 10.920000000000002 c0.12 0.56 0.04 27.2 0.04 27.88 c0 1.2 -0.44 1.16 -1.24 1.16 c-1.2 0 -2.88 0.2 -3.24 -0.2 c-0.32 -0.28 -6.24 -14.56 -7.08 -16.36 c-0.08 -0.16 -0.28 -0.56 -0.44 -0.48 c-0.2 0.08 -0.12 0.36 -0.12 0.52 c-0.04 1.4 0.2 13.48 0.2 15.4 c0 0.96 -0.04 1.12 -0.84 1.12 l-2 0 c-0.52 0 -1.16 -0.04 -1.68 0.04 c-0.4 0 -0.6 -0.12 -0.64 -0.52 l0 -3.16 c0.08 -3.36 0 -23.28 0 -24.76 c0 -1.28 0.36 -1.52 1.64 -1.52 c0.88 -0.04 1.76 -0.04 2.64 -0.04 c0.28 0 0.44 0.04 0.6 0.4 c1.08 2.52 5.68 14.08 6.4 15.48 c0.12 0.28 0.56 1.4 0.8 1.52 l0.04 0 c0.16 -0.16 0.12 -0.96 0.12 -1.2 c0 -0.6 -0.32 -14.64 -0.32 -14.92 c0 -0.4 -0.12 -0.76 0.08 -1.04 c0.12 -0.16 0.64 -0.2 0.84 -0.24 c1.12 -0.08 2.44 0.04 3.56 0 c0.56 0 0.52 0.4 0.64 0.92 z M80.464 39.68 c0.12 0.04 0.48 0.04 0.84 0.04 c0.8 0 1.04 -2.88 1.12 -3.48 c0.04 -0.48 0.16 -0.52 0.56 -0.6 c2 -0.24 3 -0.08 5 -0.04 c0.44 0 0.68 0.2 0.8 0.56 l0.28 0.92 c0.24 0.68 0.44 1.52 0.68 2.2 c0.16 0.48 0.2 0.44 0.68 0.44 c0.64 0 2.96 0 3.64 -0.04 c0.92 0 0.28 -1.88 0.16 -2.2 c-0.36 -1.12 -0.44 -2.28 -0.8 -3.4 c-0.16 -0.48 -4.72 -22.12 -4.92 -23.32 c-0.28 -0.72 -0.04 -0.76 -0.68 -0.76 c-1.36 0 -2.8 0.08 -4.2 0 c-0.56 0 -0.52 0.16 -0.6 0.76 c-0.08 0.56 -1.52 6.92 -2.08 9.56 c-0.72 3.32 -1.36 6.52 -2.16 9.8 c-0.28 1.16 -2.2 9.52 -1.96 9.56 c0.12 0.08 0.32 0.04 0.48 0.04 c1 0 1.92 0 3.16 -0.04 z M85.70400000000001 30.6 l-0.84 0 c-1.12 0 -1.16 0 -0.88 -1.16 c0.2 -0.88 1.28 -5.64 1.52 -6.8 c0.04 -0.08 0.12 -0.16 0.16 -0.16 c0.08 0 0.16 0.08 0.2 0.12 c0.16 0.48 0.32 1.68 0.48 2.16 c0.36 1.52 0.6 2.8 0.96 4.44 c0.36 1.44 0.2 1.44 -0.52 1.44 c-0.36 0 -0.72 -0.04 -1.08 -0.04 z M101.552 13.079999999999998 c0 1.92 -0.08 22.56 0 24.4 c0.04 0.44 0.04 0.88 0.04 1.32 c0 0.32 0.2 0.52 0.48 0.64 c0.24 0.08 0.56 0.16 0.8 0.16 c1.16 -0.12 2.4 0 3.6 -0.04 c2.08 0.16 3.96 -0.32 5.76 -1.28 c1.68 -0.96 2.6 -2.68 3.24 -4.48 c0.52 -1.52 0.44 -3.32 0.16 -4.88 c-0.24 -1.4 -0.88 -2.76 -1.72 -3.88 c-0.12 -0.16 -1.84 -1.24 -1.76 -1.32 c1.04 -1.48 2.52 -2.72 2.72 -4.56 c0.16 -1.6 -0.2 -3.24 -0.76 -4.72 c-0.36 -0.96 -0.84 -1.88 -1.6 -2.6 c-1.28 -1.2 -3.2 -1.72 -4.88 -1.88 c-1.72 -0.16 -3.32 -0.04 -5.04 -0.12 c-0.6 0 -0.88 0.24 -0.88 0.88 c0 0.84 -0.16 1.52 -0.16 2.36 z M106.472 20.36 c-0.04 -0.44 0 -3.96 -0.08 -5.28 c-0.04 -0.48 0.24 -0.72 0.76 -0.6 c0.4 0.08 0.72 0.12 1.04 0.36 c1 0.76 1.76 1.68 1.8 2.96 c0 0.64 0 1.28 -0.24 1.88 c-0.28 0.72 -0.68 1.28 -1.4 1.64 c-0.48 0.24 -0.92 0.52 -1.4 0.72 c-0.24 0.08 -0.48 -0.04 -0.52 -0.28 c0 -0.48 0.04 -1.4 0.04 -1.4 z M110.47200000000001 30.96 c0 0.2 -0.04 0.56 -0.04 0.92 c-0.04 1.2 -1.6 2.72 -3.4 2.76 c-0.12 0 -0.32 -0.12 -0.36 -0.24 c-0.08 -0.24 -0.16 -0.52 -0.16 -0.8 c-0.04 -1.24 0 -2.44 0 -3.76 c0.12 -0.84 0.04 -1.72 0.04 -2.6 c0.04 -0.68 0.2 -0.8 0.84 -0.92 c0.96 -0.12 1.84 0.28 2.28 1.04 c0.52 0.92 0.72 1.92 0.8 2.96 l0 0.64 z M126.52000000000001 39.68 c0.12 0.04 0.48 0.04 0.84 0.04 c0.8 0 1.04 -2.88 1.12 -3.48 c0.04 -0.48 0.16 -0.52 0.56 -0.6 c2 -0.24 3 -0.08 5 -0.04 c0.44 0 0.68 0.2 0.8 0.56 l0.28 0.92 c0.24 0.68 0.44 1.52 0.68 2.2 c0.16 0.48 0.2 0.44 0.68 0.44 c0.64 0 2.96 0 3.64 -0.04 c0.92 0 0.28 -1.88 0.16 -2.2 c-0.36 -1.12 -0.44 -2.28 -0.8 -3.4 c-0.16 -0.48 -4.72 -22.12 -4.92 -23.32 c-0.28 -0.72 -0.04 -0.76 -0.68 -0.76 c-1.36 0 -2.8 0.08 -4.2 0 c-0.56 0 -0.52 0.16 -0.6 0.76 c-0.08 0.56 -1.52 6.92 -2.08 9.56 c-0.72 3.32 -1.36 6.52 -2.16 9.8 c-0.28 1.16 -2.2 9.52 -1.96 9.56 c0.12 0.08 0.32 0.04 0.48 0.04 c1 0 1.92 0 3.16 -0.04 z M131.76 30.6 l-0.84 0 c-1.12 0 -1.16 0 -0.88 -1.16 c0.2 -0.88 1.28 -5.64 1.52 -6.8 c0.04 -0.08 0.12 -0.16 0.16 -0.16 c0.08 0 0.16 0.08 0.2 0.12 c0.16 0.48 0.32 1.68 0.48 2.16 c0.36 1.52 0.6 2.8 0.96 4.44 c0.36 1.44 0.2 1.44 -0.52 1.44 c-0.36 0 -0.72 -0.04 -1.08 -0.04 z'></path>
              </g>
            </svg>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='body2'>Please sign-in to your account</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    autoFocus
                    label='Email'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.email)}
                    placeholder='user@kanaba.com'
                  />
                )}
              />
              {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                Password
              </InputLabel>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    value={value}
                    onBlur={onBlur}
                    label='Password'
                    onChange={onChange}
                    id='auth-login-v2-password'
                    error={Boolean(errors.password)}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onMouseDown={e => e.preventDefault()}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} fontSize={20} />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              />
              {errors.password && (
                <FormHelperText sx={{ color: 'error.main' }} id=''>
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <FormControlLabel
                label='Remember Me'
                control={<Checkbox />}
                sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
              />
              <Typography
                variant='body2'
                component={Link}
                href='/pages/auth/forgot-password-v1'
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                Forgot Password?
              </Typography>
            </Box>
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
              Login
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography sx={{ mr: 2, color: 'text.secondary' }}>New on our platform?</Typography>
              <Typography component={Link} href='/register' sx={{ color: 'primary.main', textDecoration: 'none' }}>
                Create an account
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

LoginV1.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
LoginV1.guestGuard = true

export default LoginV1
