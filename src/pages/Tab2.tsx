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
          <IonTitle className="ion-text-center">Listen 2 now</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="example-content">Listen now content</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
