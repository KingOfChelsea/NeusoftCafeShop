import type { NeusoftCategoryTopItem } from '@/types/NeusoftCategoryTopItem'
import { http } from '@/utils/http'
/**
 *首页-广告区域-小程序 [Add By Zane Xu 2025-5-5]
 * @param distributionSite 如果不传参数默认值为1 广告区域展示位置 1 为首页（默认值） 2 为商品分类页
 * @returns
 */
export const getCategoryTopAPI = () => {
  return http<NeusoftCategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
