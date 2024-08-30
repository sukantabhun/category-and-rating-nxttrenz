import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeSearchFunc,
    searchVal,
    onClickEnter,
    onRatingChange,
    onCategoryChange,
    onClickClearFilter,
    activeCategoryId,
    activeRatingId,
  } = props

  const onChangeSearch = event => {
    onChangeSearchFunc(event.target.value)
  }

  const onSearch = event => {
    if (event.key === 'Enter') {
      onClickEnter()
    }
  }

  const onClickRating = id => {
    onRatingChange(id)
  }

  const onClickCategory = id => {
    onCategoryChange(id)
  }

  return (
    <div className="filters-group-container">
      <input
        type="search"
        placeholder="Search"
        onChange={onChangeSearch}
        value={searchVal}
        onKeyDown={onSearch}
        className="search-input"
      />
      <div>
        <h1 className="category-heading">Category</h1>
        <ul className="category-list">
          {categoryOptions.map(eachItem => {
            const selected =
              eachItem.categoryId === activeCategoryId ? 'selected' : ''

            return (
              <li
                className={`category-option ${selected}`}
                key={eachItem.categoryId}
                onClick={() => onClickCategory(eachItem.categoryId)}
              >
                <p>{eachItem.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h1 className="rating-heading">Rating</h1>
        <ul className="rating-list">
          {ratingsList.map(eachItem => {
            const selected =
              eachItem.ratingId === activeRatingId ? 'selected' : ''
            return (
              <li
                key={eachItem.imageUrl}
                onClick={() => onClickRating(eachItem.ratingId)}
                className={selected}
              >
                <img
                  src={eachItem.imageUrl}
                  alt={`rating {ratingId}`}
                  className="rating-image"
                  key={eachItem.ratingId}
                onClick={() => onClickRating(eachItem.ratingId)}
                className={selected}
                />
                &up
              </li>
            )
          })}
        </ul>
      </div>
      <button
        type="button"
        className="button"
        onClick={() => onClickClearFilter()}
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
