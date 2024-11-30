import React from 'react';
import ServiceLayout from './ServiceLayout';
import ServiceAreas from '../../components/ServiceAreas';
const MicrowaveRepair = () => {
  return (<>
    <ServiceLayout
      title="Air Conditioner & Oven Repair"
      image="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?w=1260"
      description="Expert air conditioner and oven repair services for all types and brands. From wall-mounted to portable air conditioners and standard to convection ovens, we ensure safe and efficient repairs.



"
      features={[
        "Fast turnaround time",
        "Safety certified repairs",
        "All brands serviced",
        "Genuine replacement parts",
        "90-day warranty",
        "Affordable rates"
      ]}
      commonIssues={[
        "Not cooling",
        "Turntable not working",
        "Display problems",
        "Door issues",
        "Unusual noises",
        "Sparking inside"
      ]}
    /><ServiceAreas/></>
  );
};

export default MicrowaveRepair;