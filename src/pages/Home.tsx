import {
  IonButton,
  IonContent,
  IonFooter,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { useHistory } from "react-router";
import "./Home.css";

export const Home: React.FC = () => {
  const navigate = useHistory();

  const navigateToLogin = () => {
    navigate.push("/menu");
  };

  const navigateToRegister = () => {
    navigate.push("/menu");
  };

  return (
    <IonPage>
      <IonContent className="home-content">
        <div className="home-container">
          {/* Header Section */}
          <div className="home-header">
            <IonToolbar className="home-toolbar">
              <IonTitle className="home-title">
                <span className="home-title-line">Welcome</span>
              </IonTitle>
              <IonTitle className="home-title">
                <span>to Pendia</span>
              </IonTitle>
            </IonToolbar>

            <p className="home-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              doloribus asperiores officia.
            </p>
          </div>

          {/* Centered Animation Section */}
          <div className="home-animation-container">
            <div>
              <DotLottieReact
                src="/assets/imgs/home.lottie"
                loop
                autoplay
                className="home-lottie"
              />
            </div>
          </div>

          {/* Buttons Section */}
          <div className="home-buttons">
            <IonButton
              expand="block"
              shape="round"
              onClick={navigateToLogin}
              className="home-button"
            >
              Login
            </IonButton>
            <IonButton
              expand="block"
              shape="round"
              onClick={navigateToRegister}
              className="home-button"
              color="secondary"
            >
              Sign up
            </IonButton>
          </div>
        </div>
      </IonContent>

      <IonFooter className="home-footer">
        <IonToolbar>
          <div className="home-footer-text">
            © 2025 Pendia by Joaquin. All rights reserved.
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
