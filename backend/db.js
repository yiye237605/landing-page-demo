import sql from 'mssql'

const config = {
  server: process.env.DB_SERVER || 'localhost',
  database: process.env.DB_NAME || 'landing_page_db',
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || '',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
}

let pool = null

export async function getConnection() {
  if (!pool) {
    pool = await sql.connect(config)
  }
  return pool
}

export async function closeConnection() {
  if (pool) {
    await pool.close()
    pool = null
  }
}
