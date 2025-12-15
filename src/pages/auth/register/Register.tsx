import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonPage,
  IonRouterLink,
} from "@ionic/react";
import {
  eye,
  eyeOff,
  lockClosedOutline,
  mailOutline,
  personOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "../login/Login.css"; // Reusing the same styles

const Register: React.FC = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Mock register logic
    history.push("/menu/tab1");
  };

  return (
    <IonPage>
      <IonContent fullscreen className="auth-content">
        <div className="auth-container">
          <div className="auth-header">
            <h1 className="auth-title">Crear Cuenta</h1>
            <p className="auth-subtitle">
              Únete a Pendia y organiza tus finanzas
            </p>
          </div>

          <div className="auth-form">
            <div className="auth-input-group">
              <IonIcon icon={personOutline} className="auth-icon" />
              <IonInput
                type="text"
                placeholder="Nombre completo"
                className="auth-input"
                value={name}
                onIonChange={(e) => setName(e.detail.value || "")}
              />
            </div>

            <div className="auth-input-group">
              <IonIcon icon={mailOutline} className="auth-icon" />
              <IonInput
                type="email"
                placeholder="Correo electrónico"
                className="auth-input"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value || "")}
              />
            </div>

            <div className="auth-input-group">
              <IonIcon icon={lockClosedOutline} className="auth-icon" />
              <IonInput
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="auth-input"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value || "")}
              />
              <IonIcon
                icon={showPassword ? eyeOff : eye}
                className="auth-icon-end"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <div className="auth-input-group">
              <IonIcon icon={lockClosedOutline} className="auth-icon" />
              <IonInput
                type={showPassword ? "text" : "password"}
                placeholder="Confirmar contraseña"
                className="auth-input"
                value={confirmPassword}
                onIonChange={(e) => setConfirmPassword(e.detail.value || "")}
              />
            </div>

            <IonButton
              expand="block"
              className="auth-button"
              onClick={handleRegister}
            >
              Registrarse
            </IonButton>
          </div>

          <div className="auth-footer">
            <p>
              ¿Ya tienes cuenta?{" "}
              <IonRouterLink routerLink="/login">Inicia Sesión</IonRouterLink>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
