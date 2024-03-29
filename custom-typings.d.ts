declare module 'next-redux-wrapper' {
  /// <reference types="node" />
  import React from 'react';
  import { Store, AnyAction, Action } from 'redux';
  import { GetServerSideProps, GetStaticProps, NextPageContext } from 'next';
  import { AppContext } from 'next/app';
  import { IncomingMessage, ServerResponse } from 'http';
  import { ParsedUrlQuery } from 'querystring';
  export declare const HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__';
  export declare const STOREKEY = '__NEXT_REDUX_WRAPPER_STORE__';
  export declare type MakeStore<S = any, A extends Action = AnyAction> = (
    context: Context
  ) => Store<S, A>;
  export interface InitStoreOptions<S = any, A extends Action = AnyAction> {
    makeStore: MakeStore<S, A>;
    context: Context;
    config: Config<S>;
  }
  export interface GetServerSidePropsContext {
    req: IncomingMessage;
    res: ServerResponse;
    params?: ParsedUrlQuery;
    query: ParsedUrlQuery;
    preview?: boolean;
    previewData?: any;
    locale?: string;
    resolvedUrl?: string;
  }
  export interface GetStaticPropsContext {
    params?: ParsedUrlQuery;
    preview?: boolean;
    previewData?: any;
    locale?: string;
  }
  export declare const createWrapper: <S extends {} = any, A extends Action<any> = AnyAction>(
    makeStore: MakeStore<S, A>,
    config?: Config<S>
  ) => {
    getServerSideProps: <P extends {} = any>(
      callback: (
        context: GetServerSidePropsContext & {
          store: Store<S, A>;
        }
      ) => void | P
    ) => GetServerSideProps<P, ParsedUrlQuery>;
    getStaticProps: <P_1 extends {} = any>(
      callback: (
        context: GetStaticPropsContext & {
          store: Store<S, A>;
        }
      ) => void | P_1
    ) => GetStaticProps<P_1, ParsedUrlQuery>;
    withRedux: (Component: any) => React.FunctionComponent<WrapperProps> & {
      getInitialProps?(
        context: NextPageContext<any, AnyAction>
      ): WrapperProps | Promise<WrapperProps>;
    };
  };
  declare const _default: <S extends {} = any, A extends Action<any> = AnyAction>(
    makeStore: MakeStore<S, A>,
    config?: Config<any>
  ) => (Component: any) => React.FunctionComponent<WrapperProps> & {
    getInitialProps?(
      context: NextPageContext<any, AnyAction>
    ): WrapperProps | Promise<WrapperProps>;
  };
  export default _default;
  export declare type Context =
    | NextPageContext
    | AppContext
    | GetStaticPropsContext
    | GetServerSidePropsContext;
  export interface Config<S extends {} = any> {
    serializeState?: (state: S) => any;
    deserializeState?: (state: any) => S;
    storeKey?: string;
    debug?: boolean;
  }
  export interface WrapperProps {
    initialProps: any;
    initialState: any;
    pageProps?: any;
  }
  declare module 'next/dist/next-server/lib/utils' {
    interface NextPageContext<S = any, A extends Action = AnyAction> {
      /**
       * Provided by next-redux-wrapper: The redux store
       */
      store: Store<S, A>;
    }
  }
}
