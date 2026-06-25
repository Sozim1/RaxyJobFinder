// Vercel Serverless Function — expõe API_BASE para o front-end
// sem nunca revelar a URL no código-fonte do HTML.
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=300'); // 5 min cache
  res.json({
    apiBase: process.env.API_BASE || 'http://localhost:8001',
  });
};
