import { Link } from 'react-router-dom'
import { stories } from '../data/stories'

function Journal() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light mb-3 sm:mb-4 md:mb-6 text-gray-900">Our Stories</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our stories define us, inspire us and unite us. Every journey is a story worth sharing.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {stories.map((story) => (
              <Link
                key={story.id}
                to="#"
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-1 sm:mb-2 group-hover:underline">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">{story.description}</p>
                  <p className="text-gray-500 text-xs">{story.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journal

