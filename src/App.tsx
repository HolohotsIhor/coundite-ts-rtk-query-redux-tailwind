import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductCard } from './pages/product-card/product-card';
import { MainPage } from './pages/main/main-page';

interface AppProps {}

export const App: FC<AppProps> = () => {
    return (
        <>
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/product/:id' element={<ProductCard />} />
          </Routes>
        </>
    );
}
