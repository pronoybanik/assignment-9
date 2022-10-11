// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import CartDetails from './components/cartDetails/CartDetails';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router  = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/cart/:cartId',
          loader: async ({params})=>{
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.cartId}`)
          },
          element:<CartDetails></CartDetails>,
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
