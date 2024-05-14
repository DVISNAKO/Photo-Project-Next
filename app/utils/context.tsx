import { createContext } from "react";

export const LanguageState = createContext<{ language: boolean; setLanguage: React.Dispatch<React.SetStateAction<boolean>> }>({ language: false, setLanguage: () => {} });
