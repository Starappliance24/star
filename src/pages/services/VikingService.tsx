import React from 'react';
import ServiceLayout from './ServiceLayout';

const VikingService = () => {
  return (
    <ServiceLayout
      title="Viking Appliance Service"
      image="https://images.pexels.com/photos/10450051/pexels-photo-10450051.jpeg?w=1260"
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
    />
  );
};

export default VikingService;