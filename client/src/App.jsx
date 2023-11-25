// import { useState } from 'react'
// import './App.css'
// import './index.css'

// import LoginForm from './pages/LogIn';
// import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import Jewelry from './pages/Jewelry';
// import Hoodies from './pages/Hoodies';
// import WalkInPage from './pages/Hoodie_WalkIn';


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <HomePage />
//       <Header />
//       <Jewelry />
//       <Header />
//       <Hoodies />
//       <Header />
//       <WalkInPage />
//     </div>
//   );
// }

// export default App;

import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import NavBar from './components/Nav';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <StoreProvider>
          <NavBar />
          <Outlet />
        </StoreProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
