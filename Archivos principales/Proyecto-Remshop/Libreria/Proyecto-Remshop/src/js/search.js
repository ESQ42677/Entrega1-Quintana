// This file implements the search functionality, allowing users to search for products. 
// It ensures the search bar is always accessible and can be toggled.

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const products = []; // This should be populated with product data from products.js

    // Function to filter products based on search input
    function filterProducts(query) {
        return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    }

    // Event listener for search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        const filteredProducts = filterProducts(query);
        displayResults(filteredProducts);
    });

    // Function to display search results
    function displayResults(results) {
        searchResults.innerHTML = ''; // Clear previous results
        if (results.length > 0) {
            results.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result');
                resultItem.innerHTML = `<p>${product.name}</p><img src="${product.image}" alt="${product.name}">`;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = '<p>No results found</p>';
        }
    }
});