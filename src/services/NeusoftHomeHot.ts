import type { NeusoftHotItem } from '@/types/NeusoftHotItem'
import { http } from '@/utils/http'

export const getHotAPI = () => {
  return http<NeusoftHotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
