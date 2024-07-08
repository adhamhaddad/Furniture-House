// ** Mock Adapter
import mock from 'src/@fake-db/mock'

enum ProductColors {
  WHITE = 'white',
  ESPRESSO = 'Espresso',
  IVORY = 'ivory'
}

const data = [
  {
    product_id: 3,
    category: 'Chairs',
    items: [
      {
        product_item_id: 6,
        qty_stock: 69,
        image: '/images/products/chair.jpg',
        price: '69.69',
        sku: 'RICK&MORTY123',
        color: '#fed8a6'
      },
      {
        product_item_id: 7,
        qty_stock: 999,
        image: '/images/products/chair.jpg',
        price: '1234.00',
        sku: 'hamdizika',
        color: '#4A0000'
      }
    ],
    slug_name: 'leather-chair',
    name: 'Leather Chair',
    description: 'Stylish leather office chair for your workspace',
    width: '60.00',
    height: '110.00',
    depth: '60.00',
    material: 'Leather',
    model: { url: '/images/models/untitle23d.glb' },
    tenant: 1
  },
  {
    product_id: 34,
    category: 'Chairs',
    items: [
      {
        product_item_id: 8,
        qty_stock: 69,
        image: '/images/products/chair.jpg',
        price: '1.00',
        sku: 'domakhaled',
        color: '#fed8a6'
      },
      {
        product_item_id: 9,
        qty_stock: 69,
        image: '/images/products/chair.jpg',
        price: '1.00',
        sku: 'domCofee',
        color: '#4A0000'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Fantastic Chair',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
    model: { url: '/images/models/untitle23d.glb' },
    tenant: 1
  },
  {
    product_id: 34,
    category: 'Chairs',
    items: [
      {
        product_item_id: 8,
        qty_stock: 69,
        image: '/images/products/chair.jpg',
        price: '1.00',
        sku: 'domakhaled',
        color: '#4A0000'
      },
      {
        product_item_id: 9,
        qty_stock: 69,
        image: '/images/products/chair.jpg',
        price: '1.00',
        sku: 'domCofee',
        color: '#fed8a6'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Fantastic Chair',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
    model: { url: '/images/models/untitle23d.glb' },
    tenant: 1
  },
  {
    product_id: 34,
    category: 'Chairs',
    items: [
      {
        product_item_id: 8,
        qty_stock: 69,
        image: '/images/products/chair.jpg',
        price: '1.00',
        sku: 'domakhaled',
        color: '#4A0000'
      },
      {
        product_item_id: 9,
        qty_stock: 69,
        image: '/images/products/chair.jpg',
        price: '1.00',
        sku: 'domCofee',
        color: '#fed8a6'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Fantastic Chair',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
    model: { url: '/images/models/untitle23d.glb' },
    tenant: 1
  },
  {
    product_id: 34,
    category: 'Chairs',
    items: [
      {
        product_item_id: 8,
        qty_stock: 69,
        image: '/images/products/chair.jpg',
        price: '1.00',
        sku: 'domakhaled',
        color: '#4A0000'
      },
      {
        product_item_id: 9,
        qty_stock: 69,
        image: '/images/products/chair.jpg',
        price: '1.00',
        sku: 'domCofee',
        color: '#fed8a6'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Fantastic Chair',
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
