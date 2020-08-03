// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import path from 'path';

export default (req, res) => {
  const pdfContent = fs.readFileSync(
    path.resolve('./public/files/pdf-file.pdf')
  );

  res.setHeader('Content-Type', 'application/pdf');
  res.statusCode = 200;
  res.end(pdfContent);
};
