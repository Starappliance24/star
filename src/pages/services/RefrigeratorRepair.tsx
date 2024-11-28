import React from 'react';
import ServiceLayout from './ServiceLayout';
import ServiceAreas from '../../components/ServiceAreas';

const RefrigeratorRepair = () => {
  return (<>
    <ServiceLayout
      title="Refrigerator Repair"
      image="https://images.pexels.com/photos/6835090/pexels-photo-6835090.jpeg?w=1260"
      description="Professional refrigerator repair services for residential and commercial units. We service all types including French door, side-by-side, and built-in models."
      features={[
        "24/7 emergency service",
        "All major brands serviced",
        "Same-day appointments",
        "Factory-certified parts",
        "Upfront pricing",
        "Local, experienced technicians"
      ]}
      commonIssues={[
        "Not cooling properly",
        "Ice maker problems",
        "Water leaks",
        "Strange noises",
        "Door seal issues",
        "Temperature fluctuations"
      ]}
    /><ServiceAreas />
    </>
  );
};

export default RefrigeratorRepair;