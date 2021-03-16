import Head from 'next/head';

import ActiveIncome from '../container/ActiveIncome';

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />
        <title>Kinvo Premium</title>
      </Head>
      <section>
        <ActiveIncome />
      </section>
    </main>
  );
}
