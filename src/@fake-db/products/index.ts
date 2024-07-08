// ** Mock Adapter
import mock from 'src/@fake-db/mock'

const data = [
  {
    product_id: 1,
    category: 'Chairs',
    items: [
      {
        product_item_id: 1,
        qty_stock: 12,
        image: '/images/products/chair-1.jpg',
        price: '5700.00',
        sku: 'RICK&MORTY123',
        color: '#fed8a6'
      },
      {
        product_item_id: 2,
        qty_stock: 12,
        image: '/images/products/chair-2.jpg',
        price: '5750.00',
        sku: 'RICK&MORTY123',
        color: '#bfcfff'
      },
      {
        product_item_id: 3,
        qty_stock: 10,
        image: '/images/products/chair-3.jpg',
        price: '5800.00',
        sku: 'RICK&MORTY123',
        color: '#808080'
      }
    ],
    slug_name: 'leather-chair',
    name: 'Beech Wood and Linen Arm Chair',
    description: 'Stylish leather office chair for your workspace',
    width: '60.00',
    height: '110.00',
    depth: '60.00',
    material: 'Leather',
    model: { url: '/images/models/untitle23d.glb' },
    tenant: 1
  },
  {
    product_id: 2,
    category: 'Chairs',
    items: [
      {
        product_item_id: 4,
        qty_stock: 69,
        image: '/images/products/chair-arm-1.jpg',
        price: '16000.00',
        sku: 'domakhaled',
        color: '#fdfdfd'
      },
      {
        product_item_id: 5,
        qty_stock: 69,
        image: '/images/products/chair-arm-2.jpg',
        price: '16000.00',
        sku: 'domCofee',
        color: '#fed8a6'
      },
      {
        product_item_id: 6,
        qty_stock: 69,
        image: '/images/products/chair-arm-3.jpg',
        price: '16000.00',
        sku: 'domCofee',
        color: '#808080'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Red Beech Wood and Linen 2 Chairs & Pouf - 3 Pieces',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
    model: { url: '/images/models/untitle23d.glb' },
    tenant: 1
  },
  {
    product_id: 3,
    category: 'Chairs',
    items: [
      {
        product_item_id: 7,
        qty_stock: 10,
        image: '/images/products/chair-wood-1.jpg',
        price: '10799.00',
        sku: 'domakhaled',
        color: '#808080'
      },
      {
        product_item_id: 8,
        qty_stock: 12,
        image: '/images/products/chair-wood-2.jpg',
        price: '10799.00',
        sku: 'domCofee',
        color: '#fed8a6'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Linen and Beech Wood Arm Chair and Pouf 2 pieces',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
    model: { url: '/images/models/untitle23d.glb' },
    tenant: 1
  }
]

// POST: Add new user
mock.onPost('/api/products').reply(config => {
  // Get event from post data
  const product = JSON.parse(config.data).data
  console.log(product)
  // const { length } = data.product
  // let lastIndex = 0
  // if (length) {
  //   lastIndex = data.users[length - 1].id
  // }
  // user.id = lastIndex + 1

  // data.users.unshift({ ...user, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { product }]
})

// GET: DATA
mock.onGet('/api/products').reply(() => {
  return [
    200,
    {
      allData: data,
      data: data,
      params: 'test',
      total: data.length
    }
  ]
})
