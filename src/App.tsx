import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContext } from "./context/CartContext";
import { CheckoutFormContext } from "./context/FormContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContext>
          <CheckoutFormContext>
            <Router />
          </CheckoutFormContext>
        </CartContext>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}