import type { NextPage } from "next";
import { Container } from "@mantine/core";
import styled from "styled-components";
import { MainResume } from "@themes";
import Head from "next/head";
import Image from "next/image";

const A4Container = styled.div`
  min-width: 28cm;
  width: 28cm;
  margin: 0 auto;
`;
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Seraj Vahdati Resume</title>
        <meta name="description" content="Seraj Vahdati Resume" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <A4Container id="resume-container" className="print-this">
        <MainResume />
      </A4Container>
    </>
  );
};

export default Home;
