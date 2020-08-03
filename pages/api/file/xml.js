// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import path from 'path';

export default (req, res) => {
  const xml = fs.readFileSync(path.resolve('./public/files/delivery.xml'));

  res.setHeader('Content-Type', 'text/xml');
  res.statusCode = 200;
  res.end(xml);
};
