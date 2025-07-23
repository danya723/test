function search() {
    const brand = document.getElementById('brand').value;
    const yearFrom = document.getElementById('yearFrom').value;
    const yearTo = document.getElementById('yearTo').value;
    const priceMin = document.getElementById('priceMin').value;
    const priceMax = document.getElementById('priceMax').value;

    const results = document.getElementById('results');
    results.innerHTML = `<p>Searching for ${brand} cars from ${yearFrom} to ${yearTo} priced between $${priceMin} and $${priceMax}</p>`;
}
