NeusoftYiYu 咖啡项目文档

项目简介

NeusoftYiYu 咖啡项目是一款集线上点单、会员管理、智能推荐于一体的咖啡零售解决方案。主要功能包括：

- 咖啡菜单浏览与分类筛选
- 会员系统（积分/优惠券）
- 个性化口味推荐
- 在线支付与订单追踪
- 门店自提/外卖配送选择

当前仓库为项目开发模板，基于 uni-app 实现多端兼容。

技术栈

- 前端框架： (Vue3 + TS + Setup)
- 状态管理：
- 可视化图表：
- 地图组件：

资料说明

📗 接口文档  
（同原链接）

🚀 Demo 体验  
（模拟数据版）

📦 项目源码  
`企业私有仓库，请联系管理员获取权限`

运行指南

```shell
1. 安装依赖（推荐pnpm）
pnpm i --registry=https://registry.npmmirror.com

2. 运行开发环境
npm run dev:mp-weixin  # 微信小程序
npm run dev:h5         # H5网页端

3. 生产构建
npm run build:mp-weixin
```

> 注：需配置`/src/config/env.ts`中的 API 域名

工程结构优化说明

```
├── src
│   ├── features              # 功能模块
│       ├── recommendation     # 智能推荐系统
│       ├── payment            # 支付模块（微信+支付宝）
│       └── delivery           # 配送调度模块
│   ├── services
│       ├── coffee.api.ts      # 咖啡品类接口
│       └── member.api.ts      # 会员中心接口
│   ├── static
│       └── videos/            # 新增咖啡制作视频素材
└── plugins/                  # 新增插件目录
    └── wechat-analytics/      # 微信数据分析插件
```

特色功能说明

1. 温度偏好记忆  
   通过 Pinia 持久化存储用户选择的饮品温度偏好（冰/热/常温）

2. 多规格选择  
   支持杯型、糖度、加料等组合选择，价格实时计算

3. 门店雷达  
   基于腾讯地图 API 的最近门店推荐功能
