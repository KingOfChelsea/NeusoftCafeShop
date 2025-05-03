<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'
const memberStore = useMemberStore()

const btnQueryDate = async () => {
  const res = await http<string[]>({
    method: 'GET',
    url: '/member/profile',
  })
  console.log('请求成功:', res.result)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '9KuoC41dGhjHdZgBdcepKVAIydCUJX0FU1zpdsuEP63p2R6z4IPR7FcjSbBYh1sJ',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="btnQueryDate" size="default" type="warn">获取Banner数据</button>
  </view>
</template>

<style lang="scss">
//
</style>
