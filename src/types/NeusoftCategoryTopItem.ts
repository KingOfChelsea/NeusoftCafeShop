import type { GoodsItem } from './global'

export type NeusoftCategoryTopItem = {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: CategoryChildItem[]
}

export type CategoryChildItem = {
  /** 商品集合[ 商品项 ] */
  goods: GoodsItem[]
  /** 二级分类id */
  id: string
  /** 二级分类名称 */
  name: string
  /** 二级分类图片 */
  picture: string
}
