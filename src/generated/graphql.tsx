import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BottomBlock = {
  __typename?: 'BottomBlock';
  listClients: Array<InfoList>;
  title: Scalars['String'];
};

export type CenterBlockA = {
  __typename?: 'CenterBlockA';
  infoList: Array<InfoList>;
  title: Scalars['String'];
  underTitle: Scalars['String'];
};

export type CenterBlockC = {
  __typename?: 'CenterBlockC';
  infoList: Array<InfoList2>;
  title: Scalars['String'];
};

export type Data = {
  __typename?: 'Data';
  data: Array<Maybe<HomePage>>;
};

export type DataFooter = {
  __typename?: 'DataFooter';
  data: Array<Maybe<Footer>>;
};

export type DataHeader = {
  __typename?: 'DataHeader';
  data: Array<Maybe<Header>>;
};

export type Footer = {
  __typename?: 'Footer';
  footerBottomLinks?: Maybe<Array<Links>>;
  footerSocialIcons?: Maybe<Array<SocialLinks>>;
  footerSocialTitle: Scalars['String'];
  id: Scalars['String'];
};

export type Header = {
  __typename?: 'Header';
  headerBtnA: Link;
  headerBtnB: Link;
  headerLogo: Scalars['String'];
  headerNavMenu?: Maybe<Array<Link>>;
  id: Scalars['String'];
};

export type HomePage = {
  __typename?: 'HomePage';
  blockBottom: BottomBlock;
  centerBlockA: CenterBlockA;
  centerBlockB: Scalars['String'];
  centerBlockC: CenterBlockC;
  id: Scalars['String'];
  mainBlock: MainBlock;
};

