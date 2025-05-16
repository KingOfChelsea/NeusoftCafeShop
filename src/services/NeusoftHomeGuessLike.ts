import type { PageResult } from '@/types/global'
import type { NeusoftGuessLikeItem } from '@/types/NeusoftGuessItem'
import { http } from '@/utils/http'

export const getGuessLikeAPI = () => {
  return http<PageResult<NeusoftGuessLikeItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
  })
}
