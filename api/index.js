import('../dist/krissan-portfolio-site/server/server.mjs')
  .then(module => module.app())
  .catch(err => {
    console.error('Failed to import server:', err);
  });

export default async (req, res) => {
  try {
    const { app } = await import('../dist/krissan-portfolio-site/server/server.mjs');
    return app()(req, res);
  } catch (error) {
    res.status(500).send('Server error');
    console.error('Error loading server:', error);
  }
};
