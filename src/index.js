import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Body from './components/Body';
import Login from './components/Login';
import AddExpenses from './components/AddExpenses';
import ExpenseList from './components/ExpensesList';

const AppLayout =()=> {
  return <div>
    <Header/>
    <Outlet/>
  </div>
}

const appRouter = createBrowserRouter([
  {
  path : '/',
  element : <AppLayout/>,
  children : [
    {
      path : '/',
      element : <Body/>
    },
    {
      path : '/user/login',
      element : <Login/>
    },
    {
      path : '/user/signup',
      element : <Signup/>
    },
    {
      path : '/expense/add',
      element : <AddExpenses/>
    },
    {
      path : '/expense/list',
      element : <ExpenseList/>
    }
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);