// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Components
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'

const SwiperAutoSwitch = () => {
  // ** States
  const [loaded, setLoaded] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // ** Hook
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rtl: false,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      }
    },
    [
      slider => {
        let mouseOver = false
        let timeout: number | ReturnType<typeof setTimeout>
        const clearNextTimeout = () => {
          clearTimeout(timeout as number)
        }
        const nextTimeout = () => {
          clearTimeout(timeout as number)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <KeenSliderWrapper>
      <Box className='navigation-wrapper'>
        <Box ref={ref} className='keen-slider' sx={{ borderRadius: 2 }}>
          <Box className='keen-slider__slide'>
            <img src='/images/banners/banner-7.jpg' alt='swiper 1' style={{ height: '100%' }} />
          </Box>
          <Box className='keen-slider__slide'>
            <img src='/images/banners/banner-8.jpg' alt='swiper 2' style={{ height: '100%' }} />
          </Box>
          <Box className='keen-slider__slide'>
            <img src='/images/banners/banner-9.jpg' alt='swiper 3' style={{ height: '100%' }} />
          </Box>
          <Box className='keen-slider__slide'>
            <img src='/images/banners/banner-10.jpg' alt='swiper 4' style={{ height: '100%' }} />
          </Box>
          <Box className='keen-slider__slide'>
            <img src='/images/banners/banner-11.jpg' alt='swiper 5' style={{ height: '100%' }} />
          </Box>
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

export default SwiperAutoSwitch
