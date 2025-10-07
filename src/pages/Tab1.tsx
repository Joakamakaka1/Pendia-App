import {
  IonAvatar,
  IonButton,
  IonCard,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { add, trash } from "ionicons/icons";
import React from "react";
import Person from "../model/PendiaInterface";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const people: Person[] = [
    {
      id: 1,
      name: "Juan Pérez",
      amount: 50,
      photo: "https://i.pravatar.cc/100?u=1",
    },
    {
      id: 2,
      name: "Ana Gómez",
      amount: 30,
      photo: "https://i.pravatar.cc/100?u=2",
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      amount: 20,
      photo: "https://i.pravatar.cc/100?u=3",
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      amount: 20,
      photo: "https://i.pravatar.cc/100?u=3",
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      amount: 20,
      photo: "https://i.pravatar.cc/100?u=3",
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      amount: 20,
      photo: "https://i.pravatar.cc/100?u=3",
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      amount: 20,
      photo: "https://i.pravatar.cc/100?u=3",
    },
  ];

  const total = people.reduce((acc, person) => acc + person.amount, 0);

  return (
    <IonPage>
      <IonContent fullscreen className="debts-content">
        <div className="total-container">
          <h2 className="total-amount">Total: €{total}</h2>
        </div>

        <div className="people-list">
          {people.map((person) => (
            <IonCard key={person.id} className="person-card">
              <IonItem lines="none" className="person-item">
                <IonAvatar slot="start">
                  <img src={person.photo} alt={person.name} />
                </IonAvatar>
                <IonLabel className="person-info">
                  <h2>{person.name}</h2>
                  <p>Te debe €{person.amount}</p>
                </IonLabel>
                <IonButton fill="clear" color="danger" size="small">
                  <IonIcon icon={trash} slot="icon-only" />
                </IonButton>
              </IonItem>
            </IonCard>
          ))}
        </div>

        {/* FAB fijo en el contenido central */}
        <IonButton expand="block" className="floating-ion-button">
          <IonIcon icon={add} slot="start" />
          Añadir nueva persona
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
