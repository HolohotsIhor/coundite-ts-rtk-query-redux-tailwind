import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductCard } from './pages/ProductCard/ProductCard';
import { Main } from './pages/Main/Main';

interface AppProps {}

export const App: FC<AppProps> = () => {
    return (
        <>
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/product/:id' element={<ProductCard />} />
          </Routes>
        </>
    );
}
