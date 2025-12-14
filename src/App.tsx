import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/* Theme variables */
import "./App.css";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { Home } from "./pages/Home";
import Notifications from "./pages/Notifications";
import { TabsLayout } from "./routes/TabsLayout";
import "./theme/variables.css";
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Páginas fuera del layout de tabs */}
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" render={() => <Redirect to="/login" />} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/notifications" component={Notifications} />

        {/* Páginas dentro del layout de tabs */}
        <Route path="/menu" component={TabsLayout} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
