import React from "react";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
//redux
import { Provider, useDispatch } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <h1 className="fw-bolder"></h1>
                 <AppRouter />

                <Footer />
            </div>
        </Provider>
    );
}

export default App;