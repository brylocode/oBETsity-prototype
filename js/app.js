//login

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const signOutContent = document.querySelector('.sign-out-content-js');
const signInContent = document.querySelector('.sign-in-content-js');
const signInBtn = document.querySelector('.login__sign-in-btn-js');
const signOutBtn = document.querySelector('.sign-out-btn-js');

let loggedUser = {
    username,
    avatar: '',
    currency: 1000,
    friends: [
        {
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
    } else {
        handleSignIn(username);
    }
}

const logOut = () => {
    usernameInput.value = '';
    passwordInput.value = '';
    showSignedOutContent();
    closeSideMenu();
}




signInBtn.addEventListener('click', getUsernameAndPassword);
signOutBtn.addEventListener('click', logOut);


//menu

const menuOpenCloseBtn = document.querySelector('.side-menu__toggle-open-icon-js');
const sideMenu = document.querySelector('.side-menu-js');

const openSideMenu = () => {
    sideMenu.classList.add('side-menu--opened');
    menuOpenCloseBtn.style.transform = `rotate(180deg)`;
    // document.body.style.marginLeft = '180px';
}

const closeSideMenu = () => {
    sideMenu.classList.remove('side-menu--opened');
    menuOpenCloseBtn.style.transform = `rotate(0)`;
    // document.body.style.marginLeft = '0';
}

const handleOpenCloseSideMenu = () => {
    if (!sideMenu.classList.contains('side-menu--opened')) {
        openSideMenu();
    } else {
        closeSideMenu();
    }
}

menuOpenCloseBtn.addEventListener('click', handleOpenCloseSideMenu)




