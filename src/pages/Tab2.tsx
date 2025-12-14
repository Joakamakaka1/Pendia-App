import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { checkmarkCircle, closeCircle } from "ionicons/icons";
import React, { useState } from "react";
import "./Tab2.css";

interface Request {
  id: number;
  name: string;
  amount: number;
  type: "payment" | "debt"; // 'payment' = wants to pay you, 'debt' = says you owe them
  photo: string;
  date: string;
}

const Tab2: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([
    {
      id: 1,
      name: "Sofía Martínez",
      amount: 15.5,
      type: "debt",
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=SM&backgroundColor=666666&color=ffffff&fontSize=40",
      date: "Hace 2 horas",
    },
    {
      id: 2,
      name: "Miguel Ángel",
      amount: 42.0,
      type: "payment",
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=MA&backgroundColor=666666&color=ffffff&fontSize=40",
      date: "Ayer",
    },
    {
      id: 3,
      name: "Lucía Fernández",
      amount: 9.99,
      type: "debt",
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=LF&backgroundColor=666666&color=ffffff&fontSize=40",
      date: "Hace 1 día",
    },
  ]);

  const removeRequest = (id: number) => {
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <IonPage>
      <IonContent fullscreen className="requests-content">
        <div className="requests-container">
          <div className="requests-header">
            {/* No spacer needed if left aligned or specific layout */}
            <h1 className="requests-title">Solicitudes</h1>
          </div>

          {requests.length === 0 ? (
            <div className="requests-empty">
              <div className="requests-empty-icon">
                <IonIcon icon={checkmarkCircle} />
              </div>
              <h3>¡Estás al día!</h3>
              <p>No tienes nuevas solicitudes pendientes.</p>
            </div>
          ) : (
            <div className="notification-list">
              {requests.map((request) => (
                <div key={request.id} className="notification-item">
                  <div className="notification-left">
                    <div className="notification-avatar">
                      <img src={request.photo} alt={request.name} />
                    </div>
                  </div>

                  <div className="notification-center">
                    <div className="notification-header">
                      <span className="notification-name">{request.name}</span>
                      <span className="notification-time">{request.date}</span>
                    </div>
                    <p className="notification-message">
                      {request.type === "debt"
                        ? "Dice que le debes"
                        : "Quiere pagarte"}{" "}
                      <span className="notification-amount">
                        €{request.amount}
                      </span>
                    </p>
                  </div>

                  <div className="notification-right">
                    <button
                      className="notification-action-btn btn-reject"
                      onClick={() => removeRequest(request.id)}
                    >
                      <IonIcon icon={closeCircle} size="large" />
                    </button>
                    <button
                      className="notification-action-btn btn-accept"
                      onClick={() => removeRequest(request.id)}
                    >
                      <IonIcon icon={checkmarkCircle} size="large" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
