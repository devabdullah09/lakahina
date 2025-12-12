function Offers() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900">Special Offers</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover exclusive offers and packages at our homes around the world.
          </p>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-lg mb-8">
              Check back soon for our latest offers and special packages.
            </p>
            <a
              href="/book"
              className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
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

