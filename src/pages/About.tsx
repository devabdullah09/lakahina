import { useEffect, useRef, useState } from 'react'
import { getR2Url } from '../config/r2-assets'

// Component for sections with images that match exact height (similar to ExperienceDetail)
function SectionWithImage({
  title,
  content,
  images,
  isImageLeft,
}: {
  title?: string
  content: string | JSX.Element
  images: string[]
  isImageLeft: boolean
}) {
  const textRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [imageHeight, setImageHeight] = useState<number | null>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        const textHeight = textRef.current.offsetHeight
        setImageHeight(textHeight)
      }
    }

    updateHeight()
    const timeout1 = setTimeout(updateHeight, 100)
    const timeout2 = setTimeout(updateHeight, 500)
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [content, title])

  const imagesToShow = images && Array.isArray(images) && images.length > 0 ? images.filter(Boolean) : []

  return (
    <div className={`grid grid-cols-1 ${imagesToShow.length > 0 ? 'lg:grid-cols-5' : ''} gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-6xl mx-auto px-0`}>
      {imagesToShow.length > 0 && (
        <div
          ref={imageContainerRef}
          className={`lg:col-span-2 flex flex-col justify-start ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
          style={imageHeight ? { height: `${imageHeight}px` } : undefined}
        >
          <div className="w-full h-full flex flex-col gap-0">
            {imagesToShow.map((img, imgIdx) => (
              <div
                key={imgIdx}
                className={imagesToShow.length > 1 ? 'flex-1' : 'h-full'}
                style={imagesToShow.length > 1 ? undefined : { height: '100%' }}
              >
                <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={img}
                    alt={`About La Kahina ${imgIdx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div ref={textRef} className={`${imagesToShow.length > 0 ? 'lg:col-span-3' : ''} ${isImageLeft ? 'lg:order-2' : 'lg:order-1'} flex flex-col`}>
        {title && (
          <h2 className="section-title font-courier text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#6b5d52] mb-6 sm:mb-8 font-normal uppercase tracking-wide text-left">
            {title}
          </h2>
        )}
        <div className="text-[#6b5d52] text-sm sm:text-base md:text-lg leading-loose font-light space-y-4 flex-1">
          {typeof content === 'string' ? (
            <div className="space-y-4">
              {content.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  )
}

function About() {
  // Define images for About page sections
  const aboutImage1 = getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07088.jpg')
  const aboutImage2 = getR2Url('experiences/5. La Kahina, 2025/gallery/97-DSCF8932.jpg')
  const aboutImage3 = getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-03-16-00-10.jpg')
  const aboutImage4 = getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130283.jpg')
  const communityImage = getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-149.jpg')
  const artistsImage = getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07918.jpg')
  const partnersImage = getR2Url('experiences/5. La Kahina, 2025/gallery/217-DSCF9156.jpg')

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      {/* Hero / About Us Section */}
      <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* First Section: Title and Introduction with Image */}
          <SectionWithImage
            title="About Us — La Kahina"
            content={
              <>
                <p>
                  La Kahina is a community born from the dust of <strong>Black Rock City</strong>.
                </p>
                <p>
                  It emerged from a vision of cross-cultural encounters, weaving together the spirit of
                  the desert with the depth of Moroccan ancestral culture.
                </p>
                <p>
                  In a world of digital nomadism, La Kahina invites you to be not rootless, but{' '}
                  <strong>deeply rooted</strong> nomads—carrying home within, while the land holds you.
                </p>
              </>
            }
            images={[aboutImage1]}
            isImageLeft={false}
          />

          {/* Second Section: The Name and Ritual */}
          <SectionWithImage
            content={
              <>
                <p>
                  The name La Kahina comes from <strong>Kahina</strong>, the legendary Amazigh queen—
                  a figure of resistance, wisdom, and connection to the land.
                </p>
                <p>
                  Every gathering begins with a Sufi night ritual: a shared moment of presence,
                  sound, and intention before the journey unfolds.
                </p>
              </>
            }
            images={[aboutImage2]}
            isImageLeft={true}
          />

          {/* Third Section: Community Growth */}
          <SectionWithImage
            content={
              <>
                <p>
                  Born in 2022, La Kahina has grown into an international community. The bonds formed
                  here extend far beyond single events—they are carried across borders and time.
                </p>
                <p>
                  La Kahina is open and inclusive. Its values are inspired by the principles of
                  Burning Man: radical inclusion, gifting, decommodification, radical self-reliance,
                  radical self-expression, communal effort, civic responsibility, leave no trace, and
                  participation.
                </p>
              </>
            }
            images={[aboutImage3]}
            isImageLeft={false}
          />

          {/* Fourth Section: Closing Statement */}
          <SectionWithImage
            content={
              <div className="pt-4 space-y-3">
                <p className="font-medium text-lg sm:text-xl md:text-2xl">More than an event, La Kahina is a home in movement.</p>
                <p className="text-base sm:text-lg">A place where the land remembers you.</p>
                <p className="text-base sm:text-lg">A community rooted in Desert, carried across the world.</p>
              </div>
            }
            images={[aboutImage4]}
            isImageLeft={true}
          />
        </div>
      </section>

      {/* Community Section */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionWithImage
            title="Community"
            content={
              <ul className="space-y-2 text-[#6b5d52] text-sm sm:text-base">
                <li><strong>Anna Katarina</strong> — Germany — Strategy and development.</li>
                <li><strong>Philipp</strong> — Germany — Film director (Black Sheep).</li>
                <li><strong>Nicola Ciccarelli</strong> — Italy — Filmmaker.</li>
                <li><strong>Paulina Escutia</strong> — Mexico — Photographer and social media manager.</li>
                <li><strong>Yasmina Zriouil</strong> — Morocco — Founder, architect and cultural curator bridging space, sound, and ritual.</li>
                <li><strong>Rania Triki</strong> — Morocco — Co-producer and artist manager shaping creative flow and cohesion.</li>
                <li><strong>Ricardo Gil</strong> — Morocco — Architect designing immersive and sustainable structures.</li>
                <li><strong>Ines Rau</strong> — Paris — Ambassador, model, activist and artist supporting global presence.</li>
                <li><strong>Samir Bouhdary</strong> — USA — Strategy and long-term development.</li>
                <li><strong>José Murillo</strong> — Mexico — 3D design and on-site build coordination producer.</li>
                <li><strong>Avy Shanti</strong> — Israel — Sound engineer and stage manager.</li>
                <li><strong>Santiago Alcalá</strong> — Mexico — Production and logistics management.</li>
                <li><strong>Luca Crostella</strong> — USA — Kitchen and hospitality lead.</li>
                <li><strong>Mathilde Deer</strong> — France — Photographer focused on presence and empowerment.</li>
                <li><strong>Kamila Sun</strong> — Russia — Women empowerment and community care.</li>
                <li><strong>Lauren Meyer</strong> — USA — Elixir bar and set design.</li>
                <li><strong>Julia Rado</strong> — USA — Installations and spatial scenography.</li>
              </ul>
            }
            images={[communityImage]}
            isImageLeft={false}
          />
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionWithImage
            title="Artists"
            content={
              <ul className="space-y-2 text-[#6b5d52] text-sm sm:text-base">
                <li><strong>Unders</strong> — Netherlands — Deep electronic soundscapes.</li>
                <li><strong>Share</strong> — Netherlands — Groovy and soulful house music.</li>
                <li><strong>Amémé</strong> — Benin — Afro-inspired electronic rhythms.</li>
                <li><strong>Deer Jade</strong> — Switzerland — Hypnotic and emotional journeys.</li>
                <li><strong>Bora Uzer</strong> — Turkey — Live voice-driven electronic performance.</li>
                <li><strong>Jojo Abot</strong> — Ghana — Voice, poetry, and ancestral expression.</li>
                <li><strong>Irénée S</strong> — France — Curated sound narratives.</li>
                <li><strong>Maalem Gnawa Merchan</strong> — Morocco — Gnawa master and ritual transmission.</li>
                <li><strong>Mehdi Qamoum</strong> — Morocco — Gnawa master and ceremonial music.</li>
                <li><strong>Style Beldi</strong> — Morocco — Moroccan styling and cultural aesthetics.</li>
              </ul>
            }
            images={[artistsImage]}
            isImageLeft={true}
          />
        </div>
      </section>

      {/* Partners & Previous Collaborators Section */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionWithImage
            title="Partners & Previous Collaborators"
            content={
              <ul className="space-y-2 text-[#6b5d52] text-sm sm:text-base">
                <li><strong>The Source Boutique Hotel</strong> — Cultural hosting partner.</li>
                <li><strong>Jnane Tamsna</strong> — Art-driven hospitality partner.</li>
                <li><strong>Trésors Mamoun</strong> — Moroccan culinary heritage partner.</li>
                <li><strong>Nobu Hotel Marrakech</strong> — Contemporary hospitality partner.</li>
              </ul>
            }
            images={[partnersImage]}
            isImageLeft={false}
          />
        </div>
      </section>
    </div>
  )
}

export default About
