import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';

import LogoImg from '../assets/rocketseat.svg';
import { Container } from './Home';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Image src={LogoImg} alt="Teste teste" />
      <h1>Hello World</h1>
      <p>Estrutura de Projeto Next.js + Typescript + Styled-Components</p>
    </Container>
  );
};

export default Home;
