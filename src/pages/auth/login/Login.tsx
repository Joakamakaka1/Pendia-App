import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonPage,
  IonRouterLink,
  IonText,
} from "@ionic/react";
import { eye, eyeOff, lockClosedOutline, mailOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";

const Login: React.FC = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Mock login logic
    console.log("Logging in with:", email, password);
    history.push("/menu/tab1");
  };

  return (
    <IonPage>
      <IonContent fullscreen className="auth-content">
        <div className="auth-container">
          <div className="auth-header">
            <h1 className="auth-title">Bienvenido de nuevo</h1>
            <p className="auth-subtitle">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          <div className="auth-form">
            <div className="auth-input-group">
              <IonIcon icon={mailOutline} className="auth-icon" />
              <IonInput
                type="email"
                placeholder="Correo electrónico"
                className="auth-input"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              />
            </div>

            <div className="auth-input-group">
              <IonIcon icon={lockClosedOutline} className="auth-icon" />
              <IonInput
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="auth-input"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              />
              <IonIcon
                icon={showPassword ? eyeOff : eye}
                className="auth-icon-end"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <div className="auth-forgot-password">
              <IonText color="medium">¿Olvidaste tu contraseña?</IonText>
            </div>

            <IonButton
              expand="block"
              className="auth-button"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </IonButton>
          </div>

          <div className="auth-footer">
            <p>
              ¿No tienes cuenta?{" "}
              <IonRouterLink routerLink="/register">Regístrate</IonRouterLink>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
