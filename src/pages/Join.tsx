function Join() {
  return (
    <div className="pt-16 sm:pt-20">
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 text-[#6b5d52] font-serif">
            Join Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Join us and for more info contact us
          </p>
          <a 
            href="mailto:Team@lakahina.com" 
            className="text-lg sm:text-xl md:text-2xl text-[#6b5d52] hover:text-[#5a4d42] transition-colors inline-block"
          >
            Team@lakahina.com
          </a>
        </div>
      </section>
    </div>
  )
}

export default Join

