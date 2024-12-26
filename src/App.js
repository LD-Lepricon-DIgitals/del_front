import React, {lazy, Suspense} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AppProvider} from "./context/AppContext.jsx";
import Orders from "./pages/delivery_orders/Orders";
import Order from "./pages/order/Order";

const Main = lazy(() => import("./pages/main/Main.jsx"));
const Profile = lazy(() => import("./pages/profile/Profile.jsx"));
const Menu = lazy(() => import("./pages/menu/Menu.jsx"));
const CartModalContent = lazy(() =>
    import("./pages/shared/navigation/CartModalContent/CartModalContent.jsx")
);

function App() {
    return (
        <AppProvider>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        {/*           <Route path="/cart" element={<CartModalContent />} />
             */}{" "}
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/orders" element={<Orders/>}/>
                        <Route path="/menu" element={<Menu/>}/>
                        <Route path="/orders/:id" element={<Order/>}/>
                    </Routes>
                </Suspense>
            </Router>
        </AppProvider>
    );
}

export default App;
