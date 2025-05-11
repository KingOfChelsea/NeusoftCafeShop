import type { NeusoftCategoryItem } from '@/types/NeusoftCategoryItem'
import { http } from '@/utils/http'

export const getCategoryAPI = () => {
  return http<NeusoftCategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
