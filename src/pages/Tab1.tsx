import {
  IonAvatar,
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, personAdd, trash } from "ionicons/icons";
import React from "react";
import Person from "../model/PendiaInterface";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const people: Person[] = [
    {
      id: 1,
      name: "Juan Pérez",
      amount: 50,
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=JP&backgroundColor=666666&color=ffffff&fontSize=40",
    },
    {
      id: 2,
      name: "Ana Gómez",
      amount: 30,
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=666666&color=ffffff&fontSize=40",
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      amount: 20,
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=CR&backgroundColor=666666&color=ffffff&fontSize=40",
    },
    {
      id: 4,
      name: "María López",
      amount: 15,
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=ML&backgroundColor=666666&color=ffffff&fontSize=40",
    },
    {
      id: 5,
      name: "Pedro García",
      amount: 25,
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=PG&backgroundColor=666666&color=ffffff&fontSize=40",
    },
    {
      id: 5,
      name: "Pedro García",
      amount: 25,
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=PG&backgroundColor=666666&color=ffffff&fontSize=40",
    },
    {
      id: 5,
      name: "Pedro García",
      amount: 25,
      photo:
        "https://api.dicebear.com/7.x/initials/svg?seed=PG&backgroundColor=666666&color=ffffff&fontSize=40",
    },
  ];

  const total = people.reduce((acc, person) => acc + person.amount, 0);

  // const handleDeletePerson = (personId: number) => {

  // };

  // const handleAddPerson = () => {

  // };

  return (
    <IonPage>
      <IonContent fullscreen className="debts-content">
        <div className="debts-container">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Deudas</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard className="debts-total-card">
            <div className="debts-total-content">
              <div className="debts-total-info">
                <h3 className="debts-total-label">Total Pendiente</h3>
                <h1 className="debts-total-amount">€{total}</h1>
                <p className="debts-total-count">
                  {people.length} {people.length === 1 ? "persona" : "personas"}{" "}
                  te deben
                </p>
              </div>
              <div className="debts-total-icon">
                <IonIcon icon={personAdd} />
              </div>
            </div>
          </IonCard>

          <div className="debts-list">
            <h3 className="debts-list-title">Lista de Deudas</h3>

            {people.map((person) => (
              <IonCard key={person.id} className="debt-person-card">
                <IonItem lines="none" className="debt-person-item">
                  <IonAvatar slot="start" className="debt-person-avatar">
                    <img src={person.photo} alt={person.name} />
                  </IonAvatar>

                  <IonLabel className="debt-person-info">
                    <h3 className="debt-person-name">{person.name}</h3>
                    <p className="debt-person-amount">
                      Te debe €{person.amount}
                    </p>
                  </IonLabel>

                  <IonButton
                    fill="clear"
                    color="danger"
                    size="small"
                    className="debt-delete-button"
                    // onClick={() => handleDeletePerson(person.id)}
                  >
                    <IonIcon icon={trash} slot="icon-only" />
                  </IonButton>
                </IonItem>
              </IonCard>
            ))}
          </div>

          {/* Add Button */}
          <div className="debts-add-section">
            <IonButton
              expand="block"
              shape="round"
              className="debts-add-button"
              // onClick={handleAddPerson}
            >
              <IonIcon icon={add} slot="start" />
              Añadir nueva persona
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
