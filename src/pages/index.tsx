import React from 'react';
import {NextPage} from "next";
import Head from 'next/head';
import LandingLayout from '../layout/landing.layout';
import Container from '../components/styles/paper/container';
import { PageTitle } from '../components/styles/heading/h1';

const HomePage: NextPage = () => {
    return (
        <LandingLayout>
            <Head>
                <title>07vr.com | Landing</title>
                <meta name="description" content="SoftNet.llc is the global industry that is includes the engineers" />
            </Head>
            <Container>

            </Container>
        </LandingLayout>
    );
};

export default HomePage;