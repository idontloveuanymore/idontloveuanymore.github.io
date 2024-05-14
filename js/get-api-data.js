// links 
const lastfmProfile = 'https://www.last.fm/user/fade_awway';
const lastfmaApi = 'https://idontloveuanymore-lastfm-api.vercel.app/';

function updateTrackInfo(data) {
  document.getElementById('track-name').style.paddingTop = "0px";
  document.getElementById('track-cover').src = data.image_url;
  document.getElementById('track-cover').style.display = "flex";
  document.getElementById('track-name').innerText = data.track_name;
  document.getElementById('track-author').innerText = data.artist_name;
  document.getElementById("audioGif").querySelector("img").style.display = "flex";
  document.getElementById('track-name').addEventListener('click', function() {
    window.location.href = data.play_url ? data.play_url : lastfmProfile;
  });
}

function updateInactiveState() {
  document.getElementById('track-cover').style.display = "none";
  document.getElementById('track-name').style.paddingTop = "5px";
  document.getElementById('track-name').innerText = 'More music';
  document.getElementById('track-author').innerText = "All the tracks I've listened to";
  document.getElementById("audioGif").querySelector("img").style.display = "none";
  document.getElementById('track-name').addEventListener('click', function() {
    window.location.href = lastfmProfile;
  });
}

function updateMusicData() {
  fetch(lastfmaApi)
    .then(response => response.json())
    .then(data => {
      if (data == null || data.scrobbling_state == null) {
        updateInactiveState();
      }
      else {
        updateTrackInfo(data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      updateInactiveState();
    });
}

setInterval(updateMusicData, 10000);
updateMusicData();