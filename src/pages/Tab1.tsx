import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Listen now</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="example-content">Listen now content</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
