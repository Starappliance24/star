import React from 'react';
import ServiceLayout from './ServiceLayout';
import ServiceAreas from '../../components/ServiceAreas';

const WasherDryerRepair = () => {
  return (<>
    <ServiceLayout
      title="Washer & Dryer Repair"
      image="https://images.pexels.com/photos/4700411/pexels-photo-4700411.jpeg?w=1260"
      description="Expert washer and dryer repair services within 50 miles of our location. We service all major brands including Whirlpool, Samsung, LG, Maytag, and more."
      features={[
        "Same-day service available",
        "90-day warranty on parts and labor",
        "Certified technicians",
        "All major brands serviced",
        "Competitive pricing",
        "Emergency repairs available"
      ]}
      commonIssues={[
        "Machine not turning on",
        "Unusual noises",
        "Leaking water",
        "Not spinning or agitating",
        "Door or lid problems",
        "Dryer not heating"
      ]}
    /><ServiceAreas />
    </>
  );
};

export default WasherDryerRepair;