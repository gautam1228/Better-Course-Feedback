import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './components/LoginPage';
import Register from './components/RegisterPage';
import WriteReviews from './components/WriteReviewsPage';
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Reviews from './components/ReviewsPage';
import Course from './components/CoursePage';

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
    },
    {path: "/about",
      element: 
      <div>
        <AboutPage />
      </div>
    },
    {path: "/contact",
      element: 
      <div>
        <ContactPage />
      </div>
    },
    {path: "/reviews",
      element: 
      <div>
        <Reviews />
      </div>
    },
    {path: "/course/:id",
      element: 
      <div>
        <Course />
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
