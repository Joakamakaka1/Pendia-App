import React from "react";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  cashOutline,
  documentAttachOutline,
  peopleCircleOutline,
  personCircleOutline,
} from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";

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

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/menu/tab1">
          <IonIcon icon={peopleCircleOutline} />
          <IonLabel>Pendientes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/menu/tab2">
          <IonIcon icon={cashOutline} />
          <IonLabel>Solicitudes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/menu/tab3">
          <IonIcon icon={documentAttachOutline} />
          <IonLabel>PendIA</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/menu/tab4">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
