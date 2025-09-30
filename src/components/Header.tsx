import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import React from "react";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          This is the menu content.
        </IonContent>
      </IonMenu>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};
