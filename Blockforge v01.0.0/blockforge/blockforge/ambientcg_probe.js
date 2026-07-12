import fs from 'fs';
import fetch from 'node-fetch';

const urls = [
  'https://ambientcg.com/api/v3/assets?q=iron&limit=1',
  'https://ambientcg.com/api/v3/assets?q=iron&limit=1&include=all',
  'https://ambientcg.com/api/v3/assets?q=iron&limit=1&include=images',
  'https://ambientcg.com/api/v3/assets?q=iron&limit=1&include=thumbnails',
  'https://ambientcg.com/api/v3/assets?q=iron&limit=1&include=files',
  'https://ambientcg.com/api/v3/assets?q=iron&limit=1&include=preview',
];

(async () => {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      console.log('URL:', url);
      console.log('STATUS:', res.status);
      console.log('BODY:', text.slice(0, 2000));
      console.log('---');
    } catch (err) {
      console.error('ERROR', url, err.message);
    }
  }
})();
