import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { camera, logOutOutline } from "ionicons/icons";
import React, { useState } from "react";
import ChangePasswordModal from "../components/ChangePasswordModal";
import "./Tab4.css";

export const Tab4: React.FC = () => {
  const [name, setName] = useState("Joaquin");
  const [email, setEmail] = useState("joaquin@pendia.com");
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handlePasswordChange = () => {
    console.log("Password changed");
    setIsPasswordModalOpen(false);
  };

  return (
    <IonPage>
      <IonContent className="profile-content">
        <div className="profile-container">
          {/* Header */}
          <div className="profile-header-top">
            <IonIcon icon={undefined} /> {/* Spacer or Back button if needed */}
            <h1 className="profile-title">Contact info</h1>
          </div>

          {/* Avatar Section */}
          <div className="profile-avatar-section">
            <div className="profile-avatar-wrapper">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=JC&backgroundColor=666666&color=ffffff&fontSize=40"
                alt="Profile"
                className="profile-avatar-img"
              />
              <button className="profile-avatar-edit-btn">
                <IonIcon icon={camera} />
              </button>
            </div>
          </div>

          {/* Fields Section */}
          <div className="profile-fields">
            {/* Name */}
            <div className="profile-field-row">
              <div className="profile-field-info">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="profile-field-input"
                />
              </div>
              <button className="profile-change-btn">Change</button>
            </div>

            {/* Email */}
            <div className="profile-field-row">
              <div className="profile-field-info">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="profile-field-input"
                />
              </div>
              <button className="profile-change-btn">Change</button>
            </div>

            {/* Phone (Static for demo) */}
            <div className="profile-field-row">
              <div className="profile-field-info">
                <label>Phone Number</label>
                <div className="profile-field-value">-</div>
              </div>
              {/* No Change button if empty/static, or add one */}
            </div>

            {/* Security Section (kept as fields) */}
            <div
              className="profile-field-row"
              onClick={() => setIsPasswordModalOpen(true)}
            >
              <div className="profile-field-info">
                <label>Password</label>
                <div className="profile-field-value">••••••••</div>
              </div>
              <button className="profile-change-btn">Change</button>
            </div>
          </div>

          {/* Actions Section */}
          <div className="profile-actions-section">
            <IonButton
              expand="block"
              fill="outline"
              color="danger"
              className="profile-logout-button"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <IonIcon icon={logOutOutline} style={{ fontSize: "1.2rem" }} />
                <span>LOG OUT</span>
              </div>
            </IonButton>
          </div>
        </div>

        <ChangePasswordModal
          isOpen={isPasswordModalOpen}
          onClose={() => setIsPasswordModalOpen(false)}
          onSave={handlePasswordChange}
        />
      </IonContent>
    </IonPage>
  );
};
