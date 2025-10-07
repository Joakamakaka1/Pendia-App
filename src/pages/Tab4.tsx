import React from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonItem,
  IonLabel,
  IonNote,
  IonListHeader,
  IonButton,
} from "@ionic/react";
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
              <IonLabel className="field-label">Nombre</IonLabel>
              <IonNote className="field-value">{profile.name}</IonNote>
            </IonItem>
          </IonCard>

          <IonCard className="profile-card">
            <IonItem lines="none" className="profile-item">
              <IonLabel className="field-label">Correo electrónico</IonLabel>
              <IonNote className="field-value">{profile.email}</IonNote>
            </IonItem>
          </IonCard>

          <IonCard className="profile-card">
            <IonItem lines="none" className="profile-item">
              <IonLabel className="field-label">Contraseña</IonLabel>
              <IonNote className="field-value">{profile.password}</IonNote>
            </IonItem>
          </IonCard>

          {/* Preferencias */}
          <IonListHeader>
            <IonLabel className="labels-profile-list">Preferencias</IonLabel>
          </IonListHeader>

          <IonCard className="profile-card">
            <IonItem lines="none" className="profile-item">
              <IonLabel className="field-label">Idioma</IonLabel>
              <IonNote className="field-value">{profile.language}</IonNote>
            </IonItem>
          </IonCard>

          <IonCard className="profile-card">
            <IonItem lines="none" className="profile-item">
              <IonLabel className="field-label">Modo Oscuro</IonLabel>
              <IonNote className="field-value">{profile.darkMode}</IonNote>
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
