import React, { createRef, useState, useMemo } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Pagination } from "react-instantsearch"
import SearchBox from "./search-box"
import SearchResult from "./search-result"
import useClickOutside from "../../utilities/use-click-outside"
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function Search({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  useClickOutside(rootRef, () => setFocus(false))

  return (
    <InstantSearch searchClient={searchClient} indexName={indices[0].name}>
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 my-8">
        <SearchBox
          onChange={query => setQuery(query)}
          onFocus={() => setFocus(true)}
          hasFocus={hasFocus}
          className="flex flex-col gap-4 w-full lg:w-5/12"
        />
        <div className="lg:w-7/12">
          <SearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
            className=""
          />
          <Pagination 
            translations={{
              firstPageItemText: <FaAngleDoubleLeft size={18}/>,
              previousPageItemText: <FaAngleLeft size={18}/>,
              lastPageItemText: <FaAngleDoubleRight size={18}/>,
              nextPageItemText: <FaAngleRight size={18}/>
            }}
          />
        </div>
      </div>
    </InstantSearch>
  )
}