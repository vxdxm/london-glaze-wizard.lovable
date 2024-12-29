import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlassOptions from "@/components/residential/GlassOptions";

const LiftOut = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Lift Out Secondary Glazing</h1>
            <p className="text-gray-700 mb-6">
              Our lift out secondary glazing solutions offer maximum accessibility and ease of maintenance.
              Perfect for windows that require regular cleaning or seasonal ventilation adjustments. These panels 
              are designed with a unique lift-out mechanism that allows for complete removal without tools, 
              making them ideal for listed buildings and properties where permanent alterations aren't permitted. 
              The panels provide excellent thermal insulation and noise reduction while maintaining the original 
              character of your windows.
            </p>
          </div>
          <div>
            <img 
              src="/lovable-uploads/3bfb7e32-d21b-47d7-91e3-f374ca8d25c0.png"
              alt="Lift out window demonstration"
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Available Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Standard Lift Out Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/3bfb7e32-d21b-47d7-91e3-f374ca8d25c0.png"
                    alt="Standard lift out panel"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Our classic lift out panel design provides full access for cleaning and maintenance.
                    Features secure fixing mechanisms and weather-tight seals.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Easy removal and replacement</li>
                    <li>Secure fixing points</li>
                    <li>Weather-resistant seals</li>
                    <li>Lightweight aluminum frame</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick-Release System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
                    alt="Quick release system demonstration"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Advanced quick-release mechanism for effortless panel removal.
                    Perfect for frequent access requirements.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>One-touch release mechanism</li>
                    <li>Enhanced safety features</li>
                    <li>Tool-free operation</li>
                    <li>Ideal for high-level windows</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frame Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Aluminum alloy frame construction</li>
                  <li>Powder-coated finish options</li>
                  <li>Multiple color choices available</li>
                  <li>Thermal break technology</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Anti-lift mechanisms</li>
                  <li>Reinforced corner joints</li>
                  <li>Tamper-resistant fixings</li>
                  <li>Optional security glass</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <GlassOptions />
      </div>
    </div>
  );
};

export default LiftOut;
