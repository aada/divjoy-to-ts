import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import PurchasePage from "./purchase";
import AuthPage from "./auth";
import { Switch, Route, Router } from "./../util/router.js";
import FirebaseActionPage from "./firebase-action.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { AuthProvider } from "./../util/auth.js";

function App(props) {
  return (
    <AuthProvider>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/purchase/:plan" component={PurchasePage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route
              exact
              path="/firebase-action"
              component={FirebaseActionPage}
            />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="light"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="© 2020 Company"
            logo="https://uploads.divjoy.com/logo.svg"
          />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
