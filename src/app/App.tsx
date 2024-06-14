import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { setIsAppInited } from 'src/app/model/slices/appSlice';
import { setProductsFromLocalStorage } from 'src/entities/Cart';
import { useAppDispatch } from 'src/shared/lib/hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsAppInited(true));
    dispatch(setProductsFromLocalStorage());
  }, [dispatch]);

  return <Outlet />;
}

export default App;
