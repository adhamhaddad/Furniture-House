// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Components
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'
import { IProductVariant } from 'src/types/product-types'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'

interface Props {
  items: IProductVariant[]
  currentVariant: IProductVariant
  onChange: (variant: IProductVariant) => void
}

const SwiperProductImage = (props: Props) => {
  // ** States
  const [loaded, setLoaded] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // ** Hook
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rtl: false,
    slideChanged(slider) {
      const newSlide = slider.track.details.rel
      setCurrentSlide(newSlide)
      props.onChange(props.items[newSlide])
    },
    created() {
      setLoaded(true)
    }
  })

  // ** Effect to handle image change on currentVariant update
  useEffect(() => {
    const matchingIndex = props.items.findIndex(item => item.product_item_id === props.currentVariant.product_item_id)
    if (matchingIndex !== -1 && matchingIndex !== currentSlide) {
      instanceRef.current?.moveToIdx(matchingIndex)
    }
  }, [props.currentVariant, props.items, currentSlide])

  return (
    <KeenSliderWrapper sx={{ width: '100%' }}>
      <Box className='navigation-wrapper' sx={{ width: '100%' }}>
        <Box ref={sliderRef} className='keen-slider' sx={{ width: '100%' }}>
          {props.items.length > 0 &&
            props.items.map((item: IProductVariant) => (
              <Box key={item.product_item_id} className='keen-slider__slide'>
                <img width='100%' height='100%' src={item.image} alt={item.sku} />
              </Box>
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

export default SwiperProductImage
