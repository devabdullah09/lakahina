function Join() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 md:mb-8 text-[#6b5d52] font-serif">
            Join Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8">
            Join us and for more info contact us
          </p>
          <a 
            href="mailto:Team@lakahina.com" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6b5d52] hover:text-[#5a4d42] transition-colors inline-block break-all"
          >
            Team@lakahina.com
          </a>
        </div>
      </section>
    </div>
  )
}

export default Join

