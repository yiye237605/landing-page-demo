import sql from 'mssql'
import express from 'express'
import cors from 'cors'
import { getConnection } from './db.js'

const app = express()
const PORT = process.env.PORT || 3002

app.use(cors())
app.use(express.json())

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 提交联系方式
app.post('/api/contact', async (req, res) => {
  const { name, phone, message } = req.body

  if (!name || !phone || !message) {
    return res.status(400).json({ 
      success: false, 
      message: '姓名、电话、留言为必填项' 
    })
  }

  // 手机号格式校验
  const phoneRegex = /^1[3-9]\d{9}$/
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ 
      success: false, 
      message: '请输入有效的手机号码' 
    })
  }

  try {
    const pool = await getConnection()
    const result = await pool.request()
      .input('name', sql.NVarChar(100), name)
      .input('phone', sql.NVarChar(20), phone)
      .input('message', sql.NVarChar(1000), message)
      .query(`
        INSERT INTO ContactSubmissions (name, phone, message, created_at)
        VALUES (@name, @phone, @message, GETDATE())
      `)
    
    res.json({ 
      success: true, 
      message: '提交成功！我们会尽快与您联系。' 
    })
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ 
      success: false, 
      message: '服务器错误，请稍后重试或电话联系我们。' 
    })
  }
})

// 获取所有提交记录（管理后台用）
app.get('/api/contacts', async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request()
      .query('SELECT * FROM ContactSubmissions ORDER BY created_at DESC')
    
    res.json({ 
      success: true, 
      data: result.recordset 
    })
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ 
      success: false, 
      message: '服务器错误' 
    })
  }
})

app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`)
  console.log(`📋 API Endpoints:`)
  console.log(`   GET  /api/health    - 健康检查`)
  console.log(`   POST /api/contact    - 提交联系表单`)
  console.log(`   GET  /api/contacts   - 获取所有提交记录`)
})
