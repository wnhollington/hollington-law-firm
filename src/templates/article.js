import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import { FaCalendarAlt, FaClock, FaFolder, FaTag } from "react-icons/fa";
import { 
  EmailShareButton, 
  EmailIcon, 
  FacebookShareButton, 
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton, 
  LinkedinIcon 
} from 'react-share'

// Utilities
import { useSiteMetadata } from '../utilities/use-site-metadata.js'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar/index.js';

function Article ({ data, pageContext }) {
  const { previous, next } = pageContext
  const siteMetaData = useSiteMetadata()
  const article = data.contentfulArticles
  const shareUrl = `${siteMetaData.siteUrl}/articles/${article.slug}`

  // Pre-compute category and tag for cleaner JSX + URL encoding
  const categoryName = article.category?.name
  const tags = article.metadata?.tags || []
  const firstTagName = tags[0]?.name

  // Related articles: merge by category + first tag, dedupe, limit 3
  const relatedByCategory = data.relatedByCategory?.nodes || []
  const relatedByTag = data.relatedByTag?.nodes || []

  const relatedMap = new Map()

  relatedByCategory.forEach(node => {
    relatedMap.set(node.id, node)
  })

  relatedByTag.forEach(node => {
    if (!relatedMap.has(node.id)) {
      relatedMap.set(node.id, node)
    }
  })

  const relatedArticles = Array.from(relatedMap.values()).slice(0, 3)

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        return (
          <a
            href={node.data.uri}
            target={`${node.data.uri.startsWith('https://hollingtonlawfirm.') ? '_self' : '_blank'}`}
            rel={node.data.uri.startsWith('https://hollingtonlawfirm.') ? undefined : 'noopener noreferrer'}
          >
            {node.content[0].value}
          </a>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        const entry = article.body.references.find(
          x => x.contentful_id === node.data.target.sys.id
        )
        switch (entry.internal.type) {
          case 'ContentfulPracticeAreas':
            return <Link to={`/practice-areas/${entry.slug}`}>{node.content[0].value}</Link>;
          case 'ContentfulAttorneys':
            return <Link to={`/${entry.slug}`}>{node.content[0].value}</Link>;
          case 'ContentfulArticles':
            return <Link to={`/articles/${entry.slug}`}>{node.content[0].value}</Link>;
          default:
            return <Link to={`/`}>{node.content[0].value}</Link>;
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target
        return (
          <div className='flex justify-center my-8 lg:my-12'>
            <GatsbyImage 
              image={getImage(gatsbyImageData)}
              alt={description}
              className='mx-auto'
            />
          </div>
        )
      },
    }
  }

  return (
    <Layout>
      <div className='flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='lg:w-2/3 max-w-6xl mx-auto'>
          
          <header className="mb-4">
            <h1 className="bg-gradient-to-b from-primary to-red-800 text-center text-white mb-2 py-8 px-2 rounded-md shadow-xl">
              {article.title}
            </h1>

            {article.heroImage?.gatsbyImageData && (
              <div
                className="relative mb-6 rounded shadow-md overflow-hidden"
                style={{ height: '60vh' }}
              >
                <GatsbyImage
                  image={getImage(article.heroImage)}
                  alt={article.heroImage.description || 'Hero image'}
                  loading="eager"
                  fetchpriority="high"
                  className="w-full h-full"
                  imgStyle={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
              </div>
            )}

            {/* Responsive Meta Layout */}
            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* LEFT: AUTHOR */}
              <div className="flex items-center gap-3">
                <StaticImage
                  src="https://res.cloudinary.com/wnhollington/image/upload/c_crop,w_1240,h_1240,x_161,y_53,ar_1:1/v1707868812/Neal_Hollington_2_qy86dn.jpg"
                  height={55}
                  width={55}
                  className="rounded-full flex-shrink-0"
                  alt="W. Neal Hollington"
                />
                <span className="text-lg">
                  <Link to="/w-neal-hollington">W. Neal Hollington</Link>
                </span>
              </div>

              {/* RIGHT: META */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-lg text-gray-800">

                {/* Date */}
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <FaCalendarAlt className="text-primary inline text-lg" />
                  <span>{article.updatedAt}</span>
                </span>

                {/* Reading Time */}
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <FaClock className="text-primary inline text-lg" />
                  <span>{article.readingTime} minute read</span>
                </span>

                {/* CATEGORY + TAG GROUP (always together) */}
                <div className="flex flex-row items-center gap-6 whitespace-nowrap">

                  {/* Category – link back to /articles with category facet pre-selected */}
                  {categoryName && (
                    <span className="flex items-center gap-2">
                      <FaFolder className="text-primary inline text-lg" />
                      <Link
                        to={`/articles?category=${encodeURIComponent(categoryName)}`}
                        className="hover:underline"
                      >
                        {categoryName}
                      </Link>
                    </span>
                  )}

                  {/* Tag – link back to /articles with tag facet pre-selected */}
                  {firstTagName && (
                    <span className="flex items-center gap-2">
                      <FaTag className="text-primary inline text-lg" />
                      <Link
                        to={`/articles?tag=${encodeURIComponent(firstTagName)}`}
                        className="hover:underline"
                      >
                        {firstTagName}
                      </Link>
                    </span>
                  )}

                </div>
              </div>
            </div>
          </header>

          {renderRichText(article.body, options)}

          <p className='italic mt-6'>
            The information provided on this website is for general informational purposes only and should not be construed as legal advice or legal opinion. You should not act or refrain from acting on the basis of any information provided on this website without seeking legal advice from an attorney.
          </p>

          {/* Social Share */}
          <div className='my-2 py-2 flex flex-row gap-4'>
            <EmailShareButton url={shareUrl} subject={`${siteMetaData.title} | ${article.title}`}>
              <EmailIcon size={40} round={true} />
            </EmailShareButton>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
              <XIcon size={40} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-10 border-t pt-8">
              <h2 className="text-2xl font-semibold mb-6">
                {categoryName
                  ? `More Articles About ${categoryName}`
                  : "Related Articles"}
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedArticles.map(related => (
                  <Link
                    key={related.id}
                    to={`/articles/${related.slug}`}
                    className="group block h-full rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:bg-gray-50 no-underline"
                  >
                    {/* Top row: category + date */}
                    <div className="mb-3 flex items-center justify-between text-xs text-gray-600">
                      {related.category?.name && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
                          <FaFolder className="text-primary inline text-xs" />
                          <span className="font-medium">
                            {related.category.name}
                          </span>
                        </span>
                      )}

                      <span className="flex items-center gap-1 text-[11px] text-gray-500">
                        <FaCalendarAlt className="text-primary inline text-xs" />
                        <span>{related.updatedAt}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {related.title}
                    </h3>

                    {/* Tags row */}
                    {related.metadata?.tags?.length > 0 && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-gray-700">
                        <FaTag className="text-primary inline text-xs" />
                        <div className="flex flex-wrap gap-2">
                          {related.metadata.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag.name}
                              className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-700 group-hover:bg-primary group-hover:text-white transition-colors duration-150"
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Read → micro-CTA */}
                    <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-primary font-semibold text-sm">
                        Read →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* View more in this category */}
              {categoryName && (
                <div className="mt-6 text-center">
                  <Link
                    to={`/articles?category=${encodeURIComponent(categoryName)}`}
                    className="inline-block rounded-lg bg-primary px-4 py-2 text-white font-semibold shadow-mdtransition-all duration-200 hover:bg-red-900 hover:shadow-lg no-underline"
                  >
                    View More Articles on {categoryName}
                  </Link>
                </div>
              )}
            </section>
          )}

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-between mx-auto my-4">
              <li>
                {previous && (
                  <Link
                    to={`/articles/${previous.slug}`}
                    rel="prev"
                    aria-label={previous.title}
                    title={previous.title}
                    className="inline-flex items-center p-2 text-md font-medium no-underline text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    &larr; Previous Post
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link
                    to={`/articles/${next.slug}`}
                    rel="next"
                    aria-label={next.title}
                    title={next.title}
                    className="inline-flex items-center p-2 text-md font-medium no-underline text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Next Post &rarr;
                  </Link>
                )}
              </li>
            </ul>
          </nav>

        </article>

        <Sidebar />

      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!, $category: String, $firstTag: String) {
    contentfulArticles(id: {eq: $id}) {
      title
      updatedAt(formatString: "MMM DD, YYYY")
      seoTitle
      seoDescription
      slug
      metadata {
        tags {
          name
        }
      }
      readingTime
      category {
        name
      }
      heroImage {
        gatsbyImageData(
          layout: FULL_WIDTH
        )
        description
        file {
          url
        }
      }
      body {
        raw
        references {
          ... on ContentfulArticles {
            contentful_id
            title
            slug
            internal {
              type
            }
          }
          ... on ContentfulPracticeAreas {
            contentful_id
            title
            slug
            internal {
              type
            }
          }
          ... on ContentfulAttorneys {
            contentful_id
            slug
            internal {
              type
            }
          }
          ... on ContentfulAsset {
            contentful_id
            id
            title
            description
            gatsbyImageData(layout: CONSTRAINED, quality: 80, formats: [WEBP, AUTO], placeholder: BLURRED)
            __typename
          }
        }
      }
    }

    relatedByCategory: allContentfulArticles(
      filter: {
        id: { ne: $id }
        category: { name: { eq: $category } }
      }
      sort: { updatedAt: DESC }
      limit: 5
    ) {
      nodes {
        id
        title
        slug
        updatedAt(formatString: "MMM DD, YYYY")
        category {
          name
        }
        metadata {
          tags {
            name
          }
        }
      }
    }

    relatedByTag: allContentfulArticles(
      filter: {
        id: { ne: $id }
        metadata: {
          tags: { elemMatch: { name: { eq: $firstTag } } }
        }
      }
      sort: { updatedAt: DESC }
      limit: 5
    ) {
      nodes {
        id
        title
        slug
        updatedAt(formatString: "MMM DD, YYYY")
        category {
          name
        }
        metadata {
          tags {
            name
          }
        }
      }
    }
  }
