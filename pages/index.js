import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test PDF/XML Downloads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>PDF/XML Download Test</h1>

        <p className={styles.description}>
          This is a test with with separate links to PDF and XML files.
        </p>

        <div className={styles.grid}>
          {' '}
          <a href="/api/file/pdf" className={styles.card}>
            <h3>PDF File</h3>
            <p>
              This is a link to a PDF file without a{' '}
              <code>Content-Disposition: attachment</code> header. Chrome will
              open it using the browser's built-in PDF viewer.
            </p>
          </a>
          <a href="/api/file/xml" className={styles.card}>
            <h3>XML File</h3>
            <p>
              This is a link to a XML response without a{' '}
              <code>Content-Disposition: attachment</code> header. Chrome will
              open it using its built-in XML viewer.
            </p>
          </a>
          <a href="/api/redirect/pdf" className={styles.card}>
            <h3>Redirect to PDF file</h3>
            <p>
              This link will redirect requests to <code>/api/files/pdf</code>.
            </p>
          </a>
          <a href="/api/redirect/xml" className={styles.card}>
            <h3>Redirect to XML file</h3>
            <p>
              This link will redirect requests to <code>/api/files/xml</code>.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
