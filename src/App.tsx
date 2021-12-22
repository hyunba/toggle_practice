import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark(current => !current);
  return (
    <>
      <ThemeProvider theme = {isDark ? darkTheme : lightTheme}>
        <button onClick={toggleDark}>Toggle Mode</button>

      </ThemeProvider>
    </>
  );
}

export default App;
