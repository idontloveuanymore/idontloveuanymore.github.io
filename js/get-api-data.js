function updateMusicData() { 
    fetch('https://qqq-aawdddsssaassss.amvera.io/') 
      .then(response => response.json()) 
      .then(data => { 
        if (data.scrobbling_state !== null && data.play_url !== null) { 
          document.getElementById('track-cover').src = data.image_url;
          document.getElementById('track-cover').style.width = '70px';
          document.getElementById('track-cover').style.height = '70px';
          document.getElementById('track-name').innerText = data.track_name; 
          document.getElementById('track-author').innerText = data.artist_name;
          document.getElementById("audioGif").querySelector("img").src = "https://www.last.fm/static/images/icons/now_playing_grey_12.b4158f8790d0.gif";
          document.getElementById('track-name').addEventListener('click', function() { 
            window.location.href =  data.play_url; 
          }); 
        } else if (data.play_url == null) { 
          document.getElementById('track-cover').src = data.image_url;
          document.getElementById('track-cover').style.width = '70px';
          document.getElementById('track-cover').style.height = '70px';
          document.getElementById('track-name').innerText = data.track_name; 
          document.getElementById('track-author').innerText = data.artist_name; 
          document.getElementById("audioGif").querySelector("img").src = "https://www.last.fm/static/images/icons/now_playing_grey_12.b4158f8790d0.gif";
          document.getElementById('track-name').addEventListener('click', function() { 
            window.location.href =  'https://www.last.fm/user/fade_awway'; 
          }); 
        } else { 
          document.getElementById('track-cover').src = '';
          document.getElementById('track-cover').style.width = '0px';
          document.getElementById('track-cover').style.height = '0px';
          document.getElementById('track-name').innerText = 'More music'; 
          document.getElementById('track-author').innerText = "All the tracks I've listened to"; 
          document.getElementById("audioGif").querySelector("img").src = "https://i.ibb.co/wBtqcq0/inactive.png";
          document.getElementById('track-name').addEventListener('click', function() { 
            window.location.href = 'https://www.last.fm/user/fade_awway'; 
          }); 
        } 
      }) 
      .catch(error => { 
        console.error('Error:', error);
        document.getElementById('track-cover').src = '';
        document.getElementById('track-cover').style.width = '0px';
        document.getElementById('track-cover').style.height = '0px';
        document.getElementById('track-name').innerText = 'More music'; 
        document.getElementById('track-author').innerText = "All the tracks I've listened to"; 
        document.getElementById("audioGif").querySelector("img").src = "https://i.ibb.co/wBtqcq0/inactive.png";
        document.getElementById('track-name').addEventListener('click', function() { 
        window.location.href = 'https://www.last.fm/user/fade_awway'; 
        }); 
      });
  }
  
  setInterval(updateMusicData, 10000); 
  updateMusicData();
