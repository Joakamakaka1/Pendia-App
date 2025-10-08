import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Solicitudes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="example-content">Solicitudes</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
