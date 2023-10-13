// ** React Imports
import { Role } from "@/const/role";
import { User } from "@/models/user";
import { createContext, useState } from "react";
// ** ThemeConfig Import

const initialUser: User | null = {
  role: Role.CUSTOMER,
  username: "",
  displayname: "",
};

// ** Create Context
export const UserContext = createContext<User | null>(initialUser);
interface UserContextProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserContextProps) => {
  // ** State
  const [user, setUser] = useState<User | null>(initialUser);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const UserConsumer = UserContext.Consumer;
