import React from 'react';
import { render } from 'testUtils';
import Index, { getStaticProps } from 'pages/index';
import { InitialState } from 'store/store';

describe('HomePage', () => {
  test('renders layout and sections', () => {
    const { getByTestId } = render(<Index />, {
      initialState: InitialState,
    });

    const home = getByTestId('sea-word-home');
    expect(home).toBeDefined();
  });

  test('getServerSideProps test try to get metadata', async () => {
    const result: any = await getStaticProps({ locale: 'en' });

    expect(result.revalidate).toBeTruthy();
  });
});
