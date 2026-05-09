# 企业落地页 Demo 项目规格说明书

## 1. 项目概述

- **项目名称**：landing-page-demo
- **项目类型**：企业官网落地页（展示型 + 表单）
- **核心功能**：企业介绍、服务展示、联系方式表单
- **目标用户**：有官网需求的小型企业/初创公司

## 2. 技术栈

| 模块 | 技术 |
|------|------|
| 前端框架 | Vue 3 + Vite |
| UI 样式 | TailwindCSS |
| 后端 | Express.js |
| 数据库 | SQL Server |
| 部署 | Nginx |

## 3. 页面结构

### 路由设计
- `/` - 首页（落地页主体）
- `/contact` - 联系方式页

### 页面区块（首页）
1. **导航栏**（NavBar）- Logo + 菜单 + CTA按钮
2. **Hero区域** - 主标题 + 副标题 + CTA
3. **关于我们**（About）- 公司介绍
4. **服务项目**（Services）- 3-4个服务卡片
5. **联系方式**（Contact）- 表单（姓名/电话/留言）
6. **页脚**（Footer）- 版权信息

## 4. 后端接口

### POST /api/contact
提交联系方式表单

**请求体**：
```json
{
  "name": "string",
  "phone": "string",
  "message": "string"
}
```

**响应**：
```json
{
  "success": true,
  "message": "提交成功"
}
```

## 5. 数据库设计

### 表：ContactSubmissions
| 字段 | 类型 | 说明 |
|------|------|------|
| id | INT | 主键，自增 |
| name | NVARCHAR(100) | 姓名 |
| phone | NVARCHAR(20) | 电话 |
| message | NVARCHAR(500) | 留言 |
| created_at | DATETIME | 创建时间 |

## 6. 设计风格

- 基于 Vercel 设计风格
- 颜色：#171717（主黑）、#ffffff（白）、#4d4d4d（灰文字）
- 字体：系统字体栈
- 边框：shadow-border 技术
- 间距：8px 基准

## 7. 交付物

1. 完整 Vue 3 前端项目
2. Express 后端 + SQL Server 集成
3. Nginx 部署配置
4. 完整项目文档
5. 数据库建表脚本