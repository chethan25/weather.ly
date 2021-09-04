const searchInput = document.getElementById('search-input');

// get input from user
function getSearchValue() {
  return searchInput.value.toLowerCase().trim();
}

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getSearchValue();
  }
});