export type InfoList = {
  __typename?: 'InfoList';
  icon: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type InfoList2 = {
  __typename?: 'InfoList2';
  img: Scalars['String'];
  subTitle: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type InputHomePage = {
  search?: InputMaybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  dropdown?: Maybe<Array<Maybe<Link>>>;
  href: Scalars['String'];
  name: Scalars['String'];
};

export type Links = {
  __typename?: 'Links';
  href: Scalars['String'];
  name: Scalars['String'];
};

export type MainBlock = {
  __typename?: 'MainBlock';
  bgImg: Scalars['String'];
  primaryBtn: BtnLink;
  secondaryBtn: BtnLink;
  subTitle: Scalars['String'];
  title: Scalars['String'];
  underTitle: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getFooter?: Maybe<DataFooter>;
  getHeader?: Maybe<DataHeader>;
  getHomePage?: Maybe<Data>;
};


export type QueryGetHomePageArgs = {
  input: InputHomePage;
};

export type SocialLinks = {
  __typename?: 'SocialLinks';
  href: Scalars['String'];
  icon: Scalars['String'];
};

export type BtnLink = {
  __typename?: 'btnLink';
  href: Scalars['String'];
  name: Scalars['String'];
};

export type GetFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterQuery = { __typename?: 'Query', getFooter?: { __typename?: 'DataFooter', data: Array<{ __typename?: 'Footer', id: string, footerSocialTitle: string, footerSocialIcons?: Array<{ __typename?: 'SocialLinks', href: string, icon: string }> | null, footerBottomLinks?: Array<{ __typename?: 'Links', name: string, href: string }> | null } | null> } | null };

export type GetHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { __typename?: 'Query', getHeader?: { __typename?: 'DataHeader', data: Array<{ __typename?: 'Header', id: string, headerLogo: string, headerNavMenu?: Array<{ __typename?: 'Link', name: string, href: string, dropdown?: Array<{ __typename?: 'Link', name: string, href: string } | null> | null }> | null, headerBtnA: { __typename?: 'Link', name: string, href: string }, headerBtnB: { __typename?: 'Link', name: string, href: string } } | null> } | null };

export type GetHomePageQueryVariables = Exact<{
  input: InputHomePage;
}>;


export type GetHomePageQuery = { __typename?: 'Query', getHomePage?: { __typename?: 'Data', data: Array<{ __typename?: 'HomePage', id: string, centerBlockB: string, mainBlock: { __typename?: 'MainBlock', subTitle: string, title: string, underTitle: string, bgImg: string, primaryBtn: { __typename?: 'btnLink', href: string, name: string }, secondaryBtn: { __typename?: 'btnLink', href: string, name: string } }, centerBlockA: { __typename?: 'CenterBlockA', title: string, underTitle: string, infoList: Array<{ __typename?: 'InfoList', icon: string, title: string, text: string }> }, centerBlockC: { __typename?: 'CenterBlockC', title: string, infoList: Array<{ __typename?: 'InfoList2', img: string, subTitle: string, title: string, text: string }> }, blockBottom: { __typename?: 'BottomBlock', title: string, listClients: Array<{ __typename?: 'InfoList', icon: string, text: string, title: string }> } } | null> } | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BottomBlock: ResolverTypeWrapper<BottomBlock>;
  CenterBlockA: ResolverTypeWrapper<CenterBlockA>;
  CenterBlockC: ResolverTypeWrapper<CenterBlockC>;
  Data: ResolverTypeWrapper<Data>;
  DataFooter: ResolverTypeWrapper<DataFooter>;
  DataHeader: ResolverTypeWrapper<DataHeader>;
  Footer: ResolverTypeWrapper<Footer>;
  Header: ResolverTypeWrapper<Header>;
  HomePage: ResolverTypeWrapper<HomePage>;
  InfoList: ResolverTypeWrapper<InfoList>;
  InfoList2: ResolverTypeWrapper<InfoList2>;
  InputHomePage: InputHomePage;
  Link: ResolverTypeWrapper<Link>;
  Links: ResolverTypeWrapper<Links>;
  MainBlock: ResolverTypeWrapper<MainBlock>;
  Query: ResolverTypeWrapper<{}>;
  SocialLinks: ResolverTypeWrapper<SocialLinks>;
  String: ResolverTypeWrapper<Scalars['String']>;
  btnLink: ResolverTypeWrapper<BtnLink>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  BottomBlock: BottomBlock;
  CenterBlockA: CenterBlockA;
  CenterBlockC: CenterBlockC;
  Data: Data;
  DataFooter: DataFooter;
  DataHeader: DataHeader;
  Footer: Footer;
  Header: Header;
  HomePage: HomePage;
  InfoList: InfoList;
  InfoList2: InfoList2;
  InputHomePage: InputHomePage;
  Link: Link;
  Links: Links;
  MainBlock: MainBlock;
  Query: {};
  SocialLinks: SocialLinks;
  String: Scalars['String'];
  btnLink: BtnLink;
};

export type BottomBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['BottomBlock'] = ResolversParentTypes['BottomBlock']> = {
  listClients?: Resolver<Array<ResolversTypes['InfoList']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CenterBlockAResolvers<ContextType = any, ParentType extends ResolversParentTypes['CenterBlockA'] = ResolversParentTypes['CenterBlockA']> = {
  infoList?: Resolver<Array<ResolversTypes['InfoList']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  underTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CenterBlockCResolvers<ContextType = any, ParentType extends ResolversParentTypes['CenterBlockC'] = ResolversParentTypes['CenterBlockC']> = {
  infoList?: Resolver<Array<ResolversTypes['InfoList2']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Data'] = ResolversParentTypes['Data']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['HomePage']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataFooterResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataFooter'] = ResolversParentTypes['DataFooter']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['Footer']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataHeaderResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataHeader'] = ResolversParentTypes['DataHeader']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['Header']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Footer'] = ResolversParentTypes['Footer']> = {
  footerBottomLinks?: Resolver<Maybe<Array<ResolversTypes['Links']>>, ParentType, ContextType>;
  footerSocialIcons?: Resolver<Maybe<Array<ResolversTypes['SocialLinks']>>, ParentType, ContextType>;
  footerSocialTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Header'] = ResolversParentTypes['Header']> = {
  headerBtnA?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  headerBtnB?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  headerLogo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  headerNavMenu?: Resolver<Maybe<Array<ResolversTypes['Link']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomePage'] = ResolversParentTypes['HomePage']> = {
  blockBottom?: Resolver<ResolversTypes['BottomBlock'], ParentType, ContextType>;
  centerBlockA?: Resolver<ResolversTypes['CenterBlockA'], ParentType, ContextType>;
  centerBlockB?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  centerBlockC?: Resolver<ResolversTypes['CenterBlockC'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mainBlock?: Resolver<ResolversTypes['MainBlock'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InfoListResolvers<ContextType = any, ParentType extends ResolversParentTypes['InfoList'] = ResolversParentTypes['InfoList']> = {
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InfoList2Resolvers<ContextType = any, ParentType extends ResolversParentTypes['InfoList2'] = ResolversParentTypes['InfoList2']> = {
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = {
  dropdown?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['Links'] = ResolversParentTypes['Links']> = {
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MainBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainBlock'] = ResolversParentTypes['MainBlock']> = {
  bgImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryBtn?: Resolver<ResolversTypes['btnLink'], ParentType, ContextType>;
  secondaryBtn?: Resolver<ResolversTypes['btnLink'], ParentType, ContextType>;
  subTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  underTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getFooter?: Resolver<Maybe<ResolversTypes['DataFooter']>, ParentType, ContextType>;
  getHeader?: Resolver<Maybe<ResolversTypes['DataHeader']>, ParentType, ContextType>;
  getHomePage?: Resolver<Maybe<ResolversTypes['Data']>, ParentType, ContextType, RequireFields<QueryGetHomePageArgs, 'input'>>;
};

export type SocialLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialLinks'] = ResolversParentTypes['SocialLinks']> = {
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BtnLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['btnLink'] = ResolversParentTypes['btnLink']> = {
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BottomBlock?: BottomBlockResolvers<ContextType>;
  CenterBlockA?: CenterBlockAResolvers<ContextType>;
  CenterBlockC?: CenterBlockCResolvers<ContextType>;
  Data?: DataResolvers<ContextType>;
  DataFooter?: DataFooterResolvers<ContextType>;
  DataHeader?: DataHeaderResolvers<ContextType>;
  Footer?: FooterResolvers<ContextType>;
  Header?: HeaderResolvers<ContextType>;
  HomePage?: HomePageResolvers<ContextType>;
  InfoList?: InfoListResolvers<ContextType>;
  InfoList2?: InfoList2Resolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Links?: LinksResolvers<ContextType>;
  MainBlock?: MainBlockResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SocialLinks?: SocialLinksResolvers<ContextType>;
  btnLink?: BtnLinkResolvers<ContextType>;
};



export const GetFooterDocument = gql`
    query GetFooter {
  getFooter {
    data {
      id
      footerSocialTitle
      footerSocialIcons {
        href
        icon
      }
      footerBottomLinks {
        name
        href
      }
    }
  }
}
    `;

/**
 * __useGetFooterQuery__
 *
 * To run a query within a React component, call `useGetFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFooterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFooterQuery(baseOptions?: Apollo.QueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
      }
export function useGetFooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
        }
export type GetFooterQueryHookResult = ReturnType<typeof useGetFooterQuery>;
export type GetFooterLazyQueryHookResult = ReturnType<typeof useGetFooterLazyQuery>;
export type GetFooterQueryResult = Apollo.QueryResult<GetFooterQuery, GetFooterQueryVariables>;
export const GetHeaderDocument = gql`
    query GetHeader {
  getHeader {
    data {
      id
      headerLogo
      headerNavMenu {
        name
        href
        dropdown {
          name
          href
        }
      }
      headerBtnA {
        name
        href
      }
      headerBtnB {
        name
        href
      }
    }
  }
}
    `;

/**
 * __useGetHeaderQuery__
 *
 * To run a query within a React component, call `useGetHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHeaderQuery(baseOptions?: Apollo.QueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
      }
export function useGetHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
        }
export type GetHeaderQueryHookResult = ReturnType<typeof useGetHeaderQuery>;
export type GetHeaderLazyQueryHookResult = ReturnType<typeof useGetHeaderLazyQuery>;
export type GetHeaderQueryResult = Apollo.QueryResult<GetHeaderQuery, GetHeaderQueryVariables>;
export const GetHomePageDocument = gql`
    query GetHomePage($input: InputHomePage!) {
  getHomePage(input: $input) {
    data {
      id
      mainBlock {
        subTitle
        title
        underTitle
        primaryBtn {
          href
          name
        }
        secondaryBtn {
          href
          name
        }
        bgImg
      }
      centerBlockA {
        title
        underTitle
        infoList {
          icon
          title
          text
        }
      }
      centerBlockB
      centerBlockC {
        title
        infoList {
          img
          subTitle
          title
          text
        }
      }
      blockBottom {
        title
        listClients {
          icon
          text
          title
        }
      }
    }
  }
}
    `;

/**
 * __useGetHomePageQuery__
 *
 * To run a query within a React component, call `useGetHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetHomePageQuery(baseOptions: Apollo.QueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
      }
export function useGetHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
        }
export type GetHomePageQueryHookResult = ReturnType<typeof useGetHomePageQuery>;
export type GetHomePageLazyQueryHookResult = ReturnType<typeof useGetHomePageLazyQuery>;
export type GetHomePageQueryResult = Apollo.QueryResult<GetHomePageQuery, GetHomePageQueryVariables>;