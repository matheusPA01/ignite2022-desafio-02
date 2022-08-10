import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContext } from "./context/CartContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContext>
          <Router />
        </CartContext>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}