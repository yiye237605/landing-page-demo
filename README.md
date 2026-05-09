# landing-page-demo

企业落地页项目 - Vue 3 + Express + SQL Server + Nginx

## 项目结构

```
landing-page-demo/
├── frontend/          # Vue 3 前端
│   ├── src/
│   │   ├── components/   # 组件
│   │   ├── views/        # 页面
│   │   └── router/       # 路由
│   ├── package.json
│   └── vite.config.js
├── backend/           # Express 后端
│   ├── index.js
│   ├── db.js
│   └── package.json
├── nginx/             # Nginx 配置
├── docs/              # 文档和脚本
└── README.md
```

## 快速开始

### 1. 数据库设置

运行 SQL Server 数据库，执行 `docs/init.sql` 创建表。

### 2. 后端启动

```bash
cd backend
npm install
npm start
```

### 3. 前端启动

```bash
cd frontend
npm install
npm run dev
```

### 4. Nginx 部署

复制 `nginx/nginx.conf` 到 Nginx 配置目录。

## 技术栈

- **前端**: Vue 3 + Vite + TailwindCSS
- **后端**: Express + SQL Server
- **部署**: Nginx