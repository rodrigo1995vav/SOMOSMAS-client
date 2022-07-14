
import React from "react";
import AppRouter from "./router/AppRouter";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
                <AppRouter />

                {/* <Footer /> */}
        </Provider>
    );
}

export default App;