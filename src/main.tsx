import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifApp } from './GifApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifApp />
  </StrictMode>,
);
