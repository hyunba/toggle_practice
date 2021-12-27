// import { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme } from "./theme";
// import { useState } from "react";
import Circle from "./Circle";

function App() {
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => setIsDark(current => !current);
  return (
    // <>
    //   <ThemeProvider theme = {isDark ? darkTheme : lightTheme}>
    //     <button onClick={toggleDark}>Toggle Mode</button>
      <div>
        <Circle/>
      </div>
    //   </ThemeProvider>
    // </>
  );
}

export default App;
