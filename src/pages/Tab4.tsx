import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { camera, lockOpen, person } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Tab4.css";

export const Tab4: React.FC = () => {
  const navigate = useHistory();
  const [name, setName] = useState("Joaquin");
  const [email, setEmail] = useState("joaquin@pendia.com");

  const handleSave = () => {
    console.log("Perfil guardado:", { name, email });
  };

  const handleLogout = () => {
    navigate.push("/login");
  };

  return (
    <IonPage>
      <IonContent className="profile-content">
        <div className="profile-container">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Perfil</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="profile-avatar-section">
            <div className="profile-avatar-container">
              <IonAvatar className="profile-avatar">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Profile"
                />
              </IonAvatar>
              <button className="profile-avatar-edit">
                <IonIcon icon={camera} />
              </button>
            </div>
            <h2 className="profile-name">{name}</h2>
            <p className="profile-email">{email}</p>
          </div>

          <IonCard className="profile-card">
            <IonCardContent>
              <div className="profile-card-header">
                <IonIcon icon={person} className="profile-card-icon" />
                <h3 className="profile-card-title">Informacion personal</h3>
              </div>

              <div className="profile-form">
                <IonItem className="profile-form-item">
                  <IonLabel position="stacked" className="profile-form-label">
                    Full Name
                  </IonLabel>
                  <IonInput
                    value={name}
                    onIonInput={(e) => setName(e.detail.value!)}
                    className="profile-form-input"
                  />
                </IonItem>

                <IonItem className="profile-form-item">
                  <IonLabel position="stacked" className="profile-form-label">
                    Email
                  </IonLabel>
                  <IonInput
                    type="email"
                    value={email}
                    onIonInput={(e) => setEmail(e.detail.value!)}
                    className="profile-form-input"
                  />
                </IonItem>

                <IonItem className="profile-form-item">
                  <IonLabel position="stacked" className="profile-form-label">
                    Phone Number
                  </IonLabel>
                  <IonInput
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="profile-form-input"
                  />
                </IonItem>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard className="profile-card">
            <IonCardContent>
              <div className="profile-card-header">
                <IonIcon icon={lockOpen} className="profile-card-icon" />
                <h3 className="profile-card-title">Seguridad</h3>
              </div>

              <div className="profile-actions">
                <IonButton
                  expand="block"
                  fill="clear"
                  className="profile-action-button"
                >
                  Cambiar contraseña
                </IonButton>
                <IonButton
                  expand="block"
                  fill="clear"
                  className="profile-action-button"
                >
                  Autenticacion de dos factores
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Actions Section */}
          <div className="profile-actions-section">
            <IonButton
              expand="block"
              className="profile-save-button"
              onClick={handleSave}
            >
              Save Changes
            </IonButton>

            <IonButton
              expand="block"
              fill="outline"
              className="profile-logout-button"
              onClick={handleLogout}
            >
              Log Out
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
