import React, { createContext, ReactNode, useContext } from "react";
import { useStorageState } from "../hooks/useStorageState"; // adjust path!

type ProfileData = {
  name: string;
  email: string;
  phoneNum: string;
  password: string;
  profileImage?: string;
};
export type Notification = {
  id: string;
  title: string;
  type: "Winner" | "Wallet" | "Entry" | "PasswordReset";
  message: string;
  date: string;
  read: boolean;
};

type MyRaffleType = {
  raffleId: number;
  tiketId: string;
};

type AppContextType = {
  myraffles: MyRaffleType[];
  notifications: Notification[];
  profileData: ProfileData;
  updateMyRaffles: (raffles: MyRaffleType[]) => void;
  updateProfileData: (data: ProfileData) => void;
  updateNotification: (data: Notification[]) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx)
    throw new Error("useAppContext must be used inside ProviderAppContext");
  return ctx;
};

type Props = {
  children: ReactNode;
};

const ProviderAppContext = ({ children }: Props) => {
  const [[loadingRaffles, storedRaffles], setStoredRaffles] =
    useStorageState("myraffles");
  const [[loadingProfile, storedProfile], setStoredProfile] =
    useStorageState("profileData");
  const [[loadingNotifications, storedNotification], setStoredNotification] =
    useStorageState("Notifications");

  const updateMyRaffles = (raffles: MyRaffleType[]) => {
    setStoredRaffles(JSON.stringify(raffles));
  };

  const updateProfileData = (data: ProfileData) => {
    setStoredProfile(JSON.stringify(data));
  };
  const updateNotification = (data: Notification[]) => {
    setStoredNotification(JSON.stringify(data));
  };

  const myraffles = storedRaffles ? JSON.parse(storedRaffles) : [];
  const notification = storedNotification ? JSON.parse(storedNotification) : [];
  const profileData: ProfileData = storedProfile
    ? JSON.parse(storedProfile)
    : {
        name: "",
        email: "",
        phoneNum: "",
        password: "",
      };

  // Optional: wait for loading to finish before rendering children
  if (loadingRaffles || loadingProfile) return null; // or splash screen

  return (
    <AppContext.Provider
      value={{
        myraffles,
        notifications: notification,
        profileData,
        updateMyRaffles,
        updateProfileData,
        updateNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ProviderAppContext;
