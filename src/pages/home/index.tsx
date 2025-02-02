// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Store & Actions Imports
import { AppDispatch, RootState } from 'src/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'src/store/products'

// ** Custom Components
import ProductCard from 'src/views/ui/cards/ProductCard'
import SwiperAutoSwitch from 'src/views/components/swiper/SwiperAutoSwitch'
import { IProduct } from 'src/types/product-types'

const Home = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.products)

  useEffect(() => {
    dispatch(fetchData({ id: null }))
  }, [dispatch])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={12}>
        <SwiperAutoSwitch />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0 !important' }}>
          <CardHeader
            sx={{ p: '20px 4px !important' }}
            title='Tv units'
            action={<Link href='/products/all/tv-units'>View All</Link>}
          />
          <CardContent sx={{ p: '4px !important' }}>
            <Grid container spacing={6}>
              {store.data.slice(0, 3).map((item: IProduct, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProductCard {...item} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0 !important' }}>
          <CardHeader
            sx={{ p: '20px 4px !important' }}
            title='Arm chairs'
            action={<Link href='/products/all/arm-chairs'>View All</Link>}
          />
          <CardContent sx={{ p: '4px !important' }}>
            <Grid container spacing={6}>
              {store.data.slice(0, 3).map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProductCard {...item} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <SwiperAutoSwitch />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0 !important' }}>
          <CardHeader
            sx={{ p: '20px 4px !important' }}
            title='Wooden center tables offers'
            action={<Link href='/products/all/wooden-tables'>View All</Link>}
          />
          <CardContent sx={{ p: '4px !important' }}>
            <Grid container spacing={6}>
              {store.data.slice(0, 3).map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProductCard {...item} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0 !important' }}>
          <CardHeader
            sx={{ p: '20px 4px !important' }}
            title='L-shapes'
            action={<Link href='/products/all/l-shapes'>View All</Link>}
          />
          <CardContent sx={{ p: '4px !important' }}>
            <Grid container spacing={6}>
              {store.data.slice(0, 3).map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProductCard {...item} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0 !important' }}>
          <CardHeader
            sx={{ p: '20px 4px !important' }}
            title='Wooden center tables offers'
            action={<Link href='/products/all/wooden-center-tables'>View All</Link>}
          />
          <CardContent sx={{ p: '4px !important' }}>
            <Grid container spacing={6}>
              {store.data.slice(0, 3).map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProductCard {...item} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

Home.acl = {
  action: 'read',
  subject: 'home-page'
}

export default Home
