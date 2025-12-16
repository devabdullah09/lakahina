function Offers() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-4 sm:mb-6 text-gray-900 px-4">Special Offers</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover exclusive offers and packages at our homes around the world.
          </p>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
              Check back soon for our latest offers and special packages.
            </p>
            <a
              href="/book"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offers

