// SIDEBAR

const menuItems = document.querySelectorAll('.menu-item');

// --------------- MESSAGES --------------------
const messageNotification = document.querySelector('#message-notifications');

const messages = document.querySelector('.messages');

const message = message.querySelectorAll('.messages');

const messageSearch = message.querySelector('#message-search');




// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup')
            .style.display = 'none';
            document.querySelector('#notifications .notification-count')
            .style.display = 'block';
        } else {
            document.querySelector('.notifications-popup')
            .style.display = 'block';

           
            document.querySelector('#notifications .notification-count')
            .style.display = 'none';
        }
    })
});

// Messages

messageNotification.addEventListener('click', () => {
    messages
    .style
    .boxShadow = '0 0 1rem var(--color-primary)';

    messageNotification
    .querySelector('.notification-count')
    .style
    .display = 'none';

    setTimeout(() => {
         messages.style.boxShadow = 'none';
    }, 2000)


   


})



