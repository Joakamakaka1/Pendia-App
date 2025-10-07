import {
  IonButton,
  IonCard,
  IonContent,
  IonItem,
  IonLabel,
  IonListHeader,
  IonPage,
} from "@ionic/react";
import React from "react";
import "./Tab4.css";

export const Tab4: React.FC = () => {
  const profile = {
    name: "Juan Pérez",
    email: "juanperez@mail.com",
    password: "********",
    language: "Español (España)",
    darkMode: "Encendido",
  };

  return (
    <IonPage>
      <IonContent fullscreen className="profile-content">
        <div className="profile-container">
          <img
            src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon"
            alt="Perfil"
            className="profile-avatar"
          />

          {/* Información de la cuenta */}
          <IonListHeader>
            <IonLabel className="labels-profile-list">
              Información de la cuenta
            </IonLabel>
          </IonListHeader>

          <IonCard className="profile-card">
            <IonItem lines="none" className="profile-item">
              <IonLabel className="field-label-type">Nombre</IonLabel>
              <IonLabel className="field-label">{profile.name}</IonLabel>
            </IonItem>
          </IonCard>

          <IonCard className="profile-card">
            <IonItem lines="none" className="profile-item">
              <IonLabel className="field-label-type">
                Correo electrónico
              </IonLabel>
              <IonLabel className="field-label">{profile.email}</IonLabel>
            </IonItem>
          </IonCard>

          <IonCard className="profile-card">
            <IonItem lines="none" className="profile-item">
              <IonLabel className="field-label-type">Contraseña</IonLabel>
              <IonLabel className="field-label">{profile.password}</IonLabel>
            </IonItem>
          </IonCard>

          {/* Preferencias */}
          <IonListHeader>
            <IonLabel className="labels-profile-list">Preferencias</IonLabel>
          </IonListHeader>

          <IonCard className="profile-card">
            <IonItem lines="none" className="profile-item">
              <IonLabel className="field-label-type">Idioma</IonLabel>
              <IonLabel className="field-label">{profile.language}</IonLabel>
            </IonItem>
          </IonCard>

          <IonCard className="profile-card">
            <IonItem lines="none" className="profile-item">
              <IonLabel className="field-label-type">Modo Oscuro</IonLabel>
              <IonLabel className="field-label">{profile.darkMode}</IonLabel>
            </IonItem>
          </IonCard>

          {/* Botón de cierre de sesión */}
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
