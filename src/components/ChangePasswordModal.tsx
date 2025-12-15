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
import "./AddDebtorModal.css"; // Reusing the same CSS styles for consistency

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    // Logic to validate and change password would go here
    onSave();
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="custom-modal">
      <IonHeader className="modal-header">
        <IonToolbar>
          <IonTitle>Cambiar Contraseña</IonTitle>
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
            <label>Contraseña Actual</label>
            <input
              type="password"
              placeholder="********"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="custom-input"
            />
          </div>

          <div className="modal-input-group">
            <label>Nueva Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="custom-input"
            />
          </div>

          <div className="modal-input-group">
            <label>Confirmar Nueva Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="custom-input"
            />
          </div>

          <IonButton
            expand="block"
            className="modal-save-button"
            onClick={handleSave}
          >
            Actualizar Contraseña
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default ChangePasswordModal;
