import React from "react"
import { useSearchBox, RefinementList } from "react-instantsearch"

const SearchBox = ({ onFocus, onChange, className }) => {
  const { query, refine } = useSearchBox()

  return (
    <div className={className}>
      
      <form className="w-full sm:w-8/12 lg:w-full">
        <input
          className="w-full rounded-full"
          type="text"
          placeholder="Search, e.g., 'Construction Accidents'"
          aria-label="Search"
          onChange={e => {
            refine(e.target.value)
            onChange(e.target.value)
          }}
          value={query}
          onFocus={onFocus}
        />
      </form>
      
      <RefinementList 
        attribute="metadata.tags.name"
        sortBy={['name:asc']}
        classNames={{
          count: 'hidden',
          checkbox: 'mx-2',
          labelText: 'text-lg',
          item: 'my-2'
        }}
      />
    
    </div>
  )
}

export default SearchBox