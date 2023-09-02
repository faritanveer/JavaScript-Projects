////////////////////////////////////////////// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

///////////////////////////////////////////// MESSAGES
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('#messages-tab');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

///////////////////////////////////////////// THEME
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


// REMOVE ACTIVE CLASS FROM ALL MENU ITEMS

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
            document.querySelector(".notifications-popup").
                style.display = 'none';
        }
        else {
            document.querySelector(".notifications-popup").
                style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// MESSAGES=================

// highlight when clicked
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);

})


//////////////////////////////////////// searches chat

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
}

/////////////////////////////////////// Search Chat
messageSearch.addEventListener('keyup', searchMessage);


////////////////////////////////////// THEME/DISPLAY CUSTOMIZATION


//////////////////////// OPENS MODEL
const openThemeModel = () => {
    themeModel.style.display = 'grid'
}

//////////////////////// CLOSE MODEL

const closeThemeModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}

themeModel.addEventListener('click', closeThemeModel)

theme.addEventListener('click', openThemeModel)

/////////////////// remove active class
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
/////////////////////////////// FONT SIZES
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px'
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px'
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left', '-10rem');
            root.style.setProperty('--sticky-top-right', '-33rem');
        }
        ////////////////////////// CHANGE FONT SIZE

        document.querySelector('html').style.fontSize = fontSize;
    })



})
///////////////////////////////////////// REMOVE ACTIVE CLASS

const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

///////////////////////////////////// CHANGE PRIMARY COLORS

colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


///////////////////////////// BACKGROUND CHANGE


let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {

    bg1.classList.add('active');

    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})


bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');

    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');

    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})

//////////////////////////// LIKE BUTTON

const heartIcons = document.querySelectorAll('.uil.uil-heart');


heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener('click', () => {
        const currentColor = getComputedStyle(heartIcon).color;
        if (currentColor === 'rgb(255, 0, 0)' || currentColor === 'red') {
            heartIcon.style.color = 'black';
            heartIcon.style.textShadow = 'none';
        } else {
            heartIcon.style.color = 'red';
            heartIcon.style.textShadow = '0 0 0.6rem red';
        }
    });
});


////////////////////////////// BOOKMARK

const bookmarkIcons = document.querySelectorAll('.uil.uil-bookmark-full');

bookmarkIcons.forEach(bookmarkIcon => {
    bookmarkIcon.addEventListener('click', () => {
        const currentColor = getComputedStyle(bookmarkIcon).color;
        if (currentColor === 'yellow') {
            bookmarkIcon.style.color = 'black';
        } else {
            bookmarkIcon.style.color = 'yellow';
        }
    });
});


////////////////////////////////////////////// TEMPORARY END //////////////////////////////////////////////////









