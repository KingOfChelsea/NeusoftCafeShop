<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" @change="NeusoftOnchange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { NeusoftBannerItem } from '@/types/NeusoftBannerItem'
import { ref } from 'vue'

const NeusoftProps = defineProps<{
  list: NeusoftBannerItem[]
}>()
console.log(NeusoftProps)

const activeIndex = ref(0)
const NeusoftOnchange: UniHelper.SwiperOnChange = (ev) => {
  // activeIndex.value = ev.detail?.current ?? 0
  // ! 可以使用非空断言来完善 主观上排除
  activeIndex.value = ev.detail!.current
}
</script>

<style lang="scss">
/* 轮播图 */
.carousel {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
