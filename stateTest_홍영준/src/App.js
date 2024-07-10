import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StatesPage from "./pages/State";
import DetailPage from "./pages/Detail";
import IsModalOpenProvider from "./context/modal_open_context";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <StatesPage />,
        },
        {
            path: "/detail/:productNumber",
            element: <DetailPage />,
        },
    ]);

    return (
        <div className="App">
            <IsModalOpenProvider>
                <RouterProvider router={router} />
            </IsModalOpenProvider>
        </div>
    );
}

export default App;
