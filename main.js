const popupContainer2 = document.getElementById("popupContainer");
    const popupPlayerList2 = document.getElementById("popupPlayerInfo");

const myInput = document.querySelector(".myinput");
document.addEventListener("DOMContentLoaded", () => {
    const playerList = document.getElementById("playerList");
    const totalPlayersText = document.getElementById("totalPlayersText");

    let totalPlayers = 0;
    const maxPlayers = 18;

    fetch('./players.json')
        .then(res => res.json())
        .then(data => {
            const players = data.players;

            players.forEach(player => {
                const playerItem = document.createElement("div");
                playerItem.className = "player-item";
                 if(player.position==='GK'){
                    playerItem.innerHTML =
                       
                    ` <button class="add-to-team-btn">
                    <img src="${player.photo}" alt="${player.name}" class="player-photo">
                    <div class="player-info">
                        <h4>${player.name}</h4>
                        <p>Position: ${player.position}</p>
                        
                       <div class="player-grid" >
                       <div class="player-info-name" > RAT DIV HAN KIC REF SPD POS</div>
                        <div class="player-info"> <span> ${player.rating}</span><span> ${player.diving}</span><span> ${player.handling}</span><span> ${player.kicking} </span><span>${player.reflexes}</span><span>${player.speed}</span><span>${player.positioning}</span></div>
                        <p> <img src="${player.logo}" alt="${player.club}" class="club-logo"> ${player.club}</p>
                        <p> <img src="${player.flag}" alt="${player.nationality}" class="flag-icon"> ${player.nationality}</p>
                        
                        </div>
                        </div>
                   </button>
                `;
                 }
                 else{
                playerItem.innerHTML =
                 ` <button class="add-to-team-btn">
                    <img src="${player.photo}" alt="${player.name}" class="player-photo">
                    <div class="player-info">
                        <h4>${player.name}</h4>
                        <p>Position: ${player.position}</p>

                       <div class="player-grid" >
                        <div class="player-info-name"> ${'RAT'} ${'PAC'} ${'SHO'} ${'PAS'} ${'DRI'} ${'DEF'}  ${'PHY'} </div>
                        <div class="player-info" > <span>${player.rating}</span> <span>${player.pace}</span> <span>${player.shooting}</span> <span>${player.passing}</span><span> ${player.dribbling}</span><span>${player.defending}</span> <span>${player.physical}</span> </div>
                           <p><img src="${player.logo}" alt="${player.club}" class="club-logo"> ${player.club}</p>
                        <p> <img src="${player.flag}" alt="${player.nationality}" class="flag-icon"> ${player.nationality}</p>
                        
                        </div>
                        </div>
                   </button>
                `;
            }
                playerItem.querySelector(".add-to-team-btn").addEventListener("click", () => {
                    if (totalPlayers < maxPlayers) {
                        totalPlayers++;
                        totalPlayersText.textContent = `Total Players: ${totalPlayers} / ${maxPlayers}`;
                        // alert(`${player.name} added to your team!`);
                    } else {
                        alert("Team is full! You cannot add more players.");
                    }
                });

                playerList.appendChild(playerItem);
            });
        })
        .catch(err => console.error("Error loading players:", err));
});
  
