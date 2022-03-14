import React from 'react';
import { cacheConfig } from 'configs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPage, GetStaticProps } from 'next';
import { wrapper } from 'store/store';
import { Layout } from 'components/layout';
import { CardControl } from 'components/control';

const HomePage: NextPage = () => {
  return (
    <Layout data-testid="sea-word-home">
      <section className="bg-gray-100 py-16">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="w-96 mb-10 mx-auto">
            <CardControl />
          </div>
        </div>
      </section>
    </Layout>
  );
};

HomePage.displayName = 'HomePage';

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({ locale, store }) => {
  return {
    revalidate: cacheConfig.time,
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});

export default HomePage;
