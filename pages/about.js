import Head from 'next/head'
import Headshot from '../public/headshot.png'
import Image from 'next/image'
import Layout from '../components/Layout'

import styles from '../styles/about.module.css'
import utilStyles from '../styles/utils.module.css'

const AboutPage = () => (
  <Layout>
    <Head>
      <title>About Kylie Stewart | kyliestewart.tech</title>
    </Head>
    <h1 className={`${utilStyles.centerText} ${utilStyles.headingXl}`}>
      More about Kylie Stewart
    </h1>
    <br />
    <div className={styles.aboutBlock}>
      <Image
        src={Headshot}
        className={utilStyles.roundImage}
        height={250}
        width={250}
        layout="intrinsic"
      />
      <div
        className={`${utilStyles.centerText} ${utilStyles.vertical} ${styles.aboutBlockText}`}
      >
        <p>
          Kylie Stewart is a software engineer and technical speaker with
          experience across the web stack. Her expertise lies primarily in API
          design and the implementation of a number of Javascript frameworks.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
