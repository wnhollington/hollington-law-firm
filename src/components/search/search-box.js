import React from "react"
import { useSearchBox } from "react-instantsearch"

const SearchBox = ({ onFocus, onChange, className }) => {
  const { query, refine } = useSearchBox()

  return (
    <form className={className}>
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
  )
}

export default SearchBox