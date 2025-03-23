import React from "react";
import { SidebarSettings } from "~widgets/sidebar-settings";
import { LocationsList } from "~features/location-list";
import { ServicesList } from "~features/services-list";
import { CompanyGeneralSettings } from "~features/company-settings";
export const SettingsPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = React.useState("locations");

  return (
    <div className="flex">
      <SidebarSettings
        selectedSection={selectedSection}
        onSectionSelect={setSelectedSection}
      />

      {selectedSection === "locations" && (
        <div className="flex-grow p-4">
          <LocationsList />
        </div>
      )}

      {selectedSection === "services" && (
        <div className="flex-grow p-4">
          <ServicesList />
        </div>
      )}
      {selectedSection === "company-general" && (
        <div className="flex-grow p-4">
          <CompanyGeneralSettings />
        </div>
      )}
    </div>
  );
};
