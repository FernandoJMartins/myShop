import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Footer } from './components/Footer/Footer';



function App() {
  return (
    
    <Provider store={store}>
      <Header />
      <ProductsList />
      <Footer/>
      <GlobalStyles />
    </Provider>
  );
}

export default App;
