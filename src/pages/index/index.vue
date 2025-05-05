<template>
  <CustomNavbar></CustomNavbar>
  <NeusoftSwiper :list="bannenrList"></NeusoftSwiper>
</template>

<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/NeusoftHomeBanner'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { NeusoftBannerItem } from '@/types/NeusoftBannerItem'

const bannenrList = ref<NeusoftBannerItem[]>([])
const Neusoft_getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannenrList.value = res.result
}
//页面加载的时候
onLoad(() => {
  Neusoft_getHomeBannerData()
})
</script>

<style scoped lang="scss"></style>
