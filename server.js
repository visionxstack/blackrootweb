import express from 'express';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests from this IP, please try again after 15 minutes.',
  standardHeaders: true, 
  legacyHeaders: false, 
});

app.use(limiter);

const setCacheHeaders = (res, filePath) => {
  if (filePath.endsWith('.html')) {
    
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  } else if (filePath.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff2|woff|ttf)$/)) {
    
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
};

app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: setCacheHeaders
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Rate Limiting and Caching are enabled.`);
});
