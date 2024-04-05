import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// Determine base path based on deployment environment
const base = process.env.NODE_ENV === 'production' ? '/<REPO>/' : '/';

export default defineConfig({
  base: base,
  plugins: [react()],
});
