// ** React Imports
import { useState, useEffect, ChangeEvent } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import ButtonGroup from '@mui/material/ButtonGroup'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Store & Actions Imports
import { AppDispatch, RootState } from 'src/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'src/store/products'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Spinner Imports
import Spinner from 'src/@core/components/spinner'

// ** Types Imports
import { IProduct } from 'src/types/product-types'

// ** Custom Components
import ProductCard from 'src/views/ui/cards/ProductCard'

type ColorName = 'grey' | 'blue' | 'black' | 'offWhite' | 'brown'

type ColorsState = Record<ColorName, boolean>

const AllProductsPage = () => {
  // ** State
  const [sort, setSort] = useState({ featured: true, lth: false, htl: false })
  const [material, setMaterial] = useState({ beachWood: true, mdf: false, counterWood: false })
  const [categories, setCategories] = useState({ armChairs: true, sideChairs: false, chair: false, lShapes: false })
  const [colors, setColors] = useState<ColorsState>({
    grey: true,
    blue: false,
    black: false,
    offWhite: false,
    brown: false
  })

  // ** Hooks
  const router = useRouter()
  const { category } = router.query
  const dispatch = useDispatch<AppDispatch>()
  const { loading, data } = useSelector((state: RootState) => state.products)

  // ** Handlers
  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target
    setSort({
      featured: name === 'featured',
      lth: name === 'lth',
      htl: name === 'htl'
    })
  }

  const handleMaterialChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setMaterial(prev => ({ ...prev, [name]: checked }))
  }

  const handleCategoriesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setCategories(prev => ({ ...prev, [name]: checked }))
  }

  const handleColorsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setColors(prev => ({ ...prev, [name]: checked }))
  }

  // Filter Handlers
  const handleFilterReset = () => {
    setSort({ featured: true, lth: false, htl: false })
    setMaterial({ beachWood: true, mdf: false, counterWood: false })
    setCategories({ armChairs: true, sideChairs: false, chair: false, lShapes: false })
    setColors({ grey: true, blue: false, black: false, offWhite: false, brown: false })
  }
  const handleFilterApply = () => {}

  useEffect(() => {
    dispatch(fetchData({ id: null }))
  }, [dispatch, category])

  const colorLabels = [
    { name: 'grey', label: 'Grey', color: '#808080' },
    { name: 'blue', label: 'Blue', color: '#0000FF' },
    { name: 'black', label: 'Black', color: '#000000' },
    { name: 'offWhite', label: 'Off-White', color: '#F5F5F5' },
    { name: 'brown', label: 'Brown', color: '#A52A2A' }
  ]

  return !loading ? (
    <Grid container spacing={6}>
      <Grid item xs={2} sm={3} md={3} sx={{ backgroundColor: 'background.paper' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pr: 5 }}>
          <Typography variant='h6'>Filter</Typography>

          <ButtonGroup variant='outlined' color='primary'>
            <Button onClick={handleFilterReset}>Reset</Button>
            <Button onClick={handleFilterApply}>Apply</Button>
          </ButtonGroup>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            mt: 5
          }}
        >
          <Typography variant='h6'>Sort by</Typography>

          <FormGroup>
            <FormControlLabel
              label='Featured'
              control={<Checkbox checked={sort.featured} onChange={handleSortChange} name='featured' />}
            />
            <FormControlLabel
              label='Price: low to high'
              control={<Checkbox checked={sort.lth} onChange={handleSortChange} name='lth' />}
            />
            <FormControlLabel
              label='Price: high to low'
              control={<Checkbox checked={sort.htl} onChange={handleSortChange} name='htl' />}
            />
          </FormGroup>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            mt: 5
          }}
        >
          <Typography variant='h6'>Color</Typography>

          <FormGroup>
            {colorLabels.map(color => (
              <FormControlLabel
                key={color.name}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        backgroundColor: color.color,
                        marginRight: 1,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                    {color.label}
                  </Box>
                }
                control={
                  <Checkbox checked={colors[color.name as ColorName]} onChange={handleColorsChange} name={color.name} />
                }
              />
            ))}
          </FormGroup>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            mt: 5
          }}
        >
          <Typography variant='h6'>Category</Typography>

          <FormGroup>
            <FormControlLabel
              label='Arm Chairs'
              control={<Checkbox checked={categories.armChairs} onChange={handleCategoriesChange} name='beachWood' />}
            />
            <FormControlLabel
              label='Side Chairs'
              control={<Checkbox checked={categories.sideChairs} onChange={handleCategoriesChange} name='sideChairs' />}
            />
            <FormControlLabel
              label='Chair'
              control={<Checkbox checked={categories.chair} onChange={handleCategoriesChange} name='chair' />}
            />
            <FormControlLabel
              label='L-Shapes'
              control={<Checkbox checked={categories.lShapes} onChange={handleCategoriesChange} name='lShapes' />}
            />
          </FormGroup>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            mt: 5
          }}
        >
          <Typography variant='h6'>Material</Typography>

          <FormGroup>
            <FormControlLabel
              label='Beech Wood'
              control={<Checkbox checked={material.beachWood} onChange={handleMaterialChange} name='beachWood' />}
            />
            <FormControlLabel
              label='MDF'
              control={<Checkbox checked={material.mdf} onChange={handleMaterialChange} name='mdf' />}
            />
            <FormControlLabel
              label='Counter Wood'
              control={<Checkbox checked={material.counterWood} onChange={handleMaterialChange} name='counterWood' />}
            />
          </FormGroup>
        </Box>
      </Grid>

      <Grid item xs={10} sm={9} md={9}>
        <Typography variant='h5' sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <Link
            href='/home'
            style={{
              marginRight: '10px',
              display: 'flex',
              alignItems: 'center',
              color: 'inherit',
              cursor: 'pointer'
            }}
          >
            <Icon icon='mdi:arrow-left' />
          </Link>
          {category}
        </Typography>
        <Grid container spacing={6}>
          {data.map((item: IProduct, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
          <Pagination count={10} shape='rounded' color='primary' />
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Spinner />
  )
}

AllProductsPage.acl = {
  action: 'read',
  subject: 'all-products-page'
}

export default AllProductsPage
