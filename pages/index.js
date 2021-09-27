import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Text to QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Text to <span className={styles.intro__blue}>QR Code</span> Generator
        </h1>

        <p className={styles.description}>
          Generate a colourful QR code by providing the text data at the url.
        </p>

        <p className={styles.github}>
          Github Repo : <a href="https://github.com/marktennyson/text-to-qr" className={styles.intro__blue}>https://github.com/marktennyson/text-to-qr</a>
        </p>

        <div>
          <h2>How to use this: {' '}</h2>
          <code className={styles.api__specs}>
            1. go for the url : <a href="https://textqr.vercel.app/api/qr" className={styles.intro__blue}>https://textqr.vercel.app/api/qr</a> <br/>
            2. now add the available query params to get the exact QR Code. <br/><br/>
            3. <strong>text:</strong> Add this param to provide the text data into the QR Code. <br/>
            <strong>Example:</strong>
            <a href="https://textqr.vercel.app/api/qr?text=this is text" className={styles.intro__blue}>https://textqr.vercel.app/api/qr?text=this is text</a> <br/>
            4. <strong>size:</strong> To change the size of the qr code.<br/>
            <strong>Example:</strong>
            <a href="https://textqr.vercel.app/api/qr?text=this is text&size=512" className={styles.intro__blue}>https://textqr.vercel.app/api/qr?text=this is text&size=512</a> <br/>
            5. <strong>colour:</strong> To change the foreground colour.<br/>
            <strong>Example:</strong>
            <a href="https://textqr.vercel.app/api/qr?text=this is text&size=512&colour=19549C" className={styles.intro__blue}>https://textqr.vercel.app/api/qr?text=this is text&size=512&colour=19549C</a> <br/>
            6. <strong>bg_colour:</strong> To change the background colour.<br/>
            <strong>Example:</strong>
            <a href="https://textqr.vercel.app/api/qr?text=this is text&size=512&colour=19549C&bg_colour=9C2519" className={styles.intro__blue}>https://textqr.vercel.app/api/qr?text=this is text&size=512&colour=19549C&bg_colour=9C2519</a> <br/>
          </code>
        </div>

      </main>

    </div>
  )
}
