
import React from "react";
import AppRouter from "./router/AppRouter";

//redux
import { Provider } from "react-redux";
import store from "./store";
import TableActivities from "./components/BackOffice/activities/TableActivities";

function App() {
    return (
        <Provider store={store}>  
                <TableActivities />
        </Provider>
    );
}

export default App;