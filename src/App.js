
import React from "react";
import AppRouter from "./router/AppRouter";
import EditOrganization from "./pages/backOffice/EditOrganization";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>  
                <AppRouter />
        </Provider>
    );
}

export default App;