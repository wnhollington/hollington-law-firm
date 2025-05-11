import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Hero = () => {
  const siteMetaData = useSiteMetadata()

  return (
    <section className="relative">
      {/* Optimized Hero Image */}
      <StaticImage
        src="https://res.cloudinary.com/wnhollington/image/upload/f_auto/q_auto/e_improve,e_sharpen/v1710770792/7.19.23-Construction-Defect_zzkg4q.compress_aforwx.webp"
        alt="Colorado Construction Defect Lawyer"
        className="absolute inset-0 w-full h-full object-cover"
        placeholder="blurred"
        layout="fullWidth"
        formats={["auto", "webp"]}
        quality={80}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-50/80"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-[500px] xl:h-screen">
        <div className="flex flex-col justify-center mx-auto max-w-5xl gap-6 p-4">
          <h1 className="font-['Libre_Baskerville'] text-3xl md:text-4xl lg:text-5xl">
            {siteMetaData.description}
          </h1>
          <p className="font-['Source_Sans_Pro'] text-2xl md:text-3xl lg:text-4xl italic">
            {siteMetaData.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/schedule-consultation"
              className="bg-gradient-to-br from-primary to-red-800 hover:shadow-lg text-white text-md md:text-lg font-bold p-4 rounded-md text-center"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
