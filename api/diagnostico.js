const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_2PTizaAcSyd5@ep-frosty-king-adhtf32q-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const {
    nome,
    email,
    whatsapp,
    empresa,
    tipo,
    perfil,
    objetivo,
    faixa,
    estrutura,
    objetivos_lista,
    exterior,
    operacao_envolve,
    urgencia,
    prazo_aberto,
    notificacao,
    risco,
    scores
  } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'E-mail é obrigatório para registrar o diagnóstico.' });
  }

  const client = new Client({ connectionString });

  try {
    await client.connect();

    // Auto-create table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS bblaw_diagnosticos (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(50),
        empresa VARCHAR(255),
        tipo VARCHAR(255),
        perfil VARCHAR(255),
        objetivo TEXT,
        faixa VARCHAR(255),
        estrutura VARCHAR(255),
        objetivos_lista TEXT,
        exterior VARCHAR(50),
        operacao_envolve TEXT,
        urgencia VARCHAR(255),
        prazo_aberto VARCHAR(50),
        notificacao VARCHAR(50),
        risco TEXT,
        scores JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insert lead
    await client.query(`
      INSERT INTO bblaw_diagnosticos (
        nome, email, whatsapp, empresa, tipo, perfil, objetivo,
        faixa, estrutura, objetivos_lista, exterior, operacao_envolve,
        urgencia, prazo_aberto, notificacao, risco, scores
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
    `, [
      nome || null,
      email,
      whatsapp || null,
      empresa || null,
      tipo || null,
      perfil || null,
      objetivo || null,
      faixa || null,
      estrutura || null,
      Array.isArray(objetivos_lista) ? objetivos_lista.join(', ') : (objetivos_lista || null),
      exterior || null,
      Array.isArray(operacao_envolve) ? operacao_envolve.join(', ') : (operacao_envolve || null),
      urgencia || null,
      prazo_aberto || null,
      notificacao || null,
      risco || null,
      scores ? JSON.stringify(scores) : null
    ]);

    await client.end();
    return res.status(200).json({ success: true, message: 'Diagnóstico salvo com sucesso no banco de dados.' });
  } catch (err) {
    console.error('Erro no banco de dados (diagnóstico):', err);
    try {
      await client.end();
    } catch (_) {}
    return res.status(500).json({ error: 'Erro interno ao salvar diagnóstico.', details: err.message });
  }
};
