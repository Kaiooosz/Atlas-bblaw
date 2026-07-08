const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_2PTizaAcSyd5@ep-frosty-king-adhtf32q-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405)
      .json({ error: 'Method not allowed. Use POST.' });
  }

  const { nome, email, assunto, mensagem } = req.body || {};

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes: nome, email, mensagem.' });
  }

  const client = new Client({ connectionString });

  try {
    await client.connect();

    // Auto-create table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS bblaw_contatos (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        assunto VARCHAR(255),
        mensagem TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insert lead
    await client.query(
      'INSERT INTO bblaw_contatos (nome, email, assunto, mensagem) VALUES ($1, $2, $3, $4)',
      [nome, email, assunto, mensagem]
    );

    await client.end();
    return res.status(200).json({ success: true, message: 'Mensagem salva com sucesso.' });
  } catch (err) {
    console.error('Erro no banco de dados:', err);
    try {
      await client.end();
    } catch (_) {}
    return res.status(500).json({ error: 'Erro interno ao salvar mensagem.', details: err.message });
  }
};