document.getElementById('togglePopupBtn').addEventListener('click', function() {
    var popupContainer = document.getElementById('popupFormContainer');
    popupContainer.style.display = (popupContainer.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
    var popupContainer = document.getElementById('popupFormContainer');
    popupContainer.style.display = 'none';
});
document.getElementById('closePopup2').addEventListener('click', function() {
    var popupContainer = document.getElementById('popupFormContainer');
    popupContainer2.style.display = 'none';
});


const popupFormContainer = document.getElementById('popupFormContainer');
const togglePopupBtn = document.getElementById('togglePopupBtn');
const closePopupBtn = document.getElementById('closePopup');

function togglePopup() {
    popupFormContainer.classList.toggle('hidden');
}

togglePopupBtn.addEventListener('click', togglePopup);
closePopupBtn.addEventListener('click', togglePopup);

popupFormContainer.addEventListener('click', (event) => {
    if (event.target === popupFormContainer) {
        togglePopup();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const playerPositionSelect = document.getElementById('playerPosition');
    const myInput = document.querySelector(".myinput");
    const addPlayerButton = document.getElementById('btnAjouter'); 

    function updateInputs(position) {
        if (position === "GK") {
            myInput.innerHTML = `
                <div><input type="number" id="playerRating" placeholder="Rating" name="playerRating" min="0" max="100" required></div>
                <div><input type="number" id="playerDiving" placeholder="Diving" name="playerDiving" min="0" max="100" required></div>
                <div><input type="number" id="playerHandling" placeholder="Handling" name="playerHandling" min="0" max="100" required></div>
                <div><input type="number" id="playerKicking" placeholder="Kicking" name="playerKicking" min="0" max="100" required></div>
                <div><input type="number" id="playerReflexes" placeholder="Reflexes" name="playerReflexes" min="0" max="100" required></div>
                <div><input type="number" id="playerSpeed" placeholder="Speed" name="playerSpeed" min="0" max="100" required></div>
                <div><input type="number" id="playerPositioning" placeholder="Positioning" name="playerPositioning" min="0" max="100" required></div>
            `;
        } else {
            myInput.innerHTML = `
                <div><input type="number" id="playerRating" placeholder="Rating" name="playerRating" min="0" max="100" required></div>
                <div><input type="number" id="playerPace" placeholder="Pace" name="playerPace" min="0" max="100" required></div>
                <div><input type="number" id="playerShooting" placeholder="Shooting" name="playerShooting" min="0" max="100" required></div>
                <div><input type="number" id="playerPassing" placeholder="Passing" name="playerPassing" min="0" max="100" required></div>
                <div><input type="number" id="playerDribbling" placeholder="Dribbling" name="playerDribbling" min="0" max="100" required></div>
                <div><input type="number" id="playerDefending" placeholder="Defending" name="playerDefending" min="0" max="100" required></div>
                <div><input type="number" id="playerPhysical" placeholder="Physical" name="playerPhysical" min="0" max="100" required></div>
            `;
        }
    }

    playerPositionSelect.addEventListener("change", () => {
        updateInputs(playerPositionSelect.value);
    });

    addPlayerButton.addEventListener("click", (e) => {
        e.preventDefault(); 
        const playerName = document.getElementById('playerName').value;
        const playerImg = document.getElementById('playerimg').value;
        const clubImg = document.getElementById('clubimg').value;
        const clubName = document.getElementById('clubname').value;
        const playerPosition = document.getElementById('playerPosition').value;
        const nationalityimg = document.getElementById('nationalityimg').value;
        const nationalityname = document.getElementById('nationalityname').value;

        const playeItem = document.createElement("div");
        playeItem.className = "player-item";

        if (playerPosition === 'GK') {
            const playerRating = document.getElementById('playerRating').value;
            const playerDiving = document.getElementById('playerDiving').value;
            const playerHandling = document.getElementById('playerHandling').value;
            const playerKicking = document.getElementById('playerKicking').value;
            const playerReflexes = document.getElementById('playerReflexes').value;
            const playerSpeed = document.getElementById('playerSpeed').value;
            const playerPositioning = document.getElementById('playerPositioning').value;

            playeItem.innerHTML = `
                <button class="add-to-team-btn">
                    <img src="${playerImg}" alt="${playerName}" class="player-photo">
                    <div class="player-info">
                        <h4>${playerName}</h4>
                        <p>Position: ${playerPosition}</p>
                        <div class="player-grid">
                            <div class="player-info-name"> RAT DIV HAN KIC REF SPD POS</div>
                            <div class="player-info">
                                <span>${playerRating}</span>
                                <span>${playerDiving}</span>
                                <span>${playerHandling}</span>
                                <span>${playerKicking}</span>
                                <span>${playerReflexes}</span>
                                <span>${playerSpeed}</span>
                                <span>${playerPositioning}</span>
                            </div>
                            <p><img src="${clubImg}" alt="${clubName}" class="club-logo"> ${clubName}</p>
                            <p><img src="${nationalityimg}" alt="${nationalityname}" class="flag-icon"> ${nationalityname}</p>
                        </div>
                    </div>
                </button>
            `;
        } else {
            const playerRating = document.getElementById('playerRating').value;
            const playerPace = document.getElementById('playerPace').value;
            const playerShooting = document.getElementById('playerShooting').value;
            const playerPassing = document.getElementById('playerPassing').value;
            const playerDribbling = document.getElementById('playerDribbling').value;
            const playerDefending = document.getElementById('playerDefending').value;
            const playerPhysical = document.getElementById('playerPhysical').value;

            playeItem.innerHTML = `
                <button class="add-to-team-btn">
                    <img src="${playerImg}" alt="${playerName}" class="player-photo">
                    <div class="player-info">
                        <h4>${playerName}</h4>
                        <p>Position: ${playerPosition}</p>
                        <div class="player-grid">
                            <div class="player-info-name"> RAT PAC SHO PAS DRI DEF PHY</div>
                            <div class="player-info">
                                <span>${playerRating}</span>
                                <span>${playerPace}</span>
                                <span>${playerShooting}</span>
                                <span>${playerPassing}</span>
                                <span>${playerDribbling}</span>
                                <span>${playerDefending}</span>
                                <span>${playerPhysical}</span>
                            </div>
                            <p><img src="${clubImg}" alt="${clubName}" class="club-logo"> ${clubName}</p>
                            <p><img src="${nationalityimg}" alt="${nationalityname}" class="flag-icon"> ${nationalityname}</p>
                        </div>
                    </div>
                </button>
            `;
        }

        document.getElementById("playerList").appendChild(playeItem);
    });
});




// function addPlayerPopup(position, button) {
//     const popupposition = document.querySelector('.positionplay').value;
//     const popupContainer = document.querySelector('.container2');
//     const popupPlayerInfo = document.getElementById('popupPlayerInfo');
//     popupContainer.style.display = 'block';
    
// if(popupposition=='st'){addPlayerPopup
//     popupPlayerInfo.innerHTML = `
//       <button class="add-to-team-btn">
//                     <img src="${playerImg}" alt="${playerName}" class="player-photo">
//                     <div class="player-info">
//                         <h4>${playerName}</h4>
//                         <p>Position: ${playerPosition}</p>
//                         <div class="player-grid">
//                             <div class="player-info-name"> RAT PAC SHO PAS DRI DEF PHY</div>
//                             <div class="player-info">
//                                 <span>${playerRating}</span>
//                                 <span>${playerPace}</span>
//                                 <span>${playerShooting}</span>
//                                 <span>${playerPassing}</span>
//                                 <span>${playerDribbling}</span>
//                                 <span>${playerDefending}</span>
//                                 <span>${playerPhysical}</span>
//                             </div>
//                             <p><img src="${clubImg}" alt="${clubName}" class="club-logo"> ${clubName}</p>
//                             <p><img src="${nationalityimg}" alt="${nationalityname}" class="flag-icon"> ${nationalityname}</p>
//                         </div>
//                     </div>
//                 </button>
//             `;
// }







//     // popupPlayerInfo.innerHTML = `
//     //     <h2>Choose a player for position: ${position.toUpperCase()}</h2>
//     //     <input type="text" id="playerName" placeholder="Enter Player Name" />
//     //     <button onclick="addPlayer('${position}')">Add Player</button>
//     // `;

//     const closePopupBtn = document.getElementById('closePopup2');
//     closePopupBtn.onclick = () => {
//         popupContainer.style.display = 'none';  
//     };
// }
function addPlayerPopup(position, button) {
    selectedPosition = position;
    popupPlayerList2.innerHTML=''

    
    popupContainer2.style.display = "block";

    // popupPlayerList.innerHTML = ''; // Clear previous player list

    // Fetch and display players for the selected position
    fetch('./players.json')
        .then(res => res.json())
        .then(data => {
            const players = data.players.filter(player => player.position.toLowerCase() === position );
            players.forEach(player => {
                const playerItem = document.createElement("div");
                playerItem.className = "player-item";
              
                playerItem.innerHTML = `
                    <div class="player-info" style="width:300px;" >
                        <img src="${player.photo}" alt="${player.name}" class="player-photo " style="width:100px;height:180px;">
                        <h4>${player.name}</h4>
                        <p>Position: ${player.position}</p>
                        <button class="select-player-btn" style="background-color:red">Select</button>
                    </div>
                `;
                playerItem.querySelector(".select-player-btn").addEventListener("click", () => {
                    if(player.position=='GK'){
                        button.innerHTML = `
                        <div class="player-infos"  style="  background-image: url(/src/assets/img/badge_total_rush.webp) ;
        background-size:contain ;
        background-repeat: no-repeat; ">
                            <img src="${player.photo}" alt="${player.name}" class="player-photos " style="width:80px;height:70px;  ">
                            <p style="font-size:9px; width:120px;text-align: center;">${player.name}</p>
                            <p> ${player.position}</p>
                            <div class="player-info-name" style="font-size:6px"  > RAT DIV HAN KIC REF SPD POS</div>
                             <div class="player-info"> <span style="font-size:6px"> ${player.rating}</span><span style="font-size:6px"> ${player.diving}</span><span style="font-size:6px"> ${player.handling}</span><span style="font-size:6px"> ${player.kicking} </span><span style="font-size:6px">${player.reflexes}</span><span style="font-size:6px">${player.speed}</span><span style="font-size:6px">${player.positioning}</span></div>
                            <button  class="select-player-btnes" style="background-color:red; font-size:6px" >Select</button>
    
                        </div>
                    `;
                    }
                    else{
                    button.innerHTML = `
                    <div class="player-info"  style="background-image: url(/src/assets/img/badge_total_rush.webp) ;
    background-size:contain ;
    background-repeat: no-repeat;">
                        <img src="${player.photo}" alt="${player.name}" class="player-photos " style="width:80px;height:70px;  ">
                        <p style="font-size:10px; width:120px;text-align: center;">${player.name}</p>
                        <p> ${player.position}</p>
                        <div class="player-info-name" style="font-size:7px"> ${'RAT'} ${'PAC'} ${'SHO'} ${'PAS'} ${'DRI'} ${'DEF'}  ${'PHY'} </div>
                        <div class="player-info"  > <span style="font-size:6px">${player.rating}</span> <span style="font-size:6px">${player.pace}</span> <span style="font-size:6px">${player.shooting}</span> <span style="font-size:6px">${player.passing}</span><span style="font-size:6px"> ${player.dribbling}</span><span style="font-size:6px">${player.defending}</span> <span style="font-size:6px">${player.physical}</span> </div>
                <button  class="select-player-btnes" style="background-color:red; font-size:6px" >Select</button>

                    </div>
                `;

            }
                 });
                popupPlayerList2.appendChild(playerItem);
            });
        })
        .catch(err => console.error("Error loading players:", err));
 
}

let allPlayers = []; // Array to store all players (fetched + added)

const displayPlayersByPosition = (position) => {
    // Clear existing displayed players
    popupPlayerList2.innerHTML = '';

    // Filter players by position and display them
    const playersToDisplay = allPlayers.filter(player => player.position.toLowerCase() === position);
    
    playersToDisplay.forEach(player => {
        const playerItem = document.createElement("div");
        playerItem.className = "player-item";

        playerItem.innerHTML = `
            <div class="player-info" style="width:300px;">
                <img src="${player.photo}" alt="${player.name}" class="player-photo " style="width:100px;height:180px;">
                <h4>${player.name}</h4>
                <p>Position: ${player.position}</p>
                <button class="select-player-btn" style="background-color:red">Select</button>
            </div>
        `;
        playerItem.querySelector(".select-player-btn").addEventListener("click", () => {
            if(player.position === 'GK'){
                button.innerHTML = `
                    <div class="player-infos"  style="background-image: url(/src/assets/img/badge_total_rush.webp); background-size:contain; background-repeat: no-repeat;">
                        <img src="${player.photo}" alt="${player.name}" class="player-photos " style="width:80px;height:70px;">
                        <p style="font-size:9px; width:120px;text-align: center;">${player.name}</p>
                        <p> ${player.position}</p>
                        <div class="player-info-name" style="font-size:6px"> RAT DIV HAN KIC REF SPD POS</div>
                        <div class="player-info"> 
                            <span style="font-size:6px">${player.rating}</span>
                            <span style="font-size:6px">${player.diving}</span>
                            <span style="font-size:6px">${player.handling}</span>
                            <span style="font-size:6px">${player.kicking}</span>
                            <span style="font-size:6px">${player.reflexes}</span>
                            <span style="font-size:6px">${player.speed}</span>
                            <span style="font-size:6px">${player.positioning}</span>
                        </div>
                        <button class="select-player-btnes" style="background-color:red; font-size:6px">Select</button>
                    </div>
                `;
            } else {
                button.innerHTML = `
                    <div class="player-info" style="background-image: url(/src/assets/img/badge_total_rush.webp); background-size:contain; background-repeat: no-repeat;">
                        <img src="${player.photo}" alt="${player.name}" class="player-photos " style="width:80px;height:70px;">
                        <p style="font-size:10px; width:120px;text-align: center;">${player.name}</p>
                        <p>${player.position}</p>
                        <div class="player-info-name" style="font-size:7px"> RAT PAC SHO PAS DRI DEF PHY </div>
                        <div class="player-info">
                            <span style="font-size:6px">${player.rating}</span>
                            <span style="font-size:6px">${player.pace}</span>
                            <span style="font-size:6px">${player.shooting}</span>
                            <span style="font-size:6px">${player.passing}</span>
                            <span style="font-size:6px">${player.dribbling}</span>
                            <span style="font-size:6px">${player.defending}</span>
                            <span style="font-size:6px">${player.physical}</span>
                        </div>
                        <button class="select-player-btnes" style="background-color:red; font-size:6px">Select</button>
                    </div>
                `;
            }
        });

        popupPlayerList2.appendChild(playerItem);
    });
};








addPlayerButton.addEventListener("click", (e) => {
    e.preventDefault(); 

    const playerName = document.getElementById('playerName').value;
    const playerImg = document.getElementById('playerimg').value;
    const clubImg = document.getElementById('clubimg').value;
    const clubName = document.getElementById('clubname').value;
    const playerPosition = document.getElementById('playerPosition').value;
    const nationalityimg = document.getElementById('nationalityimg').value;
    const nationalityname = document.getElementById('nationalityname').value;

    const newPlayer = {
        name: playerName,
        photo: playerImg,
        position: playerPosition,
        clubLogo: clubImg,
        clubName: clubName,
        nationalityImg: nationalityimg,
        nationalityName: nationalityname,
        rating: document.getElementById('playerRating').value,
        diving: document.getElementById('playerDiving').value,
        handling: document.getElementById('playerHandling').value,
        kicking: document.getElementById('playerKicking').value,
        reflexes: document.getElementById('playerReflexes').value,
        speed: document.getElementById('playerSpeed').value,
        positioning: document.getElementById('playerPositioning').value,
        pace: document.getElementById('playerPace').value,
        shooting: document.getElementById('playerShooting').value,
        passing: document.getElementById('playerPassing').value,
        dribbling: document.getElementById('playerDribbling').value,
        defending: document.getElementById('playerDefending').value,
        physical: document.getElementById('playerPhysical').value,
    };

    allPlayers.push(newPlayer);
    displayPlayersByPosition(playerPosition); 
});





