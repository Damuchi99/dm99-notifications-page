let mark_as_read_btn = document.getElementById('mark-as-read');
let unread_notifications = document.querySelectorAll('.unread-notification');
let red_dots = document.querySelectorAll('.dot');
let notification_number = document.getElementById('notification-number')

mark_as_read_btn.addEventListener('click', function(){
    for (let i = 0; i < unread_notifications.length; i++) {
        unread_notifications[i].classList.remove('unread-notification');
        red_dots[i].remove();
        notification_number.innerHTML = "0";
    }
});