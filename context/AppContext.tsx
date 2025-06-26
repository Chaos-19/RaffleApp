import React, { createContext, useContext, ReactNode } from "react";
import { useStorageState } from "../hooks/useStorageState"; // adjust path!

type ProfileData = {
  name: string;
  email: string;
  phoneNum: string;
  password: string;
};

type AppContextType = {
  myraffles: number[];
  profileData: ProfileData;
  updateMyRaffles: (raffles: number[]) => void;
  updateProfileData: (data: ProfileData) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside ProviderAppContext");
  return ctx;
};

type Props = {
  children: ReactNode;
};

const ProviderAppContext = ({ children }: Props) => {
  const [[loadingRaffles, storedRaffles], setStoredRaffles] = useStorageState("myraffles");
  const [[loadingProfile, storedProfile], setStoredProfile] = useStorageState("profileData");

  const updateMyRaffles = (raffles: number[]) => {
    setStoredRaffles(JSON.stringify(raffles));
  };

  const updateProfileData = (data: ProfileData) => {
    setStoredProfile(JSON.stringify(data));
  };

  const myraffles = storedRaffles ? JSON.parse(storedRaffles) : [];
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
        profileData,
        updateMyRaffles,
        updateProfileData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ProviderAppContext;
