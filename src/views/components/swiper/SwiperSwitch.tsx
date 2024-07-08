// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Components
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'

// ** Custom Components
import ProductCard from 'src/views/ui/cards/ProductCard'

const SwiperSwitch = (props: any) => {
  // ** States
  const [loaded, setLoaded] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // ** Hook
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rtl: false,
    slides: {
      perView: 3,
      spacing: 15 // Adjust spacing between slides if necessary
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <KeenSliderWrapper>
      <Box className='navigation-wrapper'>
        <Box container spacing={6} ref={sliderRef} className='keen-slider'>
          {props.items.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} className='keen-slider__slide'>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Box>
        {loaded && instanceRef.current && (
          <>
            <Icon
              icon='mdi:chevron-left'
              className={clsx('arrow arrow-left', {
                'arrow-disabled': currentSlide === 0
              })}
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            />

            <Icon
              icon='mdi:chevron-right'
              className={clsx('arrow arrow-right', {
                'arrow-disabled': currentSlide === instanceRef.current.track.details.slides.length - 1
              })}
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            />
          </>
        )}
      </Box>
    </KeenSliderWrapper>
  )
}

export default SwiperSwitch
