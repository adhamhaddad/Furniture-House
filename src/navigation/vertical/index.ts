// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: 'mdi:home',
      path: '/home',
      action: 'read',
      subject: 'home-page'
    },
    {
      title: 'Cart',
      icon: 'mdi:cart',
      path: '/cart',
      action: 'read',
      subject: 'cart-page'
    },
    {
      title: 'My Products',
      icon: 'mdi:shopping',
      path: '/products',
      action: 'read',
      subject: 'products-page'
    }
  ]
}

export default navigation
