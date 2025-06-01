import * as React from 'react';
import { useSiteMetadata } from '../../utilities/use-site-metadata';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const HERO_IMG =
  'https://res.cloudinary.com/wnhollington/image/upload/w_2880,f_auto,q_auto/e_improve,e_sharpen/v1710770792/7.19.23-Construction-Defect_zzkg4q.webp';

const Hero = () => {
  const { description, tagline } = useSiteMetadata();

  return (
    <section
      className="
        relative
        h-[45vh] min-h-[300px]
        md:h-[50vh] md:min-h-[400px]
        lg:h-[60vh] lg:min-h-[500px] lg:max-h-[750px]
      "
    >
      <StaticImage
        src={HERO_IMG}
        alt="Colorado Construction Defect Attorney"
        layout="fullWidth"
        placeholder="dominantColor"
        formats={['auto', 'webp',]}
        loading="eager"
        preload
        fetchpriority="high"
        width={2880}
        quality={80}
        className="absolute inset-0 w-full h-full"
        imgStyle={{ objectFit: 'cover' }}
      />

      <div aria-hidden className="absolute inset-0 bg-stone-50/80 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center mx-auto max-w-5xl gap-6 p-4 text-center">
          <h1 className="font-['Libre_Baskerville'] text-3xl md:text-4xl lg:text-5xl">
            {description}
          </h1>

          <p className="font-['Source_Sans_Pro'] text-2xl md:text-3xl lg:text-4xl italic">
            {tagline}
          </p>

          <Link
            to="/schedule-consultation"
            aria-label="Schedule your free consultation"
            className="
              bg-gradient-to-br from-primary to-red-800 text-white
              text-md md:text-lg font-bold p-4 rounded-md text-center
              hover:shadow-lg focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
            "
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;