import React from 'react';
import ServiceLayout from './ServiceLayout';

const MicrowaveRepair = () => {
  return (
    <ServiceLayout
      title="Microwave & Oven Repair"
      image="https://images.pexels.com/photos/8082207/pexels-photo-8082207.jpeg?w=1260"
      description="Expert microwave repair services for all types and brands. From built-in to countertop models, we ensure safe and efficient repairs."
      features={[
        "Fast turnaround time",
        "Safety certified repairs",
        "All brands serviced",
        "Genuine replacement parts",
        "90-day warranty",
        "Affordable rates"
      ]}
      commonIssues={[
        "Not heating",
        "Turntable not working",
        "Display problems",
        "Door issues",
        "Unusual noises",
        "Sparking inside"
      ]}
    />
  );
};

export default MicrowaveRepair;