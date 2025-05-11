<template>
  <NeusoftCustomNavbar></NeusoftCustomNavbar>
  <scroll-view class="scroll-view" scroll-y>
    <NeusoftSwiper :list="bannenrList"></NeusoftSwiper>
    <NeusoftCategoryPanel :list="categoryList"></NeusoftCategoryPanel>
    <NeusoftHotPanel :list="hotList"></NeusoftHotPanel>
    <NeusoftGuess></NeusoftGuess>
  </scroll-view>
</template>

<script setup lang="ts">
import NeusoftCustomNavbar from './components/NeusoftCustomNavbar.vue'
import NeusoftCategoryPanel from './components/NeusoftCategoryPanel.vue'
import NeusoftHotPanel from './components/NeusoftHotPanel.vue'
import { getHomeBannerAPI } from '@/services/NeusoftHomeBanner'
import { getCategoryAPI } from '@/services/NeusoftHomeCategory'
import type { NeusoftBannerItem } from '@/types/NeusoftBannerItem'
import type { NeusoftCategoryItem } from '@/types/NeusoftCategoryItem'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getHotAPI } from '@/services/NeusoftHomeHot'
import type { NeusoftHotItem } from '@/types/NeusoftHotItem'

// 1.变量/属性定义
const bannenrList = ref<NeusoftBannerItem[]>([])
const categoryList = ref<NeusoftCategoryItem[]>([])
const hotList = ref<NeusoftHotItem[]>([])

//2.数据加载
const Neusoft_getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannenrList.value = res.result
}
const Neusoft_getHomeCategoryData = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.result
}
const Neusoft_getHomeHotDataw = async () => {
  const res = await getHotAPI()
  hotList.value = res.result
}

//页面加载
onLoad(() => {
  Neusoft_getHomeBannerData()
  Neusoft_getHomeCategoryData()
  Neusoft_getHomeHotDataw()
})
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
