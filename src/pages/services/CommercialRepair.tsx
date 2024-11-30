import React from 'react';
import ServiceLayout from './ServiceLayout';
import ServiceAreas from '../../components/ServiceAreas';

const CommercialRepair = () => {
  return (<>
    <ServiceLayout
      title="Commercial Appliance Repair"
      image="https://images.pexels.com/photos/4700383/pexels-photo-4700383.jpeg?w=1260"
      description="Professional repair services for commercial kitchens, restaurants, and businesses. We understand the importance of minimal downtime."
      features={[
        "24/7 emergency service",
        "Priority response",
        "Commercial-grade parts",
        "All brands serviced",
        "Preventive maintenance plans",
        "Licensed & insured"
      ]}
      commonIssues={[
        "Commercial refrigeration",
        "Industrial ovens",
        "Dishwashing systems",
        "Food warmers",
        "Ice machines",
        "Commercial HVAC"
      ]}
    /><ServiceAreas/></>
  );
};

export default CommercialRepair;