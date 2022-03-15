import React from 'react';
import { cacheConfig } from 'configs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPage, GetStaticProps } from 'next';
import { wrapper } from 'store/store';
import { Layout } from 'components/layout';
import { CardControl } from 'components/control';
import { WorldTable } from 'components/world';

const HomePage: NextPage = () => {
  return (
    <Layout data-testid="sea-word-home">
      <section className="bg-blue-100 py-16">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="w-96 mb-10 mx-auto">
            <CardControl />
          </div>
        </div>
      </section>
      <div className="container max-w-9xl px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl p-7 -mt-20">
          <WorldTable />
        </div>
      </div>
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
