import {
  IonPage,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
} from "@ionic/react";
import React from "react";
import "./Tab4.css";
export const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="profile-content">
        <div className="profile-container">
          <img
            src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon"
            alt="Perfil"
            className="profile-avatar"
          />

          <IonList className="profile-list">
            <IonListHeader>
              <IonLabel className="labels-profile-list">
                Información de la cuenta
              </IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Nombre</IonLabel>
              <IonNote slot="end">Juan Pérez</IonNote>
            </IonItem>

            <IonItem>
              <IonLabel>Correo electrónico</IonLabel>
              <IonNote slot="end">juanperez@mail.com</IonNote>
            </IonItem>

            <IonItem>
              <IonLabel>Contraseña</IonLabel>
              <IonNote slot="end">********</IonNote>
            </IonItem>
          </IonList>

          <IonList className="profile-list">
            <IonListHeader>
              <IonLabel className="labels-profile-list">Preferencias</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Idioma</IonLabel>
              <IonNote slot="end">español (España)</IonNote>
            </IonItem>

            <IonItem>
              <IonLabel>Modo Oscuro</IonLabel>
              <IonNote slot="end">Encendido</IonNote>
            </IonItem>
          </IonList>
          <IonButton
            color="danger"
            expand="block"
            className="logout-button ion-text-center"
            shape="round"
          >
            Cerrar sesión
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
