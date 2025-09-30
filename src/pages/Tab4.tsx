import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React from "react";
export const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Listen 4 now</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="example-content">Listen now content</div>
      </IonContent>
    </IonPage>
  );
};
