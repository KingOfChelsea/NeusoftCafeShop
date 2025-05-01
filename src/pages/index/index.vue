<template>
  <uni-list>
    <uni-list :border="true">
      <!-- 显示圆形头像 -->
      <uni-list-chat
        :avatar-circle="true"
        title="uni-app"
        avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        note="您收到一条新的消息"
        time="2020-02-02 20:20"
      ></uni-list-chat>
      <!-- 右侧带角标 -->
      <uni-list-chat
        title="uni-app"
        avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        note="您收到一条新的消息"
        time="2020-02-02 20:20"
        badge-text="12"
      ></uni-list-chat>
      <!-- 头像显示圆点 -->
      <uni-list-chat
        title="uni-app"
        avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        note="您收到一条新的消息"
        time="2020-02-02 20:20"
        badge-positon="left"
        badge-text="dot"
      ></uni-list-chat>
      <!-- 头像显示角标 -->
      <uni-list-chat
        title="uni-app"
        avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        note="您收到一条新的消息"
        time="2020-02-02 20:20"
        badge-positon="left"
        badge-text="99"
      ></uni-list-chat>
      <!-- 显示多头像 -->
      <uni-list-chat
        title="uni-app"
        :avatar-list="avatarList"
        note="您收到一条新的消息"
        time="2020-02-02 20:20"
        badge-positon="left"
        badge-text="dot"
      ></uni-list-chat>
      <!-- 自定义右侧内容 -->
      <uni-list-chat
        title="uni-app"
        :avatar-list="avatarList"
        note="您收到一条新的消息"
        time="2020-02-02 20:20"
        badge-positon="left"
        badge-text="dot"
      >
        <view class="chat-custom-right">
          <text class="chat-custom-text">刚刚</text>
          <!-- 需要使用 uni-icons 请自行引入 -->
          <uni-icons type="star-filled" color="#999" size="18"></uni-icons>
        </view>
      </uni-list-chat>
    </uni-list>
  </uni-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const avatarList = ref([
  {
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
  },
  {
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
  },
  {
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
  },
])
</script>

<style lang="scss">
.chat-custom-right {
  flex: 1;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.chat-custom-text {
  font-size: 12px;
  color: #999;
}
</style>
