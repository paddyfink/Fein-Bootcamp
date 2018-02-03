var listings = [
    {
        name: 'Frunil',
        description: 'Frunil offers “all Natural Ginger & Hibiscus juices brewed with passion and inspired from African traditions.”',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/12814480_1117397538292313_974186306335394537_n.jpg',
        link: 'http://www.frunil.com/',
    },
    {
        name: 'Le Virunga',
        description: 'Le Virunga provides traditional African recipes that have been reinvented. “When African fine cuisine meets Québec.”',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/13516685_614390735390307_7756976736115743764_n.jpg',
        link: 'http://www.levirungarestaurant.ca/',
    },
    {
        name: 'Bôhten',
        description: 'Bôhten is an eco-luxury eyewear line handmade from reclaimed material, sourced from Africa.”',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/13934859_1791909290947656_8066875495591344990_n.jpg',
        link: 'https://bohten.com/',
    },
    {
        name: 'Tassot Creole',
        description: 'Tassot Creole (Quebec)is a Hatian restaurant that offers delicious meals made from scratch.',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/b19693_5c79d13b8f7d4dfb9679ce12f81a4e9b-1.jpg',
        link: 'http://www.tassotcreole.com/',
    },
    {
        name: 'Club Balattou',
        description: 'Club Balattou is “one of the first venues to bring African bands to North America in the 1980s. In the ’80s, it lured some of Africa’s biggest stars to play in little Balattou when they were selling out stadiums in their home countries. Papa Wemba and Baaba Maal made North American debuts here.”',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/CROPKora_0.jpg',
        link: 'http://balattou.com/',
    },
    {
        name: 'Kuwala',
        description: 'Kuwala is “an online boutique that curates unique and exclusive pieces from socially responsible fashion brands inspired by Africa.”',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/13782038_913736405405028_1185522865674817705_n.jpg',
        link: 'https://kuwala.co/',
    },
    {
        name: 'Caribbean Curry House',
        description: 'Caribbean Curry House is “Montreal’s Best Roti House Serving Authentic Caribbean Food Since 1980!”',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/1912284_610941932368526_2786103466522631564_o-1024x683.jpg',
        link: 'http://www.caribbeancurryhouse.com/',
    },
    {
        name: 'Le Nil Bleu',
        description: 'Le Nil Bleu is an Ethiopian restaurant that offers flavourful meals.',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/10330244_682849441769680_1226670257617910078_n.jpg',
        link: 'http://www.nilbleu.ca/',
    },
    {
        name: 'Black Theatre Workshop',
        description: 'Black Theatre Workshop (Montréal) is “Canada’s oldest Black theatre company and is committed to reflecting Black culture and community by developing and providing visibility for Black Canadian artists.”.',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/12747443_945344272222285_8751320891450031187_o.jpg',
        link: 'http://www.blacktheatreworkshop.ca/',
    },
    {
        name: 'The Montreal Community Contact',
        description: 'The Montreal Community Contact is a publication that has been serving serving Montréal’s Black and Caribbean Community for over 20 years..',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/Screen-Shot-2016-09-07-at-11.31.06-PM-1024x609.png',
        link: 'http://montrealcommunitycontact.com/',
    },
    {
        name: 'Shakara Naturals',
        description: 'Shakara Naturals offers “natural products that help strengthen hair and improve skin.”',
        picture: 'https://shoppeblack.us/wp-content/uploads/2016/09/henna-indigo-combo-1.jpg',
        link: 'http://shakaranaturaltips.com/',
    }
];



function fetchListings() {
    var listingsElementList = document.getElementById('listingsList');
    listingsElementList.innerHTML = '';

    for (var i = 0; i < listings.length; i++) {

        var listing = listings[i];

       

            var listingElement = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${listing.picture}" alt="${listing.name}">
                    <div class="card-body">
                        <h5 class="card-title">${listing.name}</h5>
                        <p class="card-text">${listing.description}</p>
                        <a href="${listing.link}" class="btn btn-primary">View Website</a>
                    </div>
            </div>
            `;
        listingsElementList.innerHTML += listingElement;
    }
}