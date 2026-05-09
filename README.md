# Vue3 全栈企业落地页解决方案

> Full-Stack Enterprise Landing Page System — Vue3 + Express + SQL Server

[![Vue.js](https://img.shields.io/badge/Vue3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?style=flat-square&logo=microsoft-sql-server&logoColor=white)](https://www.microsoft.com/en-us/sql-server)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)](https://nginx.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)]()

---

## 🎯 项目概述

为小型企业和初创公司设计的一套**可复用全栈落地页模板**。覆盖从产品展示、用户交互到数据持久化的完整链路，让非技术背景的运营人员也能独立维护。

核心技术栈：**Vue 3 + Vite + TailwindCSS** 前端，**Express.js + SQL Server** 后端，**Nginx** 前后端分离部署。

---

## 🏗️ 系统架构

```
                          ┌─────────────────┐
                          │   用户浏览器     │
                          └────────┬────────┘
                                   │ HTTPS
                          ┌────────▼────────┐
                          │   Nginx         │
                          │   静态资源服务   │
                          │   反向代理       │
                          └────────┬────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    │              │              │
           ┌────────▼────────┐  ┌───▼────────┐  ┌─▼────────┐
           │   Vue3 SPA     │  │  Express   │  │ SQL      │
           │   (Vite Dev)   │  │  REST API   │  │ Server   │
           │   Port: 5173   │  │  Port: 3000 │  │ Port:1433│
           └─────────────────┘  └────────────┘  └──────────┘
```

---

## 📦 项目结构

```
landing-page-demo/
├── frontend/                      # Vue3 前端应用
│   ├── src/
│   │   ├── components/            # 可复用组件
│   │   │   ├── NavBar.vue         # 导航栏
│   │   │   ├── Hero.vue           # 首屏区域
│   │   │   ├── About.vue          # 关于我们
│   │   │   ├── Services.vue       # 服务项目
│   │   │   ├── Cases.vue          # 客户案例
│   │   │   ├── Testimonials.vue   # 用户评价
│   │   │   ├── ContactForm.vue    # 联系方式表单
│   │   │   └── Footer.vue         # 页脚
│   │   ├── views/                 # 页面视图
│   │   │   ├── Home.vue           # 首页
│   │   │   └── Contact.vue        # 联系页
│   │   ├── router/               # Vue Router 配置
│   │   ├── App.vue               # 根组件
│   │   ├── main.js               # 入口文件
│   │   └── style.css             # 全局样式
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/                       # Express 后端服务
│   ├── index.js                   # 服务入口
│   ├── db.js                     # SQL Server 连接池
│   └── package.json
│
├── nginx/                         # Nginx 部署配置
│   └── nginx.conf
│
├── docs/                          # 项目文档
│   └── init.sql                   # 数据库建表脚本
│
├── SPEC.md                        # 需求规格说明书
├── DESIGN.md                     # 设计规范文档
└── README.md
```

---

## 🔌 API 接口

### POST /api/contact

提交联系方式表单。

**请求体：**
```json
{
  "name": "张三",
  "phone": "13800138000",
  "message": "我想咨询贵公司的服务"
}
```

**响应：**
```json
{
  "success": true,
  "message": "提交成功"
}
```

---

## 🗄️ 数据库设计

### ContactSubmissions 表

| 字段 | 类型 | 说明 |
|------|------|------|
| id | INT | 主键，自增 |
| name | NVARCHAR(100) | 姓名 |
| phone | NVARCHAR(20) | 电话 |
| message | NVARCHAR(500) | 留言 |
| created_at | DATETIME | 创建时间 |

---

## 🎨 设计体系

基于 **Vercel Design Language**，简洁现代，专业感强。

| 角色 | 色值 | 说明 |
|------|------|------|
| 主黑 | `#171717` | 标题、导航文字 |
| 纯白 | `#ffffff` | 背景、卡片 |
| 辅助灰 | `#4d4d4d` | 正文、描述文字 |
| 浅灰边框 | `#ebebeb` | 分隔线、次要边框 |
| 主色调 | `#0072f5` | 链接、强调 |
| 成功色 | `#10b981` | 成功提示 |

---

## ⚡ 技术亮点

### 前端工程化
- **Vue 3 Composition API**：更好的逻辑复用与类型推断
- **Vite**：毫秒级 HMR，丝滑开发体验
- **TailwindCSS**：原子化 CSS，快速构建响应式界面
- **Vue Router**：SPA 路由，支持懒加载

### 后端架构
- **Express.js**：轻量、灵活的 Node.js Web 框架
- **SQL Server**：企业级关系型数据库，稳定可靠
- **连接池管理**：避免频繁建连，提升并发性能
- **参数化查询**：防止 SQL 注入攻击

### 部署架构
- **前后端分离**：Nginx 反向代理，静态资源独立服务
- **生产构建优化**：Vite 打包压缩，CDN 友好
- **CORS 配置**：生产环境安全跨域策略

---

## 🚀 快速开始

### 前置依赖

- Node.js >= 16
- SQL Server 实例
- Nginx

### 启动前端

```bash
cd frontend
npm install
npm run dev
```

### 启动后端

```bash
cd backend
npm install
node index.js
```

### 数据库初始化

```bash
# 在 SQL Server 中执行
sqlcmd -S localhost -U sa -P YOUR_PASSWORD -i docs/init.sql
```

### Nginx 部署

```bash
sudo cp nginx/nginx.conf /etc/nginx/sites-available/landing-page
sudo nginx -t && sudo nginx -s reload
```

---

## 📐 环境变量

创建 `frontend/.env`：

```env
VITE_API_BASE=http://localhost:3000/api
```

创建 `backend/.env`：

```env
DB_SERVER=localhost
DB_PORT=1433
DB_USER=sa
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=landing_page
PORT=3000
```

---

## 👤 作者

**yiye** · [GitHub](https://github.com/yiye237605)

---

## 📄 License

MIT License · 欢迎 Star ⭐
