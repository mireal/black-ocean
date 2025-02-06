import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Home from "./pages/Home.tsx";
import theme from "./styles/theme.ts";
import "./styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import RiskManagementPolicy from "./pages/RiskManagementPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import "./providers/i18n.ts";
import { SpeedInsights } from "@vercel/speed-insights/next";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpeedInsights/>
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
  </StrictMode>
);
