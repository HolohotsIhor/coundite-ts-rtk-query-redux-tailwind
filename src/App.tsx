import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductCard } from './pages/ProductCard/ProductCard';
import { Main } from './pages/Main/Main';
import { Blog } from './pages/Blog/Blog';
import { Todos } from './pages/Todos/Todos';

interface AppProps {}

export const App: FC<AppProps> = () => {
    return (
        <>
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/todos' element={<Todos />} />
              <Route path='/product/:id' element={<ProductCard />} />
          </Routes>
        </>
    );
}
