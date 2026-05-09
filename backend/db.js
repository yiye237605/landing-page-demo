import sql from 'mssql'

const config = {
  server: 'DESKTOP-4B7PHPQ',
  database: 'landing_page_db',
  user: 'sa',
  password: '123456',
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