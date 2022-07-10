
import React from "react";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

//redux
import { Provider } from "react-redux";
import store from "./store";
import TableActivities from "./components/BackOffice/activities/TableActivities";

function App() {
    return (
        <Provider store={store}>
            <div>
               {/*  <AppRouter /> */}

<TableActivities/>
              {/*   <Footer /> */}
            </div>
        </Provider>
    );
}

export default App;