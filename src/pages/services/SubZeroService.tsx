import React from 'react';
import ServiceLayout from './ServiceLayout';
import ServiceAreas from '../../components/ServiceAreas';

const SubZeroService = () => {
  return (<>
    <ServiceLayout
      title="Sub-Zero & Wolf Appliance Service"
      image="https://images.pexels.com/photos/8031965/pexels-photo-8031965.jpeg?w=1260"
      description="Specialized repair and maintenance for Sub-Zero and Wolf luxury appliances. Factory-certified technicians ensuring the highest quality service."
      features={[
        "Factory-certified technicians",
        "Genuine Sub-Zero & Wolf parts",
        "Preventive maintenance",
        "Warranty service",
        "Emergency repairs",
        "Expert diagnostics"
      ]}
      commonIssues={[
        "Temperature control",
        "Ice maker problems",
        "Water leaks",
        "Noise issues",
        "Display malfunctions",
        "Performance optimization"
      ]}
    /><ServiceAreas />
    </>
  );
};

export default SubZeroService;