// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages 
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// ============== SIDEBAR ============== 

// Remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('#notifications .notification-count').
                style.display = 'none';
        }
    })
})

// ============== MESSAGES ============== 

//Searches messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

//Search for messages
messageSearch.addEventListener('keyup', searchMessage);

//Highlight messages card when messages menu item is clicked
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// ============== THEME / DISPLAY CUSTOMIZATION ============== 

// Opens Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// Closes Modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


// ============== FONT SIZE ============== 

// remove active class from spans or font size selectors
const removeSizeSelectors = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelectors();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

// Remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change color primary
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//Theme Background Values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

document.querySelectorAll('.edit').forEach(editButton => {
    editButton.addEventListener('click', () => {
        const dropdown = editButton.querySelector('.dropdown-menu');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Close the dropdown if clicked outside
document.addEventListener('click', (e) => {
    document.querySelectorAll('.edit .dropdown-menu').forEach(dropdown => {
        if (!dropdown.parentElement.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});

let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");

window.addEventListener("click", function (e) {
    if (!btn.contains(e.target)) classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const profileLink = document.getElementById('profile-link');
    const profilePicture = document.getElementById('profile-picture');
    const modalProfilePicture = document.getElementById('modal-profile-picture');
    const uploadPicture = document.getElementById('upload-picture');
    const modal = document.getElementById('profile-modal');
    const closeModal = document.querySelector('.close');
    const saveButton = document.getElementById('save-button');
    const logoutButton = document.getElementById('logout-button');

    // Load profile picture from local storage if available
    const savedProfilePicture = localStorage.getItem('profilePicture');
    if (savedProfilePicture) {
        profilePicture.src = savedProfilePicture;
        modalProfilePicture.src = savedProfilePicture;
    }

    // Open modal when clicking the profile picture
    profileLink.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    // Close modal
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Update profile picture when a new file is selected
    uploadPicture.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                modalProfilePicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Save updated profile picture
    saveButton.addEventListener('click', function () {
        profilePicture.src = modalProfilePicture.src;
        localStorage.setItem('profilePicture', modalProfilePicture.src);
        modal.style.display = 'none';
    });

    // Logout functionality
    logoutButton.addEventListener('click', function () {
        // Clear the local storage or any session data
        localStorage.removeItem('profilePicture');
        // Redirect to login page or perform other logout actions
        alert("You have been logged out.");
        // For example, redirect to login page (assuming login.html is the login page)
        window.location.href = 'login.html';
    });

    // Close modal if user clicks outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Like Functionality
    const likeButtons = document.querySelectorAll('.interaction-buttons .uil-heart');
    likeButtons.forEach(function (likeButton) {
        likeButton.addEventListener('click', function () {
            const icon = this;
            if (icon.classList.contains('uil-heart')) {
                icon.classList.remove('uil-heart');
                icon.classList.add('uil-heart-alt');
            } else {
                icon.classList.remove('uil-heart-alt');
                icon.classList.add('uil-heart');
            }
        });
    });

});

// JavaScript code

// Get the modal elements for each feed
var modals = document.querySelectorAll('.modal');

// Get the close buttons for each modal
var closeBtns = document.querySelectorAll('.close-btn');

// Get the feed elements
var feeds = document.querySelectorAll('.feed');

// Loop through each feed
feeds.forEach(function (feed, index) {
    // Get the comment button for this feed
    var commentBtn = feed.querySelector('.interaction-buttons span:nth-child(2)');

    // Get the corresponding modal for this feed
    var modal = modals[index];

    // Get the close button for this modal
    var closeBtn = closeBtns[index];

    // Open the modal when the comment button is clicked
    commentBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks anywhere outside of it
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
