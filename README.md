# TechFlow 企业落地页

> 企业数字化服务官网 · Vue3 + Express + SQL Server 全栈落地页模板

[![Vue.js](https://img.shields.io/badge/Vue3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?style=flat-square&logo=microsoft-sql-server&logoColor=white)](https://www.microsoft.com/en-us/sql-server)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)](https://nginx.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)]()

---

## 项目简介

**TechFlow** 是一套面向企业数字化服务公司的官网落地页，包含：

- 首页：Hero 首屏 / About 我们 / Services 服务 / Cases 案例 / Testimonials 客户评价 / ContactForm 联系表单
- 联系页：独立的联系页面（`/contact`），全功能表单，支持公司名称选填
- 品牌：TechFlow，400-888-8888，hello@techflow.com

支持联系表单提交 → 后端 API → SQL Server 持久化。数据格式：姓名 + 电话 + 公司（选填）+ 留言。

---

## 技术栈

| 层 | 技术 | 说明 |
|---|---|---|
| 前端框架 | Vue 3 | 组合式 API，单文件组件 |
| 构建工具 | Vite 5 | 毫秒级热更新 |
| CSS 框架 | Tailwind CSS 3 | 原子化 CSS，自定义设计系统 |
| 路由 | Vue Router 4 | Hash 模式 SPA 路由 |
| 后端框架 | Express 4 | REST API |
| 数据库 | SQL Server | 企业级关系数据库 |
| 代理 | Nginx | 静态资源服务 + API 反向代理 |

---

## 系统架构

```
┌─────────────────────────────────────────────────────┐
│                     用户浏览器                        │
│           http://localhost (Nginx 80)               │
└──────────────────────┬──────────────────────────────┘
                       │
           ┌───────────┴───────────┐
           │       Nginx           │
           │  静态资源 / API 代理   │
           └───────────┬───────────┘
                       │
          ┌────────────┴────────────┐
          │                         │
   ┌──────▼──────┐          ┌──────▼──────┐
   │   Vue3 SPA  │          │   Express    │
   │  Vite :3000 │          │   :3002      │
   │  (前端)      │          │  (后端 API)  │
   └─────────────┘          └──────┬──────┘
                                    │
                             ┌──────▼──────┐
                             │  SQL Server │
                             │   :1433     │
                             └─────────────┘
```

> 开发模式下 Vite :3000 会把 `/api` 请求代理到 `localhost:3002`。
> 生产模式下 Nginx 统一接收请求，前端静态资源本地服务，API 反向代理到 Express。

---

## 目录结构

```
landing-page-demo/
├── frontend/                     # Vue3 前端
│   ├── src/
│   │   ├── components/           # UI 组件
│   │   │   ├── NavBar.vue        # 导航栏（滚动变色，移动端 hamburger 菜单）
│   │   │   ├── Hero.vue          # 首屏（数据统计 200+/98%，渐变装饰，skeleton 模拟界面）
│   │   │   ├── About.vue         # 关于我们（8 年经验，50+ 专家，4 项优势卡片）
│   │   │   ├── Services.vue      # 服务项目（4 项服务，浅绿数据统计区块）
│   │   │   ├── Cases.vue         # 客户案例（3 案例卡片，含行业标签和效果数据）
│   │   │   ├── Testimonials.vue  # 客户评价（3 条真实评价 + 6 个合作品牌）
│   │   │   ├── ContactForm.vue   # 联系表单（内嵌在首页）
│   │   │   ├── Footer.vue        # 页脚（4 列布局，社交图标）
│   │   │   └── *.vue
│   │   ├── views/
│   │   │   ├── Home.vue          # 首页（组合所有 sections）
│   │   │   └── Contact.vue       # 联系页（全功能独立表单页）
│   │   ├── router/
│   │   │   └── index.js          # Hash 路由，含兜底重定向
│   │   ├── App.vue               # 根组件（NavBar + router-view + Footer）
│   │   ├── main.js               # 入口
│   │   └── style.css             # Tailwind 入口 + 全局 CSS 组件
│   ├── index.html                # 入口 HTML（lang=zh-CN）
│   ├── vite.config.js            # Vite 配置，API 代理到 :3002
│   ├── tailwind.config.js       # 自定义设计系统颜色
│   ├── postcss.config.js
│   └── package.json
│
├── backend/                      # Express REST API
│   ├── index.js                  # 入口（健康检查 / 提交联系 / 查询记录）
│   ├── db.js                     # MSSQL 连接池（env var 配置）
│   ├── package.json
│   └── (node_modules/)           # 不提交
│
├── docs/
│   └── init.sql                  # SQL Server 建库建表脚本
│
├── nginx/
│   └── nginx.conf                # Nginx 部署配置（API 代理 + 静态资源）
│
└── README.md
```

---

## 页面与路由

| 路径 | 组件 | 说明 |
|---|---|---|
| `/` | `Home.vue` | 首页（Hero + About + Services + Cases + Testimonials + ContactForm） |
| `/contact` | `Contact.vue` | 独立联系页（与首页表单共用 `ContactForm` 逻辑） |
| `/*`（未匹配） | → redirect `/` | 兜底路由，防止 404 |

所有 section 通过 `id` anchor 实现单页内跳转（`#services` / `#cases` / `#about`）。

---

## API 接口

### `GET /api/health`

健康检查。

```json
{ "status": "ok", "timestamp": "2026-05-09T12:00:00.000Z" }
```

---

### `POST /api/contact`

提交联系表单。

**请求：**

```json
{
  "name": "张三",
  "phone": "13800138000",
  "message": "想咨询网站开发服务"
}
```

> `company` 字段选填，会拼接到 `message` 中提交。

**响应（成功）：**

```json
{
  "success": true,
  "message": "提交成功！我们会尽快与您联系。"
}
```

**响应（参数缺失）：**

```json
{ "success": false, "message": "姓名、电话、留言为必填项" }
```

**响应（手机号格式错误）：**

```json
{ "success": false, "message": "请输入有效的手机号码" }
```

**响应（服务器错误）：**

```json
{ "success": false, "message": "服务器错误，请稍后重试或电话联系我们。" }
```

---

### `GET /api/contacts`

查询所有提交记录（管理后台用）。

**响应：**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "张三",
      "phone": "13800138000",
      "message": "想咨询网站开发服务",
      "created_at": "2026-05-09T12:00:00.000Z"
    }
  ]
}
```

---

## 数据库设计

### `ContactSubmissions` 表

```sql
CREATE TABLE dbo.ContactSubmissions (
  id         INT IDENTITY(1,1) PRIMARY KEY,
  name       NVARCHAR(100) NOT NULL,
  phone      NVARCHAR(20)  NOT NULL,
  message    NVARCHAR(1000) NOT NULL,
  created_at DATETIME DEFAULT GETDATE()
);
```

索引：`IX_ContactSubmissions_CreatedAt`（时间倒序），`IX_ContactSubmissions_Phone`（手机号查询）。

---

## 设计系统

### 色彩

| 角色 | 色值 | 用途 |
|---|---|---|
| `ink` | `#1a1a1a` | 标题、主文字 |
| `primary` | `#5645d4` | 主题色、渐变起点 |
| `surface-soft` | `#fafafa` | 卡片背景 |
| `hairline` | `#e6e6e6` | 边框、分割线 |
| `block-lilac/lavender/mint/coral/sky` | — | 服务/案例/数据区块的彩色装饰背景 |

