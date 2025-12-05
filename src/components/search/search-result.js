import React from "react";
import { Link } from "gatsby";
import {
  Highlight,
  Hits,
  Index,
  useStats,
} from "react-instantsearch";
import { RiArticleLine } from "react-icons/ri";

const HitCount = () => {
  const { nbHits } = useStats();

  return nbHits > 0 ? (
    <div className="HitCount font-semibold mb-3">
      {nbHits} Result{nbHits !== 1 ? "s" : ""}:
    </div>
  ) : null;
};

const PageHit = ({ hit }) => {

  return (
    <div className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
      {/* Title link */}
      <Link
        to={`/articles/${hit.slug}`}
        className="text-lg hover:underline hover:decoration-primary hover:underline-offset-8"
      >
        <h2 className="flex flex-row items-baseline gap-1">
          <span className="relative top-1">
            <RiArticleLine fill="#6E0A05" />
          </span>
          <Highlight attribute="title" hit={hit} />
        </h2>
      </Link>

      {/* Optional description snippet (if you want it) */}
      {hit.seoDescription && (
        <p className="mt-1 text-sm text-gray-700 line-clamp-2">
          {hit.seoDescription}
        </p>
      )}

    </div>
  );
};

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
);

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
);

export default SearchResult;
