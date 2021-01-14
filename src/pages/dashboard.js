import React from "react";
import DashboardSection from "./../components/DashboardSection";
import { requireAuth } from "./../util/auth.js";

function DashboardPage(props) {
  return (
    <DashboardSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Dashboard"
      subtitle=""
    />
  );
}

export default requireAuth(DashboardPage);
