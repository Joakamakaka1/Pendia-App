import { IonButton, IonContent, IonPage } from "@ionic/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { useHistory } from "react-router";
import "./Home.css";

export const Home: React.FC = () => {
  const navigate = useHistory();

  const navigateToLogin = () => {
    navigate.push("/login");
  };

  const navigateToRegister = () => {
    navigate.push("/register");
  };

  return (
    <IonPage>
      <IonContent>
        <div className="home-container">
          {/* Centered Animation Section */}
          <div>
            <DotLottieReact src="/assets/imgs/home.lottie" loop autoplay />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="home-headline">
              Mantén el control de tus finanzas con nosotros.
            </h1>
          </div>

          {/* Buttons Section */}
          <div className="home-buttons">
            <IonButton
              expand="block"
              className="home-button-primary"
              onClick={navigateToRegister}
            >
              Registrarse
            </IonButton>
            <button className="home-button-link" onClick={navigateToLogin}>
              Iniciar sesión
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
