import React from 'react';
import ServiceLayout from './ServiceLayout';
import ServiceAreas from '../../components/ServiceAreas';
const VikingService = () => {
  return (<>
    <ServiceLayout
      title="Viking Appliance Service"
      image="https://www.lowcostappliancerepair.com/images/resource/viking-appliance-services.jpg"
      description="Specialized repair and maintenance services for Viking appliances. Our certified technicians are trained to work on all Viking products."
      features={[
        "Viking-certified technicians",
        "Genuine Viking parts",
        "Comprehensive diagnostics",
        "Preventive maintenance",
        "Extended warranty service",
        "Emergency repairs"
      ]}
      commonIssues={[
        "Temperature control issues",
        "Burner problems",
        "Oven not heating",
        "Ice maker repairs",
        "Ventilation issues",
        "Control panel malfunctions"
      ]}
    /><ServiceAreas/></>
  );
};

export default VikingService;