import React from 'react';
import MyProvider from './MyProvider';
import ProductList from './ProductList';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import WrappedComponent from './props-from-hoc';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import Artists from './Artists';
const cache = new InMemoryCache({
  // https://github.com/apollographql/apollo-client/issues/1913
  addTypename: false
});
const client = new ApolloClient({
  cache,
  link: createHttpLink({
  uri: "http://localhost:51670/graphql"
})
});
console.log("hi how are you");
export default class App extends React.Component {
    render() {
      return <MyProvider><ApolloProvider client={client}>
                <ErrorBoundary><WrappedComponent></WrappedComponent></ErrorBoundary>
                <ProductList />
                <ErrorBoundary>
                <Artists artistName='Davido'></Artists>
                <Artists artistName='Mayorkun'></Artists>
                <Artists artistName='Dremo'></Artists>
                <Artists artistName='peruzzi'></Artists>
                </ErrorBoundary> 
                </ApolloProvider>
              </MyProvider>;
    }
  }
