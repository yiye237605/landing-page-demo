# Claude Code 开发任务

## 项目信息
- 项目路径：D:\OpenClawData\dmoutput\landing-page-demo
- 技术栈：Vue 3 + Vite + TailwindCSS + Express + SQL Server + Nginx
- 设计规范：见 DESIGN.md
- 规格说明：见 SPEC.md

## 开发任务

### 任务1：创建 Vue 3 前端项目

在 `frontend/` 目录下创建 Vue 3 项目：

```
frontend/
├── package.json          # Vue 3 + Vite + TailwindCSS
├── vite.config.js
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.js
    ├── App.vue
    ├── router/index.js
    ├── assets/
    ├── components/
    │   ├── NavBar.vue
    │   ├── Hero.vue
    │   ├── About.vue
    │   ├── Services.vue
    │   ├── ContactForm.vue
    │   └── Footer.vue
    └── views/
        ├── Home.vue
        └── Contact.vue
```

### 任务2：创建 Express 后端

在 `backend/` 目录下：

```
backend/
├── package.json
├── index.js           # Express 服务
├── db.js              # SQL Server 连接
└── routes/
    └── contact.js     # 联系方式接口
```

### 任务3：创建 Nginx 配置

在 `nginx/` 目录下：
- `nginx.conf` - Nginx 配置文件

### 任务4：创建数据库脚本

在 `docs/` 目录下：
- `init.sql` - 建表脚本

## 重要要求

1. 使用 npm 创建项目，不要用 yarn 或 pnpm
2. 前端所有组件使用 TailwindCSS
3. 保持设计风格一致性（见 DESIGN.md）
4. 完成后输出完整的项目结构和关键文件内容
5. 所有代码必须能正常运行

## 执行

请开始创建项目，完成后汇报结果。