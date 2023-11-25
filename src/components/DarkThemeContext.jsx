// import { createContext, useContext, useState } from "react";

// const DarkTheme = createContext();

// export const DarkThemeContext = ({ children }) => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkTheme((prevTheme) => !prevTheme);
//   };

//   return (
//     <DarkTheme.Provider value={{ isDarkTheme, toggleTheme }}>
//       {children}
//     </DarkTheme.Provider>
//   );
// };

// export const useDarkTheme = () => {
//   return useContext(DarkTheme);
// };

