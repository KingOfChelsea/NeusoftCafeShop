import type { PageResult } from '@/types/global'
import type { NeusoftGuessLikeItem } from '@/types/NeusoftGuessItem'
import type { NeusoftPageParams } from '@/types/NeusoftPageParams'
import { http } from '@/utils/http'

export const getGuessLikeAPI = (data?: NeusoftPageParams) => {
  return http<PageResult<NeusoftGuessLikeItem>>({
    method: 'GET',
    url: '/home/goods/guessLikes',
    data,
  })
}
