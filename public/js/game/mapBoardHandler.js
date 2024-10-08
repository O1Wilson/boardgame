// Sample JSON dataset
const locations = window.images;

document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('mapboard');
    let limit = Math.min(locations.length, 25);

    // Loop through the dataset and insert HTML
    for (let i = 0; i < limit; i++) {
        const location = locations[i];

        // Create a new div element and set its innerHTML
        const locationDiv = document.createElement('div');
        locationDiv.classList.add('relative', 'bg-gray-300', 'group', 'h-32', 'w-56', 'rounded-md', 'flex', 'items-center', 'justify-center', 'text-center', 'text-white');

        locationDiv.innerHTML = `
        <div id="location-container" class="relative bg-gray-300 group h-32 w-56 rounded-md flex items-center justify-center text-center text-white">
            <img src="css/images/${location.id}.jpg" alt="${location.location}" class="h-full w-full object-cover z-0" />
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity z-1"></div>
            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="text-xl font-bold">${location.location}</span>
            </div>
            <div class="absolute top-1 right-1 flex space-x-1 transition-opacity">
                <i class="fas fa-bookmark text-green-700 hover:text-green-500 opacity-0 group-hover:opacity-100 -top-1.5 relative" onclick="toggleIcon(this, 'green')"></i>
                <i class="fas fa-bookmark text-yellow-700 hover:text-yellow-500 opacity-0 group-hover:opacity-100 -top-1.5 relative" onclick="toggleIcon(this, 'yellow')"></i>
                <i class="fas fa-bookmark text-red-700 hover:text-red-500 opacity-0 group-hover:opacity-100 -top-1.5 relative" onclick="toggleIcon(this, 'red')"></i>
            </div>
            <button class="absolute bottom-2 left-1/2 transform -translate-x-1/2 transition-opacity bg-gray-700 hover:bg-gray-800 bg-opacity-100 px-3 rounded-lg opacity-0 group-hover:opacity-100" style="cursor: pointer;" onclick="openPopup(this)">
                Select
            </button>
        </div>
        `;
        
        gridContainer.appendChild(locationDiv);
    }
});

// Function to toggle icon visibility and button
function toggleIcon(element, color) {
    const parent = element.closest('#location-container');
    if (!parent) {
        console.error(`Parent element with id 'location-container' not found.`);
        return;
    }

    const overlay = parent.querySelector('.inset-0');
    const button = parent.querySelector('button');
    const icons = parent.querySelectorAll('i');

    // Toggle visibility of the clicked icon
    if (element.classList.contains('opacity-0')) {
        element.classList.remove('opacity-0');
        element.classList.remove(`text-${color}-700`);
        element.classList.remove(`hover:text-${color}-500`);
        element.classList.add(`text-${color}-500`);
        element.classList.add(`hover:text-${color}-700`);
    } else {
        element.classList.add('opacity-0');
        element.classList.remove(`text-${color}-500`);
        element.classList.remove(`hover:text-${color}-700`);
        element.classList.add(`text-${color}-700`);
        element.classList.add(`hover:text-${color}-500`);
    }

    // If the red icon is clicked, keep the overlay visible
    if (color === 'red') {
        if (element.classList.contains('opacity-0')) {
            const anyRedVisible = Array.from(icons).some(icon => 
                icon.classList.contains('text-red-500') && !icon.classList.contains('opacity-0')
            );
            if (!anyRedVisible) {
                overlay.classList.remove('opacity-50');
            }
        } else {
            overlay.classList.add('opacity-50');
        }
    }

    // Show the button if any icon is visible
    const anyVisible = Array.from(icons).some(icon => icon.classList.contains('opacity-100'));
    button.classList.toggle('opacity-100', anyVisible);
}

// Function to open a popup with the image
function openPopup(button) {
    const parent = button.closest('.relative');
    const imgSrc = parent.querySelector('img').src;

    // Create a popup container
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50';
    popupOverlay.onclick = function(event) {
        if (event.target === popupOverlay) {
            document.body.removeChild(popupOverlay);
        }
    };

    // Create the popup content
    const popupContent = document.createElement('div');
    popupContent.className = 'bg-white p-5 rounded-lg shadow-lg relative';
    popupContent.style.width = '1080px'; 
    popupContent.style.height = '600px';
    popupContent.style.display = 'flex';
    popupContent.style.justifyContent = 'center';
    popupContent.style.alignItems = 'center';
    popupContent.onclick = function(event) {
        event.stopPropagation();
    };

    // Add the image to the popup
    const img = document.createElement('img');
    img.src = imgSrc;
    img.className = 'rounded-md';
    img.style.width = '100%'; 
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    popupContent.appendChild(img);

    // Add a close button to the popup
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.className = 'absolute top-2 right-2 bg-gray-200 text-gray-800 px-3 py-1 rounded';
    closeButton.onclick = function() {
        document.body.removeChild(popupOverlay);
    };
    popupContent.appendChild(closeButton);

    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);
}