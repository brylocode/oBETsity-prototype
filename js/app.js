//login

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const signOutContent = document.querySelector('.sign-out-content-js');
const signInContent = document.querySelector('.sign-in-content-js');
const signInBtn = document.querySelector('.login__sign-in-btn-js');
const signOutBtn = document.querySelector('.sign-out-btn-js');
const nickName = document.querySelector('.user__name');

let loggedUser = {
    username,
    avatar: '',
    currency: 1000,
    friends: [{
            id: 1,
            username: 'Monika',
            avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
        },
        {
            id: 2,
            username: 'Robert',
            avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        },
        {
            id: 3,
            username: 'Natalia',
            avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
        }
    ],
    achievements: [],
};

let userCurrency;




const showSignedInContent = () => {
    signOutContent.style.display = `none`;
    signInContent.style.display = `block`;
}
const showSignedOutContent = () => {
    signOutContent.style.display = `block`;
    signInContent.style.display = `none`;
}



const showError = (error) => {
    alert(error);
}

const handleSignIn = (username) => {
    loggedUser.username = username;
    nickName.textContent = `${username}`;

    console.log(`witaj ${loggedUser.username}`)
    console.log(`masz ${loggedUser.currency} waluty`)
    console.log(`twoi znajomi to: ${loggedUser.friends.map(friend => friend.username.toString())}`);
    console.log(`masz  ${loggedUser.achievements.length} osiągnięć`);


    showSignedInContent();
}

const getUsernameAndPassword = () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (username === '') {
        showError('wpisz nazwę użytkownika...');
    } else if (username.length >= 10) {
        showError('nazwa użytkownika nie może być dłuższa niż 10');
    } else {
        handleSignIn(username);
    }
}


const logOut = () => {
    usernameInput.value = '';
    passwordInput.value = '';
    nickName.textContent = ``;
    showSignedOutContent();
    closeSideMenu();
}




signInBtn.addEventListener('click', getUsernameAndPassword);
signOutBtn.addEventListener('click', logOut);


//menu

const menuOpenCloseBtn = document.querySelector('.side-menu__toggle-open-icon-js');
const sideMenu = document.querySelector('.side-menu-js');
let menuLinks = document.querySelectorAll(".side-menu-js a.side-menu__link");
const topMenu = document.querySelector('.top-menu-js');
const main = document.querySelector('.main-js');


const openSideMenu = () => {
    sideMenu.classList.add('side-menu--opened');
    menuOpenCloseBtn.classList.add('side-menu__toggle-open-icon--close');
    main.classList.add('main--sidemenuopened')
    topMenu.classList.add('top-menu--sidemenuopened')
    // document.body.style.marginLeft = '180px';
}

const closeSideMenu = () => {
    sideMenu.classList.remove('side-menu--opened');
    menuOpenCloseBtn.classList.remove('side-menu__toggle-open-icon--close');
    main.classList.remove('main--sidemenuopened')
    topMenu.classList.remove('top-menu--sidemenuopened')
    // document.body.style.marginLeft = '0';
}

const handleOpenCloseSideMenu = () => {
    if (!sideMenu.classList.contains('side-menu--opened')) {
        openSideMenu();
    } else {
        closeSideMenu();
    }
}

menuOpenCloseBtn.addEventListener('click', handleOpenCloseSideMenu);
menuLinks.forEach(link => link.addEventListener('click', closeSideMenu))
// sideMenu.addEventListener('click', handleOpenCloseSideMenu)






for (let link of menuLinks) {
    link.addEventListener('click', function (e) {
        let appSections = document.querySelectorAll(".main-js section");
        for (let section of appSections) {
            if ("#" + section.id === link.getAttribute("href")) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }
    });
}