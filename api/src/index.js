const express = require('express');
const cors = require('cors');
const { connectDB, sql } = require('./config/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

console.log('🚀 Iniciando a API...');
console.log(`📊 Banco configurado: ${process.env.DB_NAME}`);
console.log(`🔌 Servidor SQL: ${process.env.DB_SERVER}`);
console.log(`👤 Usuário: ${process.env.DB_USER}`);

// Middleware
app.use(cors());
app.use(express.json());

// Rota para obter dados
app.get('/api/dados', async (req, res) => {
    console.log('📥 Recebida requisição em /api/dados');
    try {
        console.log('🔄 Conectando ao banco de dados...');
        const pool = await connectDB();
        
        console.log('📝 Executando query na tabela VW_Veiculos_AcompanhamentoPainel_Orcamentos...');
        const result = await pool.request()
            .query('SELECT * FROM VW_Veiculos_AcompanhamentoPainel_Orcamentos');
        
        console.log(`✅ Query executada com sucesso! ${result.recordset.length} registros encontrados.`);
        res.json(result.recordset);
    } catch (err) {
        console.error('❌ Erro ao buscar dados:', err);
        res.status(500).json({ error: 'Erro ao buscar dados do banco', details: err.message });
    }
});

// Rota de teste
app.get('/', (req, res) => {
    console.log('📍 Rota principal acessada');
    res.json({ 
        message: 'API está funcionando!',
        banco: process.env.DB_NAME,
        servidor: process.env.DB_SERVER,
        horario: new Date().toLocaleString()
    });
});

app.listen(port, () => {
    console.log(`
    🚀 Servidor rodando!
    📡 Porta: ${port}
    🌐 URLs de acesso:
       Local: http://localhost:${port}
       Rede: http://SEU_IP:${port}
    
    ℹ️ Use 'ipconfig' (Windows) ou 'ip addr' (Linux) para descobrir seu IP
    `);
}); 