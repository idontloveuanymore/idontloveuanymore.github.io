// links
const youtubeMusicLink = 'https://music.youtube.com/channel/UC0Ct3r-egm0HyVeCWuhnrew?si=SUaxfebHmeU3pbrd';
const youtubeChannelLink = 'https://www.youtube.com/@idontloveuanymore';
const githubPageLink = 'https://github.com/idontloveuanymore';
const telegramDMLink = 'http://t.me/idontloveuanymore';
const fadeawwayLink = ""

function handleLink(id, color, href) {
    var link = document.getElementById(id);

    link.addEventListener('mouseover', function() {
        this.style.color = color;
        this.style.cursor = 'pointer';
    });

    link.addEventListener('mouseout', function() {
        this.style.color = '';
    });

    link.addEventListener('click', function() {
        window.location.href = href;
    });
}

handleLink('YouTube_link', '#c10015', youtubeChannelLink);
handleLink('YT-Music_link', '#c10015', youtubeMusicLink);
handleLink('Telegram_link', '#c10015', telegramDMLink);
handleLink('GitHub_link', '#c10015', githubPageLink);
handleLink('fade-away', '#c10015', fadeawwayLink);

document.getElementById('track-name').addEventListener('mouseover', function() {
    this.style.color = '#c10015';
    this.style.cursor = 'pointer';
});

document.getElementById('track-name').addEventListener('mouseout', function() {
    this.style.color = '';
});