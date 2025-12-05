import React, { createRef, useState, useMemo } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Pagination } from "react-instantsearch";
import SearchBox from "./search-box";
import SearchResult from "./search-result";
import useClickOutside from "../../utilities/use-click-outside";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function Search({ location }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);

  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  );

  const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME;

  // Read ?category=...&tag=... from the URL
  const searchParams = new URLSearchParams(location?.search || "");
  const initialCategory = searchParams.get("category");
  const initialTag = searchParams.get("tag");

  // Build initialUiState so Algolia starts with the right refinements applied
  const initialUiState = useMemo(() => {
    if (!initialCategory && !initialTag) return undefined;

    const refinementList = {};

    if (initialCategory) {
      refinementList["category.name"] = [initialCategory];
    }

    if (initialTag) {
      refinementList["metadata.tags.name"] = [initialTag];
    }

    return {
      [indexName]: {
        refinementList,
      },
    };
  }, [initialCategory, initialTag, indexName]);

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indexName}
      initialUiState={initialUiState}
    >
      <div
        ref={rootRef}
        className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 my-8"
      >
        <SearchBox
          onChange={(q) => setQuery(q)}
          onFocus={() => setFocus(true)}
          hasFocus={hasFocus}
          className="flex flex-col gap-4 w-full lg:w-5/12"
        />
        <div className="lg:w-7/12">
          <SearchResult
            show={query && query.length > 0 && hasFocus}
            indices={[{ name: indexName }]}
            className=""
          />
          <Pagination
            translations={{
              firstPageItemText: <FaAngleDoubleLeft size={18} />,
              previousPageItemText: <FaAngleLeft size={18} />,
              lastPageItemText: <FaAngleDoubleRight size={18} />,
              nextPageItemText: <FaAngleRight size={18} />,
            }}
          />
        </div>
      </div>
    </InstantSearch>
  );
}
