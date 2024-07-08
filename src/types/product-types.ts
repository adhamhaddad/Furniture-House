export interface IProduct {
  product_id: number
  category: string
  items: IProductVariant[]
  slug_name: string
  name: string
  description: string
  width: string
  height: string
  depth: string
  material: string
  model: IProductModel
  tenant: number
}

export interface IProductVariant {
  product_item_id: number
  qty_stock: number
  image: string
  price: string
  sku: string
  color: string
}

export interface IProductModel {
  url: string
}