### 字体

`Inter`（正文）+ `JetBrains Mono`（Caption/Eyebrow）。

### 组件类

`.btn-primary` / `.btn-secondary` / `.btn-purple` / `.card` / `.card-surface` / `.input-field` / `.badge` — 定义在 `style.css` `@layer components`，可直接在 HTML 中使用。

---

## 环境变量

### 后端 `backend/.env`

```env
DB_SERVER=localhost
DB_NAME=landing_page_db
DB_USER=sa
DB_PASSWORD=your_password
PORT=3002
```

### 前端（无需 `.env`，Vite 已配置代理）

开发模式 Vite 代理：`/api` → `http://localhost:3002`。

---

## 快速开始

### 1. 初始化数据库

```sql
-- 在 SQL Server Management Studio 或 sqlcmd 中执行
sqlcmd -S localhost -U sa -P YOUR_PASSWORD -i docs/init.sql
```

### 2. 启动后端

```bash
cd backend
npm install
cp .env.example .env   # 填写 DB_SERVER / DB_PASSWORD 等
npm run dev            # node --watch index.js，修改文件自动重启
```

确认输出：
```
✅ Backend server running on http://localhost:3002
📋 API Endpoints:
   GET  /api/health    - 健康检查
   POST /api/contact    - 提交联系表单
   GET  /api/contacts   - 获取所有提交记录
```

### 3. 启动前端

```bash
cd frontend
npm install
npm run dev
```

访问 `http://localhost:3000`（Vite Dev Server，API 请求自动代理到 :3002）。

### 4. 生产构建

```bash
cd frontend
npm run build        # 产出 dist/ 目录
```

### 5. Nginx 部署

```bash
# 修改 nginx/nginx.conf 中的路径后
sudo cp nginx/nginx.conf /etc/nginx/sites-available/techflow
sudo nginx -t && sudo nginx -s reload
```

> 注意：`nginx.conf` 中的静态资源路径需改为实际构建产物目录。

---

## 主要功能

| 功能 | 说明 |
|---|---|
| 品牌展示 | 首屏大标题、数据统计（200+ 合作企业 / 98% 满意度） |
| 服务介绍 | 4 项核心服务（网站/移动/系统集成/DevOps），含技术标签 |
| 案例展示 | 3 个行业案例，含效果数据（+40% 效率 / +200% 营收） |
| 客户评价 | 3 条评价 + 6 个合作品牌 |
| 表单提交 | 姓名 + 电话（必填）+ 公司（选填）+ 留言 → SQL Server |
| 移动端适配 | Hamburger 菜单、响应式栅格、Touch 友好 |
| 锚点导航 | NavBar 链接滚动到对应 section，平滑滚动 |
| 空路由兜底 | 所有未知路径 redirect 到首页 |

---

## 作者

**yiye** · [GitHub](https://github.com/Yiye237605/landing-page-demo)

---

## License

MIT · 欢迎 Star ⭐
