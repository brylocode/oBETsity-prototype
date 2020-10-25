const appPrototype = () => {

    //prototypical user login and logout

    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');

    const signOutContent = document.querySelector('.sign-out-content-js');
    const signInContent = document.querySelector('.sign-in-content-js');

    const signInBtn = document.querySelector('.login__sign-in-btn-js');
    const signOutBtn = document.querySelector('.sign-out-btn-js');

    const userNameTopMenuBox = document.querySelector('.user__name-js');
    const userCurrencyBox = document.querySelector('.currency__value-js');
    const userNameDashboardBox = document.querySelector('.dashboard__username-js')


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
            alert('wpisz nazwę użytkownika...');
        } else if (username.length >= 10) {
            alert('nazwa użytkownika nie może być dłuższa niż 10');
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


    //handling menu

    const sideMenu = document.querySelector('.side-menu-js');
    const topMenu = document.querySelector('.top-menu-js');
    let menuLinks = document.querySelectorAll(".side-menu-js a.side-menu__link");
    const menuOpenCloseBtn = document.querySelector('.side-menu__toggle-open-icon-js');
    let links = document.querySelectorAll("a");

    const main = document.querySelector('.main-js');


    const openSideMenu = () => {
        sideMenu.classList.add('side-menu--opened');
        menuOpenCloseBtn.classList.add('side-menu__toggle-open-icon--close');
        main.classList.add('main--sidemenuopened')
        topMenu.classList.add('top-menu--sidemenuopened')
    }

    const closeSideMenu = () => {
        sideMenu.classList.remove('side-menu--opened');
        menuOpenCloseBtn.classList.remove('side-menu__toggle-open-icon--close');
        main.classList.remove('main--sidemenuopened')
        topMenu.classList.remove('top-menu--sidemenuopened')
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


    // handling  application view

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

    //prototypical trrowing challenges

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
    let challengesInProgressStartBtnsArr = document.querySelectorAll('.challenges__in-progress-js .chall button');;

    const handleOpenNewChallModal = () => {
        newChallModal.style.display = 'flex';
    }

    const handleCloseNewChallModal = () => {
        newChallModal.style.display = 'none';
        clearNewChallModalInputs();
    }

    //base base challenge validation

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

    //challenge logic and structure

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
        alert(`
    Rzuciłeś wyzwanie:

        >kategoria: ${whatNewChallInput.value} 
        >wartość: ${valueNewChallInput.value}
        >stawka: ${betNewChallInput.value} kostek cukru
        >czas: ${timeLeftNewChallInput.value}
    
    Poczekaj aż ${whoNewChallInput.value} potwierdzi wyzwanie.
    `);

        let res = confirm(`
    *${whoNewChallInput.value.toUpperCase()} DOSTAJE TAKIE POWIADOMIENIE W SWOJEJ APLIKACJI*

    ${loggedUser.username} rzuca ci wyzwanie:

        >kategoria: ${whatNewChallInput.value}
        >wartość: ${valueNewChallInput.value}
        >stawka: ${betNewChallInput.value} kostek cukru
        >czas: ${timeLeftNewChallInput.value}

    Czy akceptujesz wyzwanie?
    `)

        if (res == true) {
            alert(`
            Hurra... Użytkownik: ${whoNewChallInput.value} zaakceptował Twoje wyzwanie :) 
            Wyzwanie zostało dodane do sekcji "Rzucone".
            Aby rozpocząć wyzwanie kliknij na karcie wyzwania przycisk "Rozpocznij".
            Teraz czas na Ciebie, działaj tak żeby wygrać ;)
        `)
            challengesInProgressSection.appendChild(newChall);
            handleCloseNewChallModal();
        } else {
            alert(`
            Niestety... Rywal wymiękł i nie zaakceptował Twjego wyzwania :( 
                
            Spróbuj za niedługo ponownie :)
            `)
        }

        challengesInProgressStartBtnsArr = document.querySelectorAll('.challenges__in-progress-js .chall button');
        // console.log(challengesInProgressStartBtnsArr);
    }

    newChallBtn.addEventListener('click', handleOpenNewChallModal);
    closeNewChallBtn.addEventListener('click', handleCloseNewChallModal);
    throwChallBtn.addEventListener('click', checkNewChallForm);

    const startChall = (event) => {
        alert('ROZPOCZĄŁEŚ WYZWANIE');
        alert('*WYZWANIE W TRAKCIE*');

        const clickedChallBet = event.path[2];

        // simulation challenge course 

        const randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

        if (randomNumber === 1) {
            alert(`
            Hurra!!! Wygrałeś :) Jeteś coraz bliżej nagrody

            Wyzwanie zostało przeniesione do Archiwum.
        `)

            clickedChallBet.style.display = 'none'
        } else {
            alert(`
            Ups... Niestety rywal był lepszy. Wrócisz silniejszy, walcz dalej

            Wyzwanie zostało przeniesione do Archiwum.
         `);
            clickedChallBet.style.display = 'none'
        }
    }

    challengesInProgressStartBtnsArr.forEach(btn => btn.addEventListener('click', startChall))


    //protootopica friends adding


    const newFriendBtn = document.querySelector('.add-new-friend-btn-js');
    const newFriendConfirmBtn = document.querySelector('.add-new-friend-confirm-btn-js');
    const closeNewFriendBtn = document.querySelector('.close-new-friend-btn-js');
    const newFriendModal = document.querySelector('.new-friend-modal-js');
    const friendContainer = document.querySelector('.friends__container-js');
    const newFriendUserNameInput = document.querySelector('input#friend__username');



    const handleOpenNewFriendModal = () => {
        newFriendModal.style.display = 'flex';
    }

    const handleCloseNewFriendModal = () => {
        newFriendModal.style.display = 'none';
        clearNewFriendModalInput();
    }

    const checkNewFriendForm = () => {
        if (newFriendUserNameInput.value === '') {
            alert('Wprowadź nick nowego znajomego.');
        } else {
            addNewFreind();
        }
    }

    const clearNewFriendModalInput = () => {
        newFriendUserNameInput.value = '';
    }

    const addNewFreind = () => {
        const newFriend = document.createElement('div');

        newFriend.classList.add('friend');

        newFriend.innerHTML = `
        <div class="friend__intro">
            <img src="assets/icons/user.svg" class="user__avatar" alt="avatar użytkownika">
            <span href="#friends" class="friend__name">${newFriendUserNameInput.value}</span>
        </div>
        <a href="#challenges" class=" btn friend__chall-btn">
            Wyzwij <img src="assets/icons/target.svg" alt="ikona wyzwania">
        </a>
    `

        alert(`
        Masz nowego znajomego:  ${newFriendUserNameInput.value}
    
        Możesz od razu rzucić mu wyzwanie.
        
        Gotowy?
    `)
        friendContainer.appendChild(newFriend);
        handleCloseNewFriendModal();
    }


    newFriendBtn.addEventListener('click', handleOpenNewFriendModal);
    closeNewFriendBtn.addEventListener('click', handleCloseNewFriendModal);
    newFriendConfirmBtn.addEventListener('click', checkNewFriendForm);


    //prototopical reward collecting

    const rewardCollectBtns = document.querySelectorAll('.reward-collect-btn');

    //uniqe code generator

    const handleGenerateCode = () => {
        const chars = '0123456789abcdefgh';

        const codesNumber = 1;
        const charsNumber = 8;

        const codesGenerator = () => {
            for (let i = 0; i < codesNumber; i++) {
                let code = '';
                for (let i = 0; i < charsNumber; i++) {
                    const index = Math.floor(Math.random() * chars.length);
                    code += chars[index];
                }
                return code;
            }
        }
        return codesGenerator();
    }


    const handleCollectReward = clickedCollectBtn => {
        const collectedReward = clickedCollectBtn.parentElement.parentElement;
        collectedReward.style.display = 'none';

        const transactionCode = handleGenerateCode();

        let res = confirm(`
        Czy napewno chcesz odebrać kupon?
        `)

        if (res == true) {
            alert(`
        Odebrałeś swoją nagrodę.

        Unikalny kod twojego kuponu to: ${transactionCode}.

        Zgłoś się z nim do wybranego punktu i ciesz się mniejszą wagą!!!
            `)

            collectedReward.style.display = 'none';

            alert(`
            Odebrałeś pomyślnie swoją nagrodę.
            `)

        } else {
            alert(`
              Odbieranie kuponu zostało anulowane...
            `)
        }
    }

    rewardCollectBtns.forEach(btn => btn.addEventListener('click', () => handleCollectReward(btn)))
}


document.addEventListener('DOMContentLoaded', appPrototype);