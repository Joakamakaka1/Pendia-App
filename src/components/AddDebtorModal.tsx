import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React, { useState } from "react";
import "./AddDebtorModal.css";

interface AddDebtorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, amount: number) => void;
}

const AddDebtorModal: React.FC<AddDebtorModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<string>("");

  const handleSave = () => {
    if (name && amount) {
      onSave(name, parseFloat(amount));
      setName("");
      setAmount("");
      onClose();
    }
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="custom-modal">
      <IonHeader className="modal-header">
        <IonToolbar>
          <IonTitle slot="start">Nuevo Deudor</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="modal-content">
        <div className="modal-form">
          <div className="modal-input-group">
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Ej. Juan Pérez"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="custom-input"
            />
          </div>

          <div className="modal-input-group">
            <label>Cantidad (€)</label>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="custom-input"
            />
          </div>

          <IonButton
            expand="block"
            className="modal-save-button"
            onClick={handleSave}
          >
            Guardar
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default AddDebtorModal;
