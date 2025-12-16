function About() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-4 sm:mb-6 text-gray-900 px-4">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Learn more about La Kahina and our mission.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-gray-900">Our Story</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Welcome to La Kahina, where adventure meets tranquility in the heart of nature.
                We are dedicated to providing unique experiences that connect you with the natural
                world and create lasting memories.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Our mission is to offer immersive experiences that blend comfort, adventure, and
                sustainability, allowing our guests to disconnect from the everyday and reconnect
                with what truly matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

