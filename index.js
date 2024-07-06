// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messages = document.querySelector('.messages');
const messageNotification = document.querySelector('#message-notifications');
const messageSearch = document.querySelector('#message-search');
const allMessages = document.querySelectorAll('.message'); // Rename to avoid confusion

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPallete = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');

// background
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

// Remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id !== 'notifications') {
            const notificationsPopup = document.querySelector('.notifications-popup');
            const notificationCount = document.querySelector('#notifications .notification-count');
            if (notificationsPopup) notificationsPopup.style.display = 'none';
            if (notificationCount) notificationCount.style.display = 'block';
        } else {
            const notificationsPopup = document.querySelector('.notifications-popup');
            const notificationCount = document.querySelector('#notifications .notification-count');
            if (notificationsPopup) notificationsPopup.style.display = 'block';
            if (notificationCount) notificationCount.style.display = 'none';
        }
    });
});

// Search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    allMessages.forEach(chat => {
        const name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
};

messageSearch.addEventListener('keyup', searchMessage);

// Highlight message
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    const notificationCount = messageNotification.querySelector('.notification-count');
    if (notificationCount) notificationCount.style.display = 'none';

    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

// THEME CUSTOMIZATION

// open the modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// close the modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

// close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// FONTS
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        fontSizes.forEach(sz => sz.classList.remove('active'));
        size.classList.add('active');

        let fontSize;
        if (size.classList.contains('font-size1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // Change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    });
});


colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        colorPallete.forEach(cp => cp.classList.remove('active'));
        color.classList.add('active');

        if(color.classList.contains('color1')) {
             primaryHue = 252;
        } else if(color.classList.contains('color2')) {
            primaryHue = 52;
        } else if(color.classList.contains('color3')) {
            primaryHue = 352;
        } else if(color.classList.contains('color4')) {
            primaryHue = 152;
        } else if(color.classList.contains('color5')) {
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {
    
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');

    // remove customized changes from local sorage
    window.location.reload();
})

bg2.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

     bg2.classList.add('active');
     bg1.classList.remove('active');
     bg3.classList.remove('active');
     changeBg();
})

bg3.addEventListener('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg();
})