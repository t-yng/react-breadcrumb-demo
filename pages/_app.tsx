import React from 'react';
import { BreadcrumbProvider } from '../src/components/Breadcrumb';
import Layout from '../src/components/Layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <BreadcrumbProvider>
                <Component {...pageProps} />
            </BreadcrumbProvider>
        </Layout>
    )
}

export default MyApp;