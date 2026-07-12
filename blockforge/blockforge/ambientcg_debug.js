import fs from 'fs';
import https from 'https';

const url = 'https://ambientcg.com/asset/Metal055A';
https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('ambientcg_debug.html', data);
    console.log('wrote ambientcg_debug.html', data.slice(0, 2000));
  });
}).on('error', (err) => {
  console.error('err', err.message);
});
