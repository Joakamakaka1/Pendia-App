import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import React from "react";
import "./Notifications.css";

const Notifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      title: "Apple stocks just increased",
      desc: "Check it out now.",
      time: "15min ago",
      image:
        "https://images.unsplash.com/photo-1611974765270-ca12586343bb?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      title: "Check out today's best investor",
      desc: "You'll learn from him",
      time: "3min ago",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      title: "Where do you see yourself",
      desc: "in the next ages.",
      time: "30secs ago",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=100&h=100&fit=crop",
    },
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="notifications-toolbar">
          <IonButtons slot="start">
            <IonBackButton icon={chevronBack} defaultHref="/menu/tab1" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="notifications-content">
        <div className="notifications-container">
          <h1 className="notifications-title">Notification</h1>

          <div className="notifications-list">
            {notifications.map((notif) => (
              <div key={notif.id} className="notif-item">
                <div className="notif-image-container">
                  <img src={notif.image} alt="" className="notif-image" />
                </div>
                <div className="notif-text">
                  <p className="notif-message">
                    <strong>{notif.title}</strong> <br />
                    {notif.desc}
                  </p>
                </div>
                <div className="notif-meta">
                  <span className="notif-time">{notif.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
