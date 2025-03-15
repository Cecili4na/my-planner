const sql = require('mssql');
require('dotenv').config();

console.log('📝 Carregando configurações do banco de dados...');

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

async function connectDB() {
    console.log(`
    🔌 Tentando conectar ao banco:
    Servidor: ${config.server}
    Banco: ${config.database}
    Usuário: ${config.user}
    `);

    try {
        const pool = await sql.connect(config);
        console.log(`
        ✅ Conexão estabelecida com sucesso!
        📊 Banco: ${config.database}
        ⏰ Hora: ${new Date().toLocaleString()}
        `);
        return pool;
    } catch (err) {
        console.error(`
        ❌ Erro na conexão com o banco:
        Mensagem: ${err.message}
        Código: ${err.code}
        Estado: ${err.state}
        Classe: ${err.class}
        `);
        throw err;
    }
}

module.exports = {
    connectDB,
    sql
}; 