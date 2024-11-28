import Main from "./components/Main/Main";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { AppProvider } from "./context/AppContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/books/homepage"
        element={
          <AppProvider>
            <Main />
          </AppProvider>
        }
      />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
