// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import ProductCard from 'src/views/ui/cards/basic/ProductCard'

const ProductsPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={12}>
        <Link href='/products/add'>
          <Button variant='contained' startIcon={<Icon icon='mdi:plus' />}>
            Add Product
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0 !important' }}>
          <CardHeader sx={{ p: '20px 4px !important' }} title='Tv units' action={<Link href='/all'>View All</Link>} />
          <CardContent sx={{ p: '4px !important' }}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0 !important' }}>
          <CardHeader sx={{ p: '20px 4px !important' }} title='L-shapes' action={<Link href='/all'>View All</Link>} />
          <CardContent sx={{ p: '4px !important' }}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0 !important' }}>
          <CardHeader sx={{ p: '20px 4px !important' }} title='Chairs' action={<Link href='/all'>View All</Link>} />
          <CardContent sx={{ p: '4px !important' }}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

ProductsPage.acl = {
  action: 'read',
  subject: 'products-page'
}

export default ProductsPage