`

export default Article

export const Head = ({ data, location }) => {
  const article = data.contentfulArticles;

  const url =
    location?.href || `https://hollingtonlawfirm.com/articles/${article.slug}`;

  const seoTitle = article.seoTitle || article.title;
  const seoDescription = article.seoDescription || '';

  // Your Cloudinary fallback OG image
  const defaultOgImage =
    'https://res.cloudinary.com/wnhollington/image/upload/v1764889351/Artboard_1_azelhg.png';

  // Try to use the hero image from Contentful if present
  const heroFileUrl = article.heroImage?.file?.url;
  const heroOgImage = heroFileUrl
    ? heroFileUrl.startsWith('http')
      ? heroFileUrl
      : `https:${heroFileUrl}`
    : null;

  // Final image used for OG/Twitter/etc.
  const ogImage = heroOgImage || defaultOgImage;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}#blogposting`,
    },
    headline: seoTitle,
    description: seoDescription,
    author: {
      '@type': 'Organization',
      name: 'Hollington Law Firm LLC',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hollington Law Firm LLC',
    },
    datePublished: article.updatedAt,
    dateModified: article.updatedAt,
    url,
    image: ogImage,
  };

  return (
    <Seo title={seoTitle} description={seoDescription} image={ogImage}>
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={seoTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>
    </Seo>
  );
};
