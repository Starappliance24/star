import React from 'react';
import ServiceLayout from './ServiceLayout';

const DishwasherRepair = () => {
  return (
    <ServiceLayout
      title="Dishwasher Repair"
      image="https://images.pexels.com/photos/3829560/pexels-photo-3829560.jpeg?w=1260"
      description="Professional dishwasher repair services for all major brands. We fix common issues and perform maintenance to keep your dishwasher running efficiently."
      features={[
        "Same-day service available",
        "All major brands serviced",
        "Expert diagnostics",
        "Quality replacement parts",
        "Warranty on all repairs",
        "Competitive pricing"
      ]}
      commonIssues={[
        "Not cleaning properly",
        "Leaking water",
        "Strange noises",
        "Won't start or drain",
        "Door latch problems",
        "Soap dispenser issues"
      ]}
    />
  );
};

export default DishwasherRepair;