import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { square } from "ionicons/icons";

import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";
import { Tab4 } from "../pages/Tab4";

export const TabsLayout = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/menu/tab1" component={Tab1} />
        <Route exact path="/menu/tab2" component={Tab2} />
        <Route exact path="/menu/tab3" component={Tab3} />
        <Route exact path="/menu/tab4" component={Tab4} />
        <Route exact path="/menu" render={() => <Redirect to="/menu/tab1" />} />
      </IonRouterOutlet>

      <IonTabBar
        slot="bottom"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <IonTabButton tab="tab1" href="/menu/tab1">
          <IonIcon icon={square} />
          <IonLabel>Pendientes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/menu/tab2">
          <IonIcon icon={square} />
          <IonLabel>Solicitudes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/menu/tab3">
          <IonIcon icon={square} />
          <IonLabel>PendIA</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/menu/tab4">
          <IonIcon icon={square} />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
