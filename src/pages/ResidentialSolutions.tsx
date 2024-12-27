import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";

const residentialServices = [
  {
    title: "Sash Windows",
    description: "Perfect for traditional Victorian and Georgian properties",
    details: "Our sash window solutions preserve the original character of your period property while providing modern insulation benefits. We use specially designed systems that complement existing window frames.",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
  },
  {
    title: "Casement Windows",
    description: "Ideal for modern homes and apartments",
    details: "Custom-fitted secondary glazing for casement windows, offering excellent thermal and acoustic insulation without compromising the window's functionality.",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
  },
  {
    title: "Bay Windows",
    description: "Specialized solutions for bay window configurations",
    details: "Expertly designed secondary glazing systems that follow the contours of your bay windows, maintaining their aesthetic appeal while improving insulation.",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
  },
  {
    title: "Horizontal Sliding",
    description: "Perfect for wide window openings",
    details: "Smooth-operating horizontal sliding panels that provide easy access to primary windows. Ideal for large windows and offering excellent ventilation options.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705"
  },
  {
    title: "Lift Out",
    description: "Simple and practical solution",
    details: "Removable panels that can be completely lifted out for easy cleaning and maintenance. Perfect for windows that require occasional full access.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    title: "Combination",
    description: "Versatile mixed-style solutions",
    details: "Combining different opening styles in one unit to meet specific requirements. Ideal for unique window configurations or when different functionalities are needed.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b"
  },
];

const ResidentialSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Residential Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialServices.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm text-gray-500">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentialSolutions;