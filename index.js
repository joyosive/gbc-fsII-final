
    var songs = [
    {
        "artist": "Halsey",
        "song":"Be kind",
        "time":"2:54",
        "album":"Be Kind",
        "rating":"3.0",
        "genre": "Classical",
        "imgUrl": "./img/01.jpeg"
    },
    {
        "artist": "Post Malone",
        "song":"Deja Vu",
        "time":"3:54",
        "album":"Stoney",
        "rating":"4.0",
        "genre": "Jazz",
        "imgUrl": "./img/02.jpeg"
      },
      {
        "artist": "Drake",
        "song":"Survival",
        "time":"2:14",
        "album":"Scorpion",
        "rating":"4.0",
        "genre": "Rock",
         "imgUrl": "./img/03.jpeg"
      },
      {
        "artist": "LSD",
        "song":"Genius",
        "time":"3:33",
        "album":"LSD",
        "rating":"5.0",
        "genre": "Rock",
         "imgUrl": "./img/04.jpeg"
      },
      {
        "artist": "Taylor Swift",
        "song":"Be kind",
        "time":"2:54",
        "album":"Be Kind",
        "rating":"3.0",
        "genre": "Jazz",
         "imgUrl": "./img/05.jpeg"
      },
      {
        "artist": "Halsey",
        "song":"End Game",
        "time":"3:33",
        "album":"Reputation",
        "rating":"5.0",
        "genre": "Jazz",
         "imgUrl": "./img/06.jpeg"
      },
      {
         "artist": "Frank Sinatra",
         "song":"Fly Me To The Moon",
         "time":"3:44",
         "album":"1964",
         "rating":"5.0",
         "genre": "Jazz",
         "imgUrl": "./img/07.jpeg"
      },
      {
          "artist": "Duke Ellington",
          "song":"Mood Indigo",
          "time":"5:44",
          "album":"Masterpieces",
          "rating":"5.0",
          "genre": "Classical",
          "imgUrl": "./img/08.jpeg"

      },
      {
           "artist": "Tommy Stinson",
            "song":"Situation",
            "time":"4:30",
            "album":"loose Ends",
            "rating":"3.0",
            "genre": "Rock",
            "imgUrl": "./img/09.jpeg"

      },
        {
            "artist": "Tommy Stinson",
            "song":"Shortcut",
            "time":"3:55",
            "album":"Loose Ends",
            "rating":"4.0",
            "genre": "Rock",
            "imgUrl": "./img/7.png"

        },
        {
            "artist": "Tommy Stinson",
            "song":"Never Aim To Please",
            "time":"3:50",
            "album":"loose Ends",
            "rating":"4.0",
            "genre": "Rock",
            "imgUrl": "./img/6.png"

        },
        {
            "artist": "Thom Jurik",
            "song":"Call me Star",
            "time":"5:30",
            "album":"All Them Witches",
            "rating":"5.0",
            "genre": "Rock",
            "imgUrl": "./img/5.png"

        },
        {
            "artist": "Ace",
            "song":"How Long",
            "time":"4:56",
            "album":"Genius",
            "rating":"4.0",
            "genre": "Rock",
            "imgUrl": "./img/4.jpg"
        },
        {
            "artist": "Alessi Brothers",
            "song":"Oh Lori",
            "time":"4:10",
            "album":"Today",
            "rating":"3.0",
            "genre": "Rock",
            "imgUrl": "./img/3.png"

        },
        {
            "artist": "Henry Gross",
            "song":"Shannon",
            "time":"5:30",
            "album":"Escape",
            "rating":"4.0",
            "genre": "Rock",
            "imgUrl": "./img/2.jpg"

        },
        {
            "artist": "Vivaldi",
            "song":"4 Seasons",
            "time":"3:30",
            "album":"Seasons",
            "rating":"5.0",
            "genre": "Classical",
            "imgUrl": "./img/1.jpg"

        },
        {
            "artist": "Bizet",
            "song":"Carmen",
            "time":"6:30",
            "album":"Homage",
            "rating":"4.0",
            "genre": "Classical",
            "imgUrl": "./img/001.png"

        },
        {
            "artist": "Rosini",
            "song":"Overture",
            "time":"4:50",
            "album":"Rhythm",
            "rating":"4.0",
            "genre": "Classical",
            "imgUrl": "./img/002.jpg"

        },
        {
            "artist": "Billie holiday",
            "song":"Strange Fruit",
            "time":"6:30",
            "album":"Giant",
            "rating":"5.0",
            "genre": "Jazz",
            "imgUrl": "./img/003.jpg"

        },
        {
            "artist": "Cosmic Gate",
            "song":"Exploration",
            "time":"4:23",
            "album":"Space",
            "rating":"1.0",
            "genre": "Trance",
            "imgUrl": "./img/005.png"

        },
        {
            "artist": "Billy Joel",
            "song":"This Night",
            "time":"4:44",
            "album":"Eyes",
            "rating":"2.0",
            "genre": "Jazz",
            "imgUrl": "./img/004.png"

        },
        {
            "artist": "Sammy Johns",
            "song":"Chevy Vans",
            "time":"3:30",
            "album":"Lights",
            "rating":"4.0",
            "genre": "Classical",
            "imgUrl": "./img/85.jpg"

        }



    ]

    // Global Variables
    var artistInputField = null;
    var songInputField = null;
    var genreInputField = null;
    var albumInputField = null;
    var songsTable = null;
    let allHeaders = ["Artist","Song","Time","Album","Rating","Genre","",""]
    var favouriteSongs = []
    var favSongDivElement = null;
    const CACHE_KEY = "favSongsListCache"

    const initControls = function () {

        //input fields
        artistInputField = document.getElementById('artist')
        songInputField = document.getElementById('song')
        genreInputField = document.getElementById('genre')
        albumInputField = document.getElementById('album')
        songsTable = document.getElementById('songsTable')
        favSongDivElement = document.getElementById('favSongs')
    }

    // Event Handlers
    const setupHandlers = function () {
        document.addEventListener("submit",handleSearch)
    }

    const handleSearch = function(event) {

        event.preventDefault();
        //get the search terms from the input field
        let searchArtist = artistInputField.value.toLowerCase();
        let searchSong = songInputField.value.toLowerCase();
        let searchGenre = genreInputField.value.toLowerCase();
        let searchAlbum = albumInputField.value.toLowerCase();

        if (searchArtist === "" && searchAlbum === "" && searchSong === "" && searchGenre === ""){
            alert("Please enter search criteria")
        }
        else{
            let resultArray = songs.filter(item =>{
                return item.artist.toLowerCase().includes(searchArtist)
                    && item.song.toLowerCase().includes(searchSong)
                    && item.album.toLowerCase().includes(searchAlbum)
                    && item.genre.toLowerCase().includes(searchGenre)
            })

            clearTable()
            updateTable(resultArray);
        }
    }

    const updateTable = function(resultArray){

        createTableHeader();
        for(let i = 0; i < resultArray.length; i++){
            let row = songsTable.insertRow();
            appendTextCellForTableRow(row, resultArray[i].artist);
            appendTextCellForTableRow(row, resultArray[i].song);
            appendTextCellForTableRow(row,resultArray[i].time);
            appendTextCellForTableRow(row, resultArray[i].album);
            appendTextCellForTableRow(row, resultArray[i].rating);
            appendTextCellForTableRow(row, resultArray[i].genre);
            appendFavButtonToTableRow(row,  resultArray[i]);
            appendDownloadButtonToTableRow(row);
        }
    };

    //DOM Manipulation
    const createTableHeader = function (){
        let headerRow = songsTable.insertRow();

        allHeaders.forEach(function(item) {
            let headerCell = document.createElement("th");
            headerCell.innerHTML = item
            headerCell.setAttribute("align","center");
            headerRow.appendChild(headerCell);
        });
    };

    const appendTextCellForTableRow = function(row,innerHtml){
        let tdElement = row.insertCell();
        tdElement.setAttribute("align","center");
        tdElement.innerHTML = innerHtml;
        return tdElement
    };

    const getImageForCaraousel = function (songObj){
        let imgElement = document.createElement("img")
        imgElement.src = songObj.imgUrl
        imgElement.addEventListener("click", function(event) {
            onClickFavImage(songObj, event);
        })
        return imgElement
    }

    const appendFavButtonToTableRow = function(row, songObj){
        let tdElement = row.insertCell();
        let favButton = document.createElement("button");
        favButton.textContent = "Favorite";
        favButton.onclick = function() {onClickFavBtn(songObj)}
        tdElement.appendChild(favButton);
    };

    const appendDownloadButtonToTableRow = function(row){
        let tdElement = row.insertCell();
        let downloadButton = document.createElement("button");
        downloadButton.textContent = "Download";
        downloadButton.onclick = onClickDownloadBtn;
        tdElement.appendChild(downloadButton);
    };

    //onclick Methods
    const onClickDownloadBtn = function (){
        alert("Download started!")
    }

    const onClickFavImage =  function (songObj,event){
        event.target.remove();

        //remove deleted song from favorite list
        favouriteSongs.splice(favouriteSongs.findIndex(item => {
            return item.artist === songObj.artist && item.song === songObj.song && item.album === songObj.album
        }) , 1)

        updateFavSongsInLocalStorage();
    }

    const onClickFavBtn = function(songObj){

        if (favouriteSongs.filter(item => item.artist === songObj.artist && item.song === songObj.song && item.album === songObj.album).length > 0) {
            alert("Already favorite!")
        }else {
            favouriteSongs.push(songObj)
            let imgElement = getImageForCaraousel(songObj)
            favSongDivElement.appendChild(imgElement)
            updateFavSongsInLocalStorage();
        }

    }

    const clearTable = function(){
        while (songsTable.firstChild) {
            songsTable.removeChild(songsTable.lastChild);
        }
    }

    //localstorege cache

    const updateFavSongsInLocalStorage = function (){
        localStorage.setItem(CACHE_KEY, JSON.stringify(favouriteSongs));
    }

    const retreiveFavSongsDataAndRender = function (){
        let retrievedFavList = localStorage.getItem(CACHE_KEY);
        if (retrievedFavList){
            favouriteSongs = JSON.parse(retrievedFavList)
            favouriteSongs.forEach(function(item) {
                let imgElement = getImageForCaraousel(item)
                favSongDivElement.appendChild(imgElement)
            })
        }
    }

    window.onload = () => {
        console.log("window loaded..");

        initControls();
        setupHandlers();
        retreiveFavSongsDataAndRender()
    };
