import React from "react"
import { Link } from "gatsby"
import {
  Highlight,
  Hits,
  Index,
  useStats,
} from "react-instantsearch"
import { RiArticleLine } from "react-icons/ri";

const HitCount = () => {
  const { nbHits } = useStats()

  return nbHits > 0 ? (
    <div className="HitCount font-semibold">
      {nbHits} Result{nbHits !== 1 ? "s" : ""}:
    </div>
  ) : null
}

const PageHit = ({ hit }) => (
  <Link to={`/articles/${hit.slug}`} className="text-lg hover:underline hover:decoration-primary hover:underline-offset-8">
    <h2 className="flex flex-row items-baseline gap-1">
      <span className="relative top-1"><RiArticleLine fill="#6E0A05"/></span>
      <Highlight attribute="title" hit={hit} />
    </h2>
  </Link>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
)

export default SearchResult