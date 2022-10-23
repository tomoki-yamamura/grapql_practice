import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000",
})
const client = new ApolloClient({
  cache,
  link
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
