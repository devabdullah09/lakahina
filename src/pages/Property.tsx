import { useParams, Link } from 'react-router-dom'
import { properties } from '../data/properties'

function Property() {
  const { slug } = useParams<{ slug: string }>()
  const property = properties.find((p) => p.slug === slug)

  if (!property) {
    return (
      <div className="pt-16 sm:pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4">Property Not Found</h1>
          <Link to="/" className="text-gray-600 hover:text-gray-900 underline text-sm sm:text-base">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      {/* Hero Image */}
      <section className="relative min-h-[40vh] h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-white">
          <div className="container mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-light mb-2 sm:mb-3 md:mb-4">
              {property.name} | {property.location}
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white/90 line-clamp-2 sm:line-clamp-none">{property.description}</p>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 md:mb-6 text-gray-900">About {property.name}</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                Experience the magic of {property.name}, located in the heart of {property.location}.
                {property.description} This unique destination offers an unparalleled experience
                that combines luxury, adventure, and connection with nature and local culture.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Our carefully curated spaces and experiences are designed to create meaningful
                connections and lasting memories. Whether you're seeking adventure, relaxation, or
                inspiration, {property.name} provides the perfect setting for your journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-12">
              <Link
                to="/book"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base text-center"
              >
                Book Now
              </Link>
              <Link
                to="/offers"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium text-sm sm:text-base text-center"
              >
                View Offers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Properties */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12 text-center text-gray-900 px-4">
            Explore Other Homes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties
              .filter((p) => p.id !== property.id)
              .slice(0, 3)
              .map((relatedProperty) => (
                <Link
                  key={relatedProperty.id}
                  to={`/property/${relatedProperty.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <img
                      src={relatedProperty.image}
                      alt={relatedProperty.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-1">
                    {relatedProperty.name} | {relatedProperty.location}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{relatedProperty.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Property

