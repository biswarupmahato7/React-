/* eslint-disable no-unused-vars */

import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkMode: ()=>{},
    lightMode: ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){ // own hooks
    return useContext(ThemeContext)
}