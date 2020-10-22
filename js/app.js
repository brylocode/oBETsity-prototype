//login

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

const signOutContent = document.querySelector('.sign-out-content-js');
const signInContent = document.querySelector('.sign-in-content-js');

const signInBtn = document.querySelector('.login__sign-in-btn-js');
const signOutBtn = document.querySelector('.sign-out-btn-js');

const userNameTopMenuBox = document.querySelector('.user__name-js');
const userCurrencyBox = document.querySelector('.currency__value-js');
const userNameDashboardBox = document.querySelector('.dashboard__username-js')


console.log(userNameTopMenuBox)

let loggedUser = {
    username: '',
    avatar: '',
    currency: 1000,
    friends: [],
    achievements: [],
};


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

const handleFetchUserData = loggedUser => {
    userNameTopMenuBox.textContent = `${loggedUser.username}`;
    userCurrencyBox.textContent = `${loggedUser.currency}`;
    userNameDashboardBox.textContent = `${loggedUser.username}`;
}


const handleSignIn = loggedUser => {
    handleFetchUserData(loggedUser);
    showSignedInContent();
}

const getUsernameAndPassword = () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    loggedUser = {
        username: username,
        avatar: '',
        currency: 984,
        friends: [],
        achievements: [],
    }
    if (username === '') {
        showError('wpisz nazwę użytkownika...');
    } else if (username.length >= 10) {
        showError('nazwa użytkownika nie może być dłuższa niż 10');
    } else {

        handleSignIn(loggedUser);
    }
}


const logOut = () => {
    usernameInput.value = '';
    passwordInput.value = '';
    userNameTopMenuBox.textContent = ``;

    loggedUser = {
        username: '',
        avatar: '',
        currency: 1000,
        friends: [],
        achievements: [],
    };

    showSignedOutContent();
    closeSideMenu();
}




signInBtn.addEventListener('click', getUsernameAndPassword);
signOutBtn.addEventListener('click', logOut);


//menu

const menuOpenCloseBtn = document.querySelector('.side-menu__toggle-open-icon-js');
const sideMenu = document.querySelector('.side-menu-js');
let menuLinks = document.querySelectorAll(".side-menu-js a.side-menu__link");
let links = document.querySelectorAll("a");
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




for (let link of links) {
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

//challenges

const newChallBtn = document.querySelector('.new-chall-btn-js');
const throwChallBtn = document.querySelector('.throw-chall-btn-js');
const closeNewChallBtn = document.querySelector('.close-new-chall-btn-js');
const newChallModal = document.querySelector('.new-chall-modal-js');

const newChallFormInputs = document.querySelectorAll('.new-chall__form label+input');

const whoNewChallInput = document.querySelector('input#who');
const whatNewChallInput = document.querySelector('input#what');
const valueNewChallInput = document.querySelector('input#value');
const betNewChallInput = document.querySelector('input#bet');
const timeLeftNewChallInput = document.querySelector('input#time-left');

const challengesInProgressSection = document.querySelector('.challenges__in-progress-js');


const handleOpenNewChallModal = () => {
    newChallModal.style.display = 'flex';
}

const handleCloseNewChallModal = () => {
    newChallModal.style.display = 'none';
    clearNewChallModalInputs();
}

const checkNewChallForm = () => {
    if (whoNewChallInput.value === '') {
        alert('wprowadź odbiorcę wyzwania');
    } else if (whatNewChallInput.value === '') {
        alert('wprowadź konkurencję wyzwania');
    } else if (whatNewChallInput.value === '') {
        alert('wprowadź konkurencję wyzwania');
    } else if (valueNewChallInput.value === '') {
        alert('wprowadź jednostkę wyzwania');
    } else if (betNewChallInput.value === '') {
        alert('wprowadź stawkę wyzwania');
    } else if (timeLeftNewChallInput.value === '') {
        alert('wprowadź czas do końca wyzwania');
    } else {
        createNewChall();
    }
}

const clearNewChallModalInputs = () => {
    newChallFormInputs.forEach(input => input.value = '');
}


const createNewChall = () => {
    const newChall = document.createElement('div');
    newChall.classList.add('chall');

    newChall.innerHTML = `
        <div class="chall__header">
            <div class="chall__what">
                <h5 class="chall__title">${whatNewChallInput.value}</h5>
                <img src="assets/icons/target.svg" alt="ikona wyzwania" class="chall__icon">
            </div>
            <span class="chall__value">0/${valueNewChallInput.value}</span>
        </div>
        <div class="chall__body">
            <div class="chall__who">
                <div class="user">
                    <img src="assets/icons/user.svg" class="user__avatar avatar-cream"
                        alt="avatar użytkownika">
                    <a href="#friends" class="user__name">${whoNewChallInput.value}</a>
                </div>
                <span class="chall__time-left">zostały ${timeLeftNewChallInput.value}</span>
            </div>
            <span class="chall__bet">${betNewChallInput.value} <img src="assets/icons/cube.svg" alt="ikona waluty"></span>
        </div>
        <div class="chall__footer">
            <button class="btn start-chall-btn">Rozpocznij <img src="assets/icons/alarm.svg"
                    alt="ikona stopera">
            </button>
        </div>
    `
    alert(`Rzuciłeś wyzwanie:

    >kategoria: ${whatNewChallInput.value} 
    >wartość: ${valueNewChallInput.value}
    >stawka: ${betNewChallInput.value} kostek cukru
    >czas: ${timeLeftNewChallInput.value}
    
    Poczekaj aż ${whoNewChallInput.value} potwierdzi wyzwanie.`);

    let res = confirm(`*${whoNewChallInput.value.toUpperCase()} DOSTAJE TAKIE POWIADOMIENIE W SWOJEJ APLIKACJI*

    ${loggedUser.username} rzuca ci wyzwanie:

    >kategoria: ${whatNewChallInput.value}
    >wartość: ${valueNewChallInput.value}
    >stawka: ${betNewChallInput.value} kostek cukru
    >czas: ${timeLeftNewChallInput.value}

    Czy akceptujesz wyzwanie?
    `)

    if (res == true) {
        alert(`Hurra... Użytkownik: ${whoNewChallInput.value} zaakceptował Twoje wyzwanie :) 
        Wyzwanie zostało dodane do sekcji "Rzucone".
        Aby rozpocząć wyzwanie kliknij na karcie wyzwania przycisk "Rozpocznij".
        Teraz czas na Ciebie, działaj tak żeby wygrać ;)`)
        challengesInProgressSection.appendChild(newChall);
        handleCloseNewChallModal();
    } else {
        alert(`Niestety... Rywal wymiękł i nie zaakceptował Twjego wyzwania :( 
            Spróbuj za niedługo ponownie :)`)
    }
}

newChallBtn.addEventListener('click', handleOpenNewChallModal);
closeNewChallBtn.addEventListener('click', handleCloseNewChallModal);
throwChallBtn.addEventListener('click', checkNewChallForm);