import React from 'react';
import ServiceLayout from './ServiceLayout';
import ServiceAreas from '../../components/ServiceAreas';

const FurnaceRepair = () => {
  return (<>
    <ServiceLayout
      title="Furnace Repair"
      image="https://images.pexels.com/photos/16531199/pexels-photo-16531199/free-photo-of-thermostats-hanging-on-wall.jpeg?w=1260"
      description="Professional furnace repair and maintenance services. We ensure your heating system runs efficiently and safely all season long."
      features={[
        "24/7 emergency service",
        "Safety inspections",
        "All brands serviced",
        "Carbon monoxide testing",
        "Preventive maintenance",
        "Energy efficiency optimization"
      ]}
      commonIssues={[
        "No heat",
        "Uneven heating",
        "Strange noises",
        "Pilot light issues",
        "Thermostat problems",
        "High energy bills"
      ]}
    /><ServiceAreas />
    </>
  );
};

export default FurnaceRepair;