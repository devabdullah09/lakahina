function Offers() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light mb-3 sm:mb-4 md:mb-6 text-gray-900">Special Offers</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover exclusive offers and packages at our homes around the world.
          </p>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6 md:mb-8">
              Check back soon for our latest offers and special packages.
            </p>
            <a
              href="/book"
              className="inline-block px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
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

