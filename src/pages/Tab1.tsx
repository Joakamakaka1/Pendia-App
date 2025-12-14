import {
  IonButton,
  IonCard,
  IonContent,
  IonIcon,
  IonPage,
  IonTitle,
} from "@ionic/react";
import { add, notificationsOutline, personAdd, trash } from "ionicons/icons";
import React, { useState } from "react";
import AddDebtorModal from "../components/AddDebtorModal";
import Person from "../model/PendiaInterface";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([
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
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = people.reduce((acc, person) => acc + person.amount, 0);

  const handleDeletePerson = (personId: number) => {
    setPeople(people.filter((p) => p.id !== personId));
  };

  const handleAddPerson = (name: string, amount: number) => {
    const newPerson: Person = {
      id: Date.now(),
      name,
      amount,
      photo: `https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=666666&color=ffffff&fontSize=40`,
    };
    setPeople([...people, newPerson]);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="debts-content">
        <div className="debts-container">
          <div className="debts-header">
            <div>
              <IonTitle className="debts-title">Mis Deudores</IonTitle>
              <p className="debts-subtitle">Así van tus cuentas</p>
            </div>
            <IonButton
              fill="clear"
              className="debts-notification-btn"
              routerLink="/notifications"
            >
              <IonIcon icon={notificationsOutline} />
              <span className="notification-badge">3</span>
            </IonButton>
          </div>

          <IonCard className="debts-total-card">
            <div className="debts-total-content">
              <div>
                <span className="debts-total-label">Total por cobrar</span>
                <h1 className="debts-total-amount">€{total.toFixed(2)}</h1>
                <div className="debts-total-pill">
                  <IonIcon icon={personAdd} />
                  <span>
                    {people.length}{" "}
                    {people.length === 1 ? "persona" : "personas"}
                  </span>
                </div>
              </div>
            </div>
          </IonCard>

          <div className="debts-list-container">
            <div className="debts-list-header">
              <h3>Listado</h3>
              <span className="debts-count-badge">{people.length}</span>
            </div>

            <div className="debts-list">
              {people.map((person) => (
                <div key={person.id} className="debt-item">
                  <div className="debt-item-left">
                    <div className="debt-person-avatar">
                      <img src={person.photo} alt={person.name} />
                    </div>
                    <div className="debt-person-info">
                      <h3 className="debt-person-name">{person.name}</h3>
                      <p className="debt-person-status">Pendiente</p>
                    </div>
                  </div>
                  <div className="debt-item-right">
                    <span className="debt-person-amount">€{person.amount}</span>
                    <IonButton
                      fill="clear"
                      color="medium"
                      className="debt-delete-button"
                      onClick={() => handleDeletePerson(person.id)}
                    >
                      <IonIcon icon={trash} slot="icon-only" color="danger" />
                    </IonButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add Button - Floating Style */}
        <div className="debts-fab-container">
          <IonButton
            expand="block"
            shape="round"
            className="debts-add-button"
            onClick={() => setIsModalOpen(true)}
          >
            <IonIcon icon={add} slot="start" />
            Nuevo deudor
          </IonButton>
        </div>

        <AddDebtorModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddPerson}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
