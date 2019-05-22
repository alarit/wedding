function openMap() {
    window.open('https://goo.gl/maps/szyJkir5eBcTzL3EA', '_blank');
}

function openRestaurantSite() {
    window.open('https://www.tenutacollepiajo.it/', '_blank');
}

function showChurch() {
    document.getElementById('church').style.display = 'block'
    document.getElementById('restaurant').style.display = 'none'
    document.getElementById('agency').style.display = 'none'
}

function showRestaurant() {
    document.getElementById('church').style.display = 'none'
    document.getElementById('restaurant').style.display = 'block'
    document.getElementById('agency').style.display = 'none'
}

function showAgency() {
    document.getElementById('church').style.display = 'none'
    document.getElementById('restaurant').style.display = 'none'
    document.getElementById('agency').style.display = 'block'
}
