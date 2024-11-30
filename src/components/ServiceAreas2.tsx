import React from 'react';
import { MapPin } from 'lucide-react';

interface ServiceArea {
  city: string;
  zipCode: string;
}

const ServiceAreas: React.FC = () => {
  const cityAreas: ServiceArea[] = [
    { city: "Appliance Repair in Bloomingdale", zipCode: "60108" },
    { city: "Appliance Repair in Elk Grove Village", zipCode: "60007" },
    { city: "Appliance Repair in Schaumburg", zipCode: "60173, 60194, 60195" },
    { city: "Appliance Repair in Roselle", zipCode: "60172" },
    { city: "Appliance Repair in Bensenville", zipCode: "60106" },
    { city: "Appliance Repair in Addison", zipCode: "60101" },
    { city: "Appliance Repair in Elmhurst", zipCode: "60126" },
    { city: "Appliance Repair in Chicago", zipCode: "60601" },
    { city: "Appliance Repair in Elmwood", zipCode: "60706" },
    { city: "Appliance Repair in Mt. Prospect", zipCode: "60056" },
    { city: "Appliance Repair in Melrose Park", zipCode: "60160" },
    { city: "Appliance Repair in Maywood", zipCode: "60153" },
    { city: "Appliance Repair in Bellwood", zipCode: "60104" },
    { city: "Appliance Repair in Villa Park", zipCode: "60181" },
    { city: "Appliance Repair in Lombard", zipCode: "60148" },
    { city: "Appliance Repair in Oak Park", zipCode: "60301, 60302, 60303, 60304" },
    { city: "Appliance Repair in Glen Ellyn", zipCode: "60137" },
    { city: "Appliance Repair in Wheaton", zipCode: "60187" },
    { city: "Appliance Repair in West Chicago", zipCode: "60185" },
    { city: "Appliance Repair in Naperville", zipCode: "60540, 60563, 60564, 60565" },
    { city: "Appliance Repair in Downers Grove", zipCode: "60515, 60516" },
    { city: "Appliance Repair in Westmont", zipCode: "60559" },
    { city: "Appliance Repair in Batavia", zipCode: "60510" },
    { city: "Appliance Repair in St Charles", zipCode: "60174, 60175" },
    { city: "Appliance Repair in Carol Stream", zipCode: "60188" },
    { city: "Appliance Repair in Glendale Heights", zipCode: "60139" },
    { city: "Appliance Repair in Hoffman Estates", zipCode: "60169, 60192" },
    { city: "Appliance Repair in Rolling Meadows", zipCode: "60008" }
  ];

  const suburbAreas: ServiceArea[] = [
    { city: "Appliance Repair in Antioch", zipCode: "60002" },
    { city: "Appliance Repair in Arlington Heights", zipCode: "60004" },
    { city: "Appliance Repair in Buffalo Grove", zipCode: "60089" },
    { city: "Appliance Repair in Deerfield", zipCode: "60015" },
    { city: "Appliance Repair in Des Plaines", zipCode: "60016" },
    { city: "Appliance Repair in Elk Grove Village", zipCode: "60007" },
    { city: "Appliance Repair in Elmwood Park", zipCode: "60707" },
    { city: "Appliance Repair in Evanston", zipCode: "60201" },
    { city: "Appliance Repair in Glenview", zipCode: "60025" },
    { city: "Appliance Repair in Harwood Heights", zipCode: "60706" },
    { city: "Appliance Repair in Lincolnshire", zipCode: "60069" },
    { city: "Appliance Repair in Lincolnwood", zipCode: "60712" },
    { city: "Appliance Repair in Long Grove", zipCode: "60047" },
    { city: "Appliance Repair in Morton Grove", zipCode: "60053" },
    { city: "Appliance Repair in Mount Prospect", zipCode: "60056" },
    { city: "Appliance Repair in Mundelein", zipCode: "60060" },
    { city: "Appliance Repair in Niles", zipCode: "60714" },
    { city: "Appliance Repair in Norridge", zipCode: "60706" },
    { city: "Appliance Repair in Northbrook", zipCode: "60062" },
    { city: "Appliance Repair in Northfield", zipCode: "60063" },
    { city: "Appliance Repair in Park Ridge", zipCode: "60068" },
    { city: "Appliance Repair in Prospect Heights", zipCode: "60070" },
    { city: "Appliance Repair in Riverwoods", zipCode: "60015" },
    { city: "Appliance Repair in Rosemont", zipCode: "60018" },
    { city: "Appliance Repair in Skokie", zipCode: "60076" },
    { city: "Appliance Repair in Vernon Hills", zipCode: "60061" },
    { city: "Appliance Repair in Wheeling", zipCode: "60090" },
    { city: "Appliance Repair in Wilmette", zipCode: "60091" }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-emerald-900">Areas We Serve</h2>
          <p className="text-xl text-gray-600">Professional appliance repair services across Chicago and surrounding suburbs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-emerald-900">
              <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
              Chicago Neighborhoods
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cityAreas.map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-emerald-900">{area.city}</p>
                  <p className="text-gray-600 text-sm">{area.zipCode}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-emerald-900">
              <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
              Surrounding Suburbs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {suburbAreas.map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-emerald-900">{area.city}</p>
                  <p className="text-gray-600 text-sm">{area.zipCode}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;