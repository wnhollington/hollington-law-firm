import React from "react";
import { useSearchBox, RefinementList } from "react-instantsearch";

const SearchBox = ({ onFocus, onChange, className }) => {
  const { query, refine } = useSearchBox();

  return (
    <div className={className}>
      {/* Text search input */}
      <form className="w-full sm:w-8/12 lg:w-full mb-4">
        <input
          className="w-full rounded-full"
          type="text"
          placeholder="Search, e.g., 'Construction Defects'"
          aria-label="Search"
          onChange={(e) => {
            refine(e.target.value);
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          value={query}
          onFocus={onFocus}
        />
      </form>

      {/* Category refinement */}
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Filter by Category</h3>
        <RefinementList
          attribute="category.name"
          sortBy={["count:desc"]}
          classNames={{
            count: "mx-2",
            checkbox: "mx-2",
            labelText: "text-lg hover:cursor-pointer",
            item: "my-1",
          }}
        />
      </div>

      {/* Tag refinement */}
      <div>
        <h3 className="font-semibold mb-1">Filter by Topic</h3>
        <RefinementList
          attribute="metadata.tags.name"
          sortBy={["count:desc"]}
          classNames={{
            count: "mx-2",
            checkbox: "mx-2",
            labelText: "text-lg hover:cursor-pointer",
            item: "my-1",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
