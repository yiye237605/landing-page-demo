# DESIGN.md - 企业落地页设计规范

## 1. Visual Theme & Atmosphere

干净、现代、专业感。大量白色空间，每个元素都有其存在的理由。

- 背景以白色 `#ffffff` 为主
- 主文字 `#171717`（接近纯黑但不刺眼）
- 辅助文字 `#4d4d4d`
- 边框使用 shadow-border 技术（不用传统 border）

## 2. Color Palette & Roles

| 角色 | 色值 | 说明 |
|------|------|------|
| 主黑 | `#171717` | 标题、导航文字 |
| 纯白 | `#ffffff` | 背景、卡片 |
| 辅助灰 | `#4d4d4d` | 正文、描述文字 |
| 浅灰边框 | `#ebebeb` | 分隔线、次要边框 |
| 主色调 | `#0072f5` | 链接、强调 |
| 成功色 | `#10b981` | 成功提示 |

## 3. Typography Rules

- 主字体：系统字体栈 `-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`
- 标题：24-48px，font-weight: 600
- 正文：16-18px，font-weight: 400
- 按钮文字：14px，font-weight: 500

## 4. Component Stylings

### 按钮（Button）
- 背景：`#171717`（深色按钮）
- 文字：`#ffffff`
- 内边距：8px 16px
- 圆角：6px
- hover：背景变 `#4d4d4d`

### 卡片（Card）
- 背景：`#ffffff`
- 边框：shadow-border（`0px 0px 0px 1px rgba(0,0,0,0.08)`）
- 圆角：8px
- 内边距：24px
- hover：轻微阴影加强

### 输入框（Input）
- 背景：`#ffffff`
- 边框：同 shadow-border
- 圆角：6px
- 内边距：12px 16px
- focus：2px solid #0072f5 outline

## 5. Layout Principles

- 最大宽度：1200px
- 水平内边距：24px（移动端 16px）
- 区块间距：80-120px（大幅留白）
- 栅格：12列系统

## 6. 页面区块

### NavBar
- 高度：64px
- 固定顶部
- Logo 左侧，菜单右侧

### Hero
- 高度：80vh（最小）
- 内容居中
- 主标题 + 副标题 + CTA 按钮

### About
- 图片 + 文字左右布局
- 或全宽文字区块

### Services
- 3列卡片布局
- 图标 + 标题 + 描述

### Contact Form
- 姓名、电话、留言三个字段
- 提交按钮

### Footer
- 版权信息居中
- 上下分隔线