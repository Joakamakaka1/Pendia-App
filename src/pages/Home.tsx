import {
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonFooter,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
      <IonContent className="ion-padding">
        <div className="home-container">
          <IonToolbar>
            <IonTitle class="ion-text-center home-title">
              Welcome to Pendia
            </IonTitle>
          </IonToolbar>
          <div className="ion-text-center subtitle-home">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            doloribus asperiores officia.
          </div>
          <DotLottieReact
            src="/assets/imgs/home.lottie"
            loop
            autoplay
            className="lottie-animation"
          />
          <div className="button-home-container">
            <IonButton
              expand="full"
              className="ion-margin-top"
              shape="round"
              onClick={navigateToLogin}
            >
              Login
            </IonButton>
            <IonButton
              expand="full"
              className="ion-margin-top"
              shape="round"
              onClick={navigateToRegister}
            >
              Sign up
            </IonButton>
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar className="no-border-footer">
          <div className="ion-text-center ion-padding footer-home">
            © 2025 Pendia by Joaquin. All rights reserved.
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
