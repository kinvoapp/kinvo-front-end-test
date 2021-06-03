import Layout from '../../components/Layout';
import { strings } from '../../utils';
import styles from "../styles/Home.module.css";

import Head from 'next/head';

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>{strings('pt-BR', 'homeTitle')}</title>
      </Head>
      <div>asdasdasdasdasdasd</div>
      <h1>{'Ola scar'}</h1>
    </Layout>
  );
}
