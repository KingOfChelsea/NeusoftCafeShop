import type { NeusoftGoodsResult } from '@/types/NeusoftGoods'
import { http } from '@/utils/http'
/**
 *商品详情 规格集合一定要和skus集合下的specs 顺序保持一致
 * @returns
 *
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<NeusoftGoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
