-- =====================================================
-- 企业落地页数据库初始化脚本
-- =====================================================

-- 创建数据库（如果不存在）
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'landing_page_db')
BEGIN
  CREATE DATABASE landing_page_db;
END
GO

USE landing_page_db;
GO

-- =====================================================
-- 联系方式提交表
-- =====================================================
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'dbo.ContactSubmissions') AND type in (N'U'))
BEGIN
  CREATE TABLE dbo.ContactSubmissions (
    id          INT IDENTITY(1,1) PRIMARY KEY,
    name        NVARCHAR(100) NOT NULL,
    phone       NVARCHAR(20) NOT NULL,
    message     NVARCHAR(1000) NOT NULL,
    created_at  DATETIME DEFAULT GETDATE(),
    -- 索引
    INDEX IX_ContactSubmissions_CreatedAt (created_at DESC),
    INDEX IX_ContactSubmissions_Phone (phone)
  );
  
  -- 添加注释
  EXEC sp_addextendedproperty 
    'MS_Description', '联系方式提交记录表', 
    'SCHEMA', 'dbo', 
    'TABLE', 'ContactSubmissions';
END
GO

-- =====================================================
-- 测试数据（可选，注释掉）
-- =====================================================
-- INSERT INTO ContactSubmissions (name, phone, message) VALUES 
-- ('张三', '13800138000', '我想咨询网站开发服务'),
-- ('李四', '13900139000', '需要开发一个电商App');

-- =====================================================
-- 验证
-- =====================================================
SELECT '数据库初始化完成' AS Status;
SELECT COUNT(*) AS TableCount FROM sys.tables WHERE name = 'ContactSubmissions';
GO