import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import WriteReviews from './components/WriteReviews';

const router = createBrowserRouter(
  [
    {path: "/",
      element: 
      <div>
        <h1>Landing Page</h1>
      </div>
    },
    {path: "/login",
      element: 
      <div>
        <Login/>
      </div>
    },
    {path: "/register",
      element: 
      <div>
        <Register />
      </div>
    },
    {path: "/writeReviews",
      element: 
      <div>
        <WriteReviews />
      </div>
    }
  ]
);


function App() {
  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
