import React from 'react';
import { MapPin } from 'lucide-react';

interface ServiceArea {
  city: string;
  zipCode: string;
}

const ServiceAreas: React.FC = () => {
  const cityAreas: ServiceArea[] = [
    { city: "Albany Park", zipCode: "60625" },
    { city: "Andersonville", zipCode: "60640" },
    { city: "Beverly", zipCode: "60643" },
    { city: "Bridgeport", zipCode: "60608" },
    { city: "Bronzeville", zipCode: "60653" },
    { city: "Bucktown", zipCode: "60622" },
    { city: "Chatham", zipCode: "60620" },
    { city: "Chinatown", zipCode: "60608" },
    { city: "DePaul", zipCode: "60614" },
    { city: "Dearborn Park", zipCode: "60605" },
    { city: "Edgewater", zipCode: "60640, 60660" },
    { city: "Edison Park", zipCode: "60630" },
    { city: "Englewood", zipCode: "60636" },
    { city: "Gold Coast", zipCode: "60610" },
    { city: "Greektown", zipCode: "60607" },
    { city: "Horner Park", zipCode: "60618" },
    { city: "Humboldt Park", zipCode: "60647" },
    { city: "Hyde Park", zipCode: "60615" },
    { city: "Irving Park", zipCode: "60641" },
    { city: "Lakeview", zipCode: "60657" },
    { city: "Lincoln Park", zipCode: "60614" },
    { city: "Lincoln Square", zipCode: "60625" },
    { city: "Logan Square", zipCode: "60647" },
    { city: "Loop", zipCode: "60601" }
  ];

  const suburbAreas: ServiceArea[] = [
    { city: "Antioch", zipCode: "60002" },
    { city: "Arlington Heights", zipCode: "60004" },
    { city: "Buffalo Grove", zipCode: "60089" },
    { city: "Deerfield", zipCode: "60015" },
    { city: "Des Plaines", zipCode: "60016" },
    { city: "Elk Grove Village", zipCode: "60007" },
    { city: "Elmwood Park", zipCode: "60707" },
    { city: "Evanston", zipCode: "60201" },
    { city: "Glenview", zipCode: "60025" },
    { city: "Harwood Heights", zipCode: "60706" },
    { city: "Lincolnshire", zipCode: "60069" },
    { city: "Lincolnwood", zipCode: "60712" },
    { city: "Long Grove", zipCode: "60047" },
    { city: "Morton Grove", zipCode: "60053" },
    { city: "Mount Prospect", zipCode: "60056" },
    { city: "Mundelein", zipCode: "60060" },
    { city: "Niles", zipCode: "60714" },
    { city: "Norridge", zipCode: "60706" },
    { city: "Northbrook", zipCode: "60062" },
    { city: "Northfield", zipCode: "60063" },
    { city: "Park Ridge", zipCode: "60068" },
    { city: "Prospect Heights", zipCode: "60070" },
    { city: "Riverwoods", zipCode: "60015" },
    { city: "Rosemont", zipCode: "60018" },
    { city: "Skokie", zipCode: "60076" },
    { city: "Vernon Hills", zipCode: "60061" },
    { city: "Wheeling", zipCode: "60090" },
    { city: "Wilmette", zipCode: "60091" }
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