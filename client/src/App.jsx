// import { Outlet } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// import NavBar from './components/Nav';
// import { StoreProvider } from './utils/GlobalState';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <div>
//         <StoreProvider>
//           <NavBar />
//           <Outlet />
//         </StoreProvider>
//       </div>
//     </ApolloProvider>
//   );
// }

// export default App;













import { useState } from 'react'
import './App.css'
import './index.css'

import LoginForm from './pages/LogIn';
import HomePage from './pages/HomePage';
import ScrollAnimation from './pages/ScrollAnimation';
import Jewelry from './pages/Jewelry';
import Hoodies from './pages/Hoodies';
import WalkInPage from './pages/Hoodie_WalkIn';
import Shirts from './pages/Shirts';
import RememberMePage from './pages/Shirt_RememberMe';


function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      <HomePage />
      <ScrollAnimation src="/assets/scrollFrames/HoodieWebDevProj3.mp4" />
      <Jewelry />
      <Hoodies />
      <WalkInPage />
      <Shirts />
      <RememberMePage />

    </div>
  );
}

export default App;