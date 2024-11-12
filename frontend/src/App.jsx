import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './components/LoginPage';
import Register from './components/RegisterPage';
import WriteReviews from './components/WriteReviewsPage';
import LandingPage from "./components/LandingPage";

const router = createBrowserRouter(
  [
    {path: "/",
      element: 
      <div>
        <LandingPage/>
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
