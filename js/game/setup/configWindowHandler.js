document.addEventListener('DOMContentLoaded', () => {
    // Sample tag data
    const tags = [
        { id: "1", name: "Resturant", count: 5 },
        { id: "2", name: "Video Game", count: 3 },
        { id: "3", name: "Midlothian", count: 7 },
        { id: "4", name: "Austin", count: 2 },
        { id: "5", name: "Anime", count: 1 },
        { id: "6", name: "Miscellaneous", count: 4 },
        { id: "7", name: "Historical", count: 6 },
        { id: "8", name: "Pop-Culture", count: 9 },
        { id: "9", name: "Movie", count: 8 },
        { id: "10", name: "Tag 10", count: 10 }
    ];

    // Sample image data
    const images = [
        { id: "aacenter", name: "americanairlines", alias: "the american airlines center stadium, american airlines center stadium" },
        { id: "anicentgreece", name: "aincentgreece", alias: "greece,rome,aincent greece,aincent rome,ancient rome,ancient greece" },
        { id: "attstad", name: "at&tcenter", alias: "at&t stadium,at and t stadium,atant stadium,atandt stadium,at8t stadium,cowboys" },
        { id: "bartleyhouse", name: "bartleyhouse", alias: "bartley house,bartly house,bartely house,the bartley house,the bartly house,the bartely house,the bartleys,the bartelys,the bartlys,the bartley's,the bartely's,the bartly's,tommy's house,tommys house" },
        { id: "bikinibottom", name: "bikinibottom", alias: "the bikini bottom,bikini bottom,spongebob bikini bottom,sponge bob bikini bottom" },
        { id: "brandedburger", name: "brandedburger", alias: "branded burger" },
        { id: "chuckecheese", name: "chuckycheesepizza", alias: "chuck e cheese" },
        { id: "de_office", name: "cs2office", alias: "office,csoffice,cs office,csgo office,cs2 office,the office" },
        { id: "drakehouse", name: "drakehouse", alias: "drake house,drakes house,drake's house,diddy party" },
        { id: "galveston", name: "galveston", alias: "the beach,galveston beach" },
        { id: "greatbritain", name: "uk", alias: "great britain,britain,uk,the uk,the u.k.,u.k.,chewsday innit,innit,hell" },
        { id: "hogwarts", name: "hogwarts", alias: "hogwarts school of witchcraft and wizardry,harry potter" },
        { id: "hibachio", name: "hibachio", alias: "hibachio grill" },
        { id: "hooters", name: "hooters", alias: "owen's ideal woman,owen's ideal women,brayden's ideal woman,brayden's ideal women,tommy's ideal woman,tommy's ideal women,twin peaks" },
        { id: "lukesclassroom", name: "lukeclassroom", alias: "lukes classroom,luke's classroom,classroom" },
        { id: "midlopark", name: "midlothianpark", alias: "the midlothian community park,midlothian community park,midlothian park,the spot" },
        { id: "mhs", name: "mhs", alias: "midlothian highschool,midlothian high school,hell" },
        { id: "oblock", name: "oblock", alias: "oblock,the hood" },
        { id: "ravenswoodbluff", name: "ravenswood", alias: "ravenswood bluff,ravens wood bluff,raven's wood bluff" },
        { id: "showbiz", name: "showbiz", alias: "showbiz theater,showbiz theatre,showbiz cinema waxahachie,waxahachie theatre,waxahachie theater,waxahachie showbiz cinema theater" },
        { id: "sixflags", name: "sixflags", alias: "six flags,rollercoaster park,amusement park" },
        { id: "skeld", name: "theskeld", alias: "amongus,among us,amog us,amogus,the skeld,sussy baka,vented,electrical,imposter" },
        { id: "som", name: "somdiscord", alias: "som discord server,society of merchants,som server, som chat,som call,discord server" },
        { id: "summonersrift", name: "summonersrift", alias: "league of legends,lol,summoners rift,summoner's rift,aram" },
        { id: "tiltedtowers", name: "tiltedtowers", alias: "fortnite,tilted towers" },
        { id: "theshire", name: "theshire", alias: "the shire,shire,hobbits,lord of the rings,lotr" },
        { id: "thewhitehouse", name: "whitehouse", alias: "the white house,white house" },
        { id: "twintowers", name: "twintowers", alias: "twin towers,world trade center,wtc,9/11" },
        { id: "utaustin", name: "utaustin", alias: "austin,ut austin,college,lhr twerk day" },
        { id: "whiterun", name: "whiterun", alias: "skyrim" },
    ];

    // Function to generate tag HTML
    function createTagElement(tag) {
        return `
            <span id="tag-${tag.id}" class="tag-item bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-xs font-medium inline-flex items-center relative cursor-pointer">
                <span class="tag-number bg-white text-gray-700 rounded-full w-5 h-5 flex items-center justify-center shadow mr-2 hover:bg-green-500 hover:text-white cursor-pointer">${tag.count}</span>
                ${tag.name}
            </span>
        `;
    }

    // Function to generate image HTML
    function createImageElement(images) {
        return `
            <button id="${images.id}" class="bg-gray-300 h-32 w-56 rounded-md flex items-center justify-center overflow-hidden relative" data-alias="${images.alias}" onclick="toggleOpacity('${images.id}')">
                <img src="css/images/${images.name}.jpg" alt="${images.name}" class="h-full w-full object-cover" />
                <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>
            </button>
        `;
    }

    // Function to load and insert tags
    function loadTags() {
        const container = document.getElementById('sideBarTags');
        container.innerHTML = tags.map(createTagElement).join('');
    }

    // Function to hide tags
    function hideTags() {
        const container = document.getElementById('sideBarTags');
        container.innerHTML = '';
    }

    function loadImages() {
        const container = document.querySelector('.griddy');
        container.innerHTML = images.map(createImageElement).join(''); 
    }

    // Function to hide images
    function hideImages() {
        const container = document.querySelector('.griddy');
        container.innerHTML = '';
    }

    // Function to show the customize map pop-up
    function showCustomizePopup() {
        const popup = document.getElementById('customize-map-popup');
        popup.classList.remove('hidden');
        loadTags();
    }

    // Function to hide the customize map pop-up
    function hideCustomizePopup() {
        const popup = document.getElementById('customize-map-popup');
        popup.classList.add('hidden');
    }

    // Event listener for opening the pop-up
    document.getElementById('customizeButton').addEventListener('click', showCustomizePopup); // Causes error when testing button not present

    // Event listener for closing the pop-up 
    document.getElementById('customize-map-popup').addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            hideCustomizePopup();
        }
    });
    // Select all tabs and tab content sections
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to show a specific tab content and hide others
    function showTabContent(tabId) {
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(tabId).classList.remove('hidden');
    }

    // Event listener for tab clicks
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            const tabId = event.target.getAttribute('data-tab');
            showTabContent(tabId);

            switch (tabId) {
                case 'generateTab':
                    loadTags();
                    hideImages();
                    //hidePresets();
                    break;
                case 'customTab':
                    loadImages();
                    hideTags();
                    //hidePresets();
                    break;
                case 'presetTab':
                    //loadPresets();
                    hideTags();
                    hideImages();
                    break;
            }
        });
    });

    // Initialize the first tab as active
    if (tabs.length > 0) {
        const firstTab = tabs[0];
        const defaultTabId = firstTab.getAttribute('data-tab');
        showTabContent(defaultTabId);
    }
});

// Handles switching between the different setup categories.
//
// Add code for generating board from setup