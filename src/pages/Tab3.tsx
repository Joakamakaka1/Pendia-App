import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">PendIA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="example-content">PendIA</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
