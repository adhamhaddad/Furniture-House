// ** Mock Adapter
import mock from 'src/@fake-db/mock'

const data = [
  {
    product_id: 3,
    category: 'Chairs',
    items: [
      {
        product_item_id: 6,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Stoned_Fox.jpg',
        price: '69.69',
        sku: 'RICK&MORTY123',
        color: 'ESPRESSO'
      },
      {
        product_item_id: 7,
        qty_stock: 999,
        image: 'http://0.0.0.0:8000/products/images/WhatsApp_Image_2023-04-27_at_8.44.22_PM_xRu6rkX.jpeg',
        price: '1234.00',
        sku: 'hamdizika',
        color: 'IVORY'
      }
    ],
    slug_name: 'leather-chair',
    name: 'Leather Chair',
    description: 'Stylish leather office chair for your workspace',
    width: '60.00',
    height: '110.00',
    depth: '60.00',
    material: 'Leather',
    tenant: 1
  },
  {
    product_id: 2,
    category: 'Tables',
    items: [
      {
        product_item_id: 1,
        qty_stock: 0,
        image: 'http://0.0.0.0:8000/products/images/WhatsApp_Image_2023-04-27_at_8.44.22_PM.jpeg',
        price: '6969.69',
        sku: 'A7aSKU',
        color: 'MOCHA'
      },
      {
        product_item_id: 2,
        qty_stock: 0,
        image: 'http://0.0.0.0:8000/products/images/WhatsApp_Image_2023-04-27_at_8.44.22_PM_YgX6rrd.jpeg',
        price: '6969.69',
        sku: 'memoSKU',
        color: 'IVORY'
      },
      {
        product_item_id: 3,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/WhatsApp_Image_2023-04-27_at_8.44.22_PM_JScwfWH.jpeg',
        price: '6969.69',
        sku: 'memoFRSKU',
        color: 'ESPRESSO'
      },
      {
        product_item_id: 4,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/WhatsApp_Image_2023-04-27_at_8.44.22_PM_4PVSWT4.jpeg',
        price: '69.69',
        sku: 'RICK&MORTY',
        color: 'ESPRESSO'
      }
    ],
    slug_name: 'wabalabadabdabtest',
    name: 'WabaLabaDabdabTest',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '900.00',
    depth: '100.00',
    material: 'METAL',
    tenant: 1
  },
  {
    product_id: 34,
    category: 'Chairs',
    items: [
      {
        product_item_id: 8,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48.png',
        price: '1.00',
        sku: 'domakhaled',
        color: 'IVORY'
      },
      {
        product_item_id: 9,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48_Dd3N8tF.png',
        price: '1.00',
        sku: 'domCofee',
        color: 'ESPRESSO'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Fantastic Chair',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
    tenant: 1
  },

  {
    product_id: 34,
    category: 'Chairs',
    items: [
      {
        product_item_id: 8,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48.png',
        price: '1.00',
        sku: 'domakhaled',
        color: 'IVORY'
      },
      {
        product_item_id: 9,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48_Dd3N8tF.png',
        price: '1.00',
        sku: 'domCofee',
        color: 'ESPRESSO'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Fantastic Chair',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
    tenant: 1
  },

  {
    product_id: 34,
    category: 'Chairs',
    items: [
      {
        product_item_id: 8,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48.png',
        price: '1.00',
        sku: 'domakhaled',
        color: 'IVORY'
      },
      {
        product_item_id: 9,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48_Dd3N8tF.png',
        price: '1.00',
        sku: 'domCofee',
        color: 'ESPRESSO'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Fantastic Chair',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
    tenant: 1
  },

  {
    product_id: 34,
    category: 'Chairs',
    items: [
      {
        product_item_id: 8,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48.png',
        price: '1.00',
        sku: 'domakhaled',
        color: 'IVORY'
      },
      {
        product_item_id: 9,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48_Dd3N8tF.png',
        price: '1.00',
        sku: 'domCofee',
        color: 'ESPRESSO'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Fantastic Chair',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
    tenant: 1
  },

  {
    product_id: 34,
    category: 'Chairs',
    items: [
      {
        product_item_id: 8,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48.png',
        price: '1.00',
        sku: 'domakhaled',
        color: 'IVORY'
      },
      {
        product_item_id: 9,
        qty_stock: 69,
        image: 'http://0.0.0.0:8000/products/images/Screenshot_from_2024-06-16_21-40-48_Dd3N8tF.png',
        price: '1.00',
        sku: 'domCofee',
        color: 'ESPRESSO'
      }
    ],
    slug_name: 'fantastic-chair',
    name: 'Fantastic Chair',
    description: 'Comfortable rick and morty chair',
    width: '100.00',
    height: '100.00',
    depth: '900.00',
    material: 'METAL',
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
