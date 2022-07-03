
import React from "react";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <AppRouter />

                <Footer />
            </div>
        </Provider>
    );
}

export default App;