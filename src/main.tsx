import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Home from "./components/pages/Home.tsx";
import theme from "./styles/theme.ts";
import "./styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.tsx";
import CookiePolicy from "./components/pages/CookiePolicy.tsx";
import RiskManagementPolicy from "./components/pages/RiskManagementPolicy.tsx";
import TermsAndConditions from "./components/pages/TermsAndConditions.tsx";
import "./providers/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/policies/privacy" element={<PrivacyPolicy />} />
          <Route path="/policies/cookie" element={<CookiePolicy />} />
          <Route
            path="/policies/risk-management"
            element={<RiskManagementPolicy />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
