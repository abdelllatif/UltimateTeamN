const showAllplzyerSection=document.getElementById("allplayerSection");
const divChoisiJoueur=document.getElementById("div_choisi_joueur");
const crud_modal=document.getElementById("crud-modal");
const modal_add_player=document.getElementById("add-player-modal");
const btnClose=document.getElementById("btnClose");
const btnAjouter=document.getElementById("btnAjoute");


const div_LW = document.getElementById("LW");
const div_ST = document.getElementById("ST");
const div_RW = document.getElementById("RW");

const div_CM = document.getElementById("CM");
const div_CMR = document.getElementById("CMR");
const div_CML = document.getElementById("CML");

const div_LB = document.getElementById("LB");
const div_CBR = document.getElementById("CBR");
const div_CBL = document.getElementById("CBL");
const div_RB = document.getElementById("RB");

const div_GK = document.getElementById("GKP");

let playerName = document.getElementById("f-name");
let playerImage = document.getElementById("f-image");
let playerPosition = document.getElementById("f-position");
let playerNationality = document.getElementById("f-nationality");
let playerClub = document.getElementById("f-club");
let playerRating = document.getElementById("f-rating");
let playerPace = document.getElementById("f-pace");
let playerShooting = document.getElementById("f-shooting");
let playerPassing = document.getElementById("f-passing");
let playerDriblling = document.getElementById("f-driblling");
let playerDefending = document.getElementById("f-defending");
let playerPhysical = document.getElementById("f-physical");







const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileNav = document.getElementById('mobileNav');
menuIcon.addEventListener('click', () => {
    mobileNav.classList.remove('hidden'); 
});
closeIcon.addEventListener('click', () => {
    mobileNav.classList.add('hidden'); 
});





let Allplayers = [];
let temData=[];
let playerDiv; 


btnAjouter.addEventListener("click",()=>{
  toggleVisibility(crud_modal);
  toggleVisibility(modal_add_player);
})





function toggleVisibility(element) {
  if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('block');
  } else {
      element.classList.remove('block');
      element.classList.add('hidden');
  }
}

btnClose.addEventListener("click", function() {
  toggleVisibility(crud_modal);
});

document.getElementById("btn_close_modal").addEventListener("click", function() {
  toggleVisibility(modal_add_player);
});








function FiltrerAjouterPoopup(element) {
  divChoisiJoueur.innerHTML = '';  
  element.forEach(player => {
    playerDiv = document.createElement('div');
    playerDiv.setAttribute('id', `${player.id}`);  
    playerDiv.setAttribute('ondblclick',"funcAjouter_Terrain(this,this.id);");  
    playerDiv.className = "relative  text-white rounded-lg";
    if(player.position=='GK'){
      playerDiv.innerHTML = `
        <div class="absolute top-0 right-0 z-10 w-full flex justify-around">
            <button onclick="suprimerJoueur(this.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
    <button data-id="${player.id}" onclick="modifierJoueur(this)"><i class="fa fa-edit w-[30px] h-[30px] text-blue-700"></i></button>
        </div>
        <div class="relative  h-[200px] bg-cover bg-center  bg-[url('asset/img/badge_total_rush.webp')] transition-all ease-in" data-id="${player.id}">
            <div class="relative flex text--[#adf636] px-[0.3rem]">
                <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
                    <div class="text-[1rem] mt-5">${player.rating}</div>
                    <div>${player.position}</div>
                    <div class="block">
                        <img src="${player.flag}" alt="${player.nationality}" class="w-[1rem] h-[14px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${player.logo}" alt="${player.club}" class="w-[1rem] h-[14px] object-contain" />
                    </div>
                </div>
                <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
                    <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
                </div>
            </div>
    
            <div class="w-full flex justify-aroundtext-[#adf636] text-[0.9rem] font-bold uppercase">
                <span class="ml-[0.4rem] text-shadow-lg">${player.position}</span>
            </div>
    
            <div class="relative">
                <div class="text--[#adf636] w-[90%] mx-auto">
                    <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border--[#adf636]/[0.1]">
                        <span class="block text-shadow-lg">${player.name}</span>
                    </div>
                
                    <div class="flex justify-center">
                        <div class="pr-[1.5rem] border-r-2 border--[#adf636]/[0.1]">
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.diving}</span>
                                <span class="font-light">DIV</span>
                            </div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.handling}</span>
                                <span class="font-light">HAN</span>
                            </div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.kicking}</span>
                                <span class="font-light">KIC</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.reflexes}</span>
                                <span class="font-light">REF</span>
                            </div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.speed}</span>
                                <span class="font-light">SPD</span>
                            </div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.positioning}</span>
                                <span class="font-light">POS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
    else{
    playerDiv.innerHTML = `
    <div class="absolute top-0 right-0 z-10 w-full flex justify-around">
        <button onclick="suprimerJoueur(this.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
<button data-id="${player.id}" onclick="modifierJoueur(this)"><i class="fa fa-edit w-[30px] h-[30px] text-blue-700"></i></button>
    </div>
    <div class="relative  h-[180px] bg-cover w-28 bg-center bg-[url('asset/img/badge_total_rush.webp')] transition-all ease-in" data-id="${player.id}">
        <div class="relative flex text--[#adf636] px-[0.3rem]">
            <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
                <div class="text-[1rem] mt-5">${player.rating}</div>
                <div>${player.position}</div>
                <div class="block">
                    <img src="${player.flag}" alt="${player.nationality}" class="w-[1rem] h-[14px] object-contain" />
                </div>
                <div class="block">
                    <img src="${player.logo}" alt="${player.club}" class="w-[1rem] h-[14px] object-contain" />
                </div>
            </div>
            <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
                <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
            </div>
        </div>

        <div class="w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
            <span class="ml-[0.4rem] text-shadow-lg">${player.position}</span>
        </div>

        <div class="relative">
            <div class="text--[#adf636] w-[90%] mx-auto">
                <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border--[#adf636]/[0.1]">
                    <span class="block text-shadow-lg">${player.name}</span>
                </div>
                <div class="flex justify-center">
                    <div class="pr-[1.5rem] border-r-2 border--[#adf636]/[0.1]">
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.pace}</span>
                            <span class="font-light">PAC</span>
                        </div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.shooting}</span>
                            <span class="font-light">SHO</span>
                        </div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.passing}</span>
                            <span class="font-light">PAS</span>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.dribbling}</span>
                            <span class="font-light">DRI</span>
                        </div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.defending}</span>
                            <span class="font-light">DEF</span>
                        </div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.physical}</span>
                            <span class="font-light">PHY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
}
    divChoisiJoueur.appendChild(playerDiv);
    
  });
}


function getPlayers() {
  showAllplzyerSection.innerHTML = '';

  Allplayers.forEach(player => {
      let playerDiv = document.createElement('div');
      playerDiv.setAttribute('id', `player-${player.id}`); 
      playerDiv.className = "relative flex items-center justify-center text-white rounded-lg ";
       if(player.position=='GK'){playerDiv.innerHTML = `
       <div class="absolute top-0  right-0 z-10 w-full flex justify-around">
        <button onclick="suprimerJoueur(this.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
<button data-id="${player.id}" onclick="modifierJoueur(this)"><i class="fa fa-edit w-[30px] h-[30px] text-blue-700"></i></button>
    </div>
    <div class="relative w-[130px] h-[210px]  bg-cover bg-center  bg-[url('asset/img/badge_total_rush.webp')] transition-all ease-in" data-id="${player.id}">
        <div class="relative flex pt-5 text-[#adf636] px-[0.3rem]">
            <div class="absolute py-[0.8rem_0] text-md uppercase font-bold">
                <div class="text-[1rem] mt-5">${player.rating}</div>
                <div>${player.position}</div>
                    <div class="block">
                        <img src="${player.flag}" alt="${player.nationality}" class="w-[1rem] h-[14px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${player.logo}" alt="${player.club}" class="w-[1rem] h-[14px] object-contain" />
                    </div>
                </div>
                <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
                    <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
                </div>
            </div>
    
            <div class="w-full flex justify-aroundtext-[#adf636] text-[0.9rem] font-bold uppercase">
            </div>
    
            <div class="relative">
                <div class="text--[#adf636] w-[90%] mx-auto">
                    <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border--[#adf636]/[0.1]">
                        <span class="block text-shadow-lg">${player.name}</span>
                    </div>
                
                    <div class="flex justify-center">
                        <div class="pr-[1.5rem] border-r-2 border--[#adf636]/[0.1]">
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.diving}</span>
                                <span class="font-light">DIV</span>
                            </div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.handling}</span>
                                <span class="font-light">HAN</span>
                            </div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.kicking}</span>
                                <span class="font-light">KIC</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.reflexes}</span>
                                <span class="font-light">REF</span>
                            </div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.speed}</span>
                                <span class="font-light">SPD</span>
                            </div>
                            <div class="flex items-center text-[0.5rem] uppercase">
                                <span class="font-bold mr-[0.3rem]">${player.positioning}</span>
                                <span class="font-light">POS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;}
    else{
      playerDiv.innerHTML = `
    <div class="absolute top-0  right-0 z-10 w-full flex justify-around">
        <button onclick="suprimerJoueur(this.parentElement.parentElement)"><i class="fa fa-trash w-[30px] h-[30px] text-red-600"></i></button>
<button data-id="${player.id}" onclick="modifierJoueur(this)"><i class="fa fa-edit w-[30px] h-[30px] text-blue-700"></i></button>
    </div>
    <div class="relative w-[130px] h-[200px]  bg-cover bg-center  bg-[url('asset/img/badge_total_rush.webp')] transition-all ease-in" data-id="${player.id}">
        <div class="relative flex pt-5 text-[#adf636] px-[0.3rem]">
            <div class="absolute py-[0.8rem_0] text-md uppercase font-bold">
                <div class="text-[1rem] mt-5">${player.rating}</div>
                <div>${player.position}</div>
                <div class="block">
                    <img src="${player.flag}" alt="${player.nationality}" class="w-[1rem] h-[14px] object-contain" />
                </div>
                <div class="block">
                    <img src="${player.logo}" alt="${player.club}" class="w-[1rem] h-[14px] object-contain" />
                </div>
            </div>
            <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
                <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
            </div>
        </div>

        <div class="w-full flex justify-around text-[#adf636] text-[0.9rem] font-bold uppercase">
        </div>

        <div class="relative">
            <div class="text--[#adf636] w-[90%] mx-auto">
                <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border--[#adf636]/[0.1]">
                    <span class="block text-shadow-lg">${player.name}</span>
                </div>
            
                <div class="flex justify-center">
                    <div class="pr-[1.5rem] border-r-2 border--[#adf636]/[0.1]">
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.pace}</span>
                            <span class="font-light">PAC</span>
                        </div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.shooting}</span>
                            <span class="font-light">SHO</span>
                        </div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.passing}</span>
                            <span class="font-light">PAS</span>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.dribbling}</span>
                            <span class="font-light">DRI</span>
                        </div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.defending}</span>
                            <span class="font-light">DEF</span>
                        </div>
                        <div class="flex items-center text-[0.5rem] uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.physical}</span>
                            <span class="font-light">PHY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
}
      showAllplzyerSection.appendChild(playerDiv);
  });
}

function positionFliter(position,diva){
    temData = Allplayers.filter((player) => player.position.toLowerCase() === position.toLowerCase());
    toggleVisibility(crud_modal)
  
    FiltrerAjouterPoopup(temData)
}


fetch('../../players.json')
  .then(response => response.json())
  .then(data => {
    
    localStorage.setItem('allplayers',JSON.stringify(data.players))
    
})
.catch(error => console.error('Error fetching JSON:', error));

Allplayers=JSON.parse(localStorage.getItem('allplayers'));
getPlayers(); 



function toggle() {
  const position = document.getElementById('position').value;
  const generalStats = document.getElementById('generalStats');
  const goalkeeperStats = document.getElementById('goalkeeperStats');
  
  if (position === 'GK') {
  generalStats.classList.add('hidden');
  goalkeeperStats.classList.remove('hidden');
  } else {
  generalStats.classList.remove('hidden');
  goalkeeperStats.classList.add('hidden');
  }
  }
document.getElementById('add-player-btn').addEventListener('click', addPlayerToDatabase);

  function addPlayerToDatabase(event) {
    event.preventDefault(); 
    const name = document.getElementById("f-name").value;
    const position = document.getElementById("f-position").value;
    const photo = document.getElementById("f-image").value;
    const pace = parseInt(document.getElementById("f-pace").value, 10);
    const shooting = parseInt(document.getElementById("f-shooting").value, 10);
    const passing = document.getElementById("f-passing").value;
    const dribbling = parseInt(document.getElementById("f-driblling").value, 10);
    const defending = parseInt(document.getElementById("f-defending").value, 10);
    const physical = parseInt(document.getElementById("f-physical").value, 10);

    if (!name || !position || !photo || !pace || !shooting || !passing || !dribbling || !defending || !physical) {
      alert("Please fill in all fields");
      return;
    }
  
    const newPlayer = {
      id: Allplayers.length + 1, 
      name: name,
      position: position,
      photo: photo,
      pace: pace,
      shooting: shooting,
      passing: passing,
      dribbling: dribbling,
      defending: defending,
      physical: physical
    };

    
  
    Allplayers.push(newPlayer);
  
    localStorage.setItem('allplayers', JSON.stringify(Allplayers));
  
    // document.getElementById("playerForm").reset();
    
    getPlayers(); 
    // toggleVisibility(Div_add_player);
  }
  
  const cards = document.querySelectorAll(".player-card"); 
  cards.forEach(card => {
    card.addEventListener("dblclick", function () {
      const index = Allplayers.findIndex(player => player.id === playerId);
  if (index !== -1) {
    Allplayers.splice(index, 1);
    card.remove();
    }
  }); 
});

  function funcAjouter_Terrain(divCard,id) {
    var I = Allplayers.findIndex((player) => player.id == id);
    
    Allplayers.forEach(player => {
      console.log("index",typeof(player.id),typeof(id))
      if (player.id == id) {  
        switch (player.position) {
          case 'LW':
            div_LW.innerHTML = '';
              if (div_LW.innerHTML.trim() === '') {
                div_LW.appendChild(divCard);
              }
              break;

            
          case 'ST':
            div_ST.innerHTML = '';
                if (div_ST.innerHTML.trim() === '') {
                  div_ST.appendChild(divCard);
                }   
                break;

          case 'RW':
            div_RW.innerHTML = '';
            if (div_RW.innerHTML.trim() === '') {
              div_RW.appendChild(divCard);

            } 
              break;
          case 'CM':
            div_CM.innerHTML = '';
            if (div_CM.innerHTML.trim() === '') {
              div_CM.appendChild(divCard);

            } 
              break;
          case 'CML':
            div_CML.innerHTML = '';
            if (div_CML.innerHTML.trim() === '') {
              div_CML.appendChild(divCard);

            } 
              break;
          case 'CMR':
            div_CMR.innerHTML = '';
            if (div_CMR.innerHTML.trim() === '') {
                div_CMR.appendChild(divCard);
            } 
              break;
          case 'LB':
            div_LB.innerHTML = '';
            if (div_LB.innerHTML.trim() === '') {
              div_LB.appendChild(divCard);

            }
              break;
          
          case 'CBL':
            div_CBL.innerHTML = '';
            if (div_CBL.innerHTML.trim() === '') {
              div_CBL.appendChild(divCard);

            }
              
              break;
          case 'CBR':
            div_CBR.innerHTML = '';
                  if (div_CBR.innerHTML.trim() === '') {
                    div_CBR.appendChild(divCard);

                  } 
              break;
          case 'RB':
            div_RB.innerHTML = '';
                if (div_RB.innerHTML.trim() === '') {
                div_RB.appendChild(divCard);

                }
                break;
          case 'GK':
            div_GK.innerHTML = '';
            if (div_GK.innerHTML.trim() === '') {
              div_GK.appendChild(divCard);
            }
          
              break;
          default:
              console.log('Unknown position');
              break;
        }
      }
    });
  }



  function modifierJoueur(button) {
    const playerId = button.getAttribute('data-id');


    
    const player = Allplayers.find(p => p.id === parseInt(playerId, 10));

    console.log("type is ",typeof(player));
    


    document.getElementById("u-name").value = player.name;
    document.getElementById("u-image").value = player.photo;
    document.getElementById("u-position").value = player.position;
    document.getElementById("u-nationality").value = player.nationality;
    document.getElementById("u-club").value = player.club;
    document.getElementById("u-rating").value = player.rating;
    document.getElementById("u-pace").value = player.pace;
    document.getElementById("u-shooting").value = player.shooting;
    document.getElementById("u-passing").value = player.passing;
    document.getElementById("u-driblling").value = player.dribbling;
    document.getElementById("u-defending").value = player.defending;
    document.getElementById("u-physical").value = player.physical;

    currentPlayerId = parseInt(playerId, 10);

    document.getElementById("update-player-modal").classList.remove("hidden");
}


let currentPlayerId = null;

function savePlayerChanges(event) {
    event.preventDefault();

    const playerIndex = Allplayers.findIndex(p => p.id === currentPlayerId);
 

    Allplayers[playerIndex] = {
        id: currentPlayerId,
        name: document.getElementById("u-name").value.trim(),
        photo: document.getElementById("u-image").value.trim(),
        position: document.getElementById("u-position").value,
        nationality: document.getElementById("u-nationality").value.trim(),
        club: document.getElementById("u-club").value.trim(),
        rating: parseInt(document.getElementById("u-rating").value),
        pace: parseInt(document.getElementById("u-pace").value),
        shooting: parseInt(document.getElementById("u-shooting").value),
        passing: parseInt(document.getElementById("u-passing").value),
        dribbling: parseInt(document.getElementById("u-driblling").value),
        defending: parseInt(document.getElementById("u-defending").value),
        physical: parseInt(document.getElementById("u-physical").value),
    };

    localStorage.setItem("allplayers", JSON.stringify(Allplayers));

    getPlayers();

    document.getElementById("update-player-modal").classList.add("hidden");
}

document.getElementById("update-player-form").addEventListener("submit", savePlayerChanges);

document.getElementById("btn_close_update_modal").addEventListener("click", () => {
  document.getElementById("update-player-modal").classList.add("hidden");
});


  function suprimerJoueur(element)
  {
    alert('suprimer avec sucsses');
    element.remove()
    var I = Allplayers.findIndex((player) => player.id == element.id);
    Allplayers.splice(I,1)
  }


  let validateForm = () => {
    if (playerName.value === "" || playerName.value.length > 20) {
      showErrorMessage(playerName, "Enter a valid name");
    } else if (playerImage.value === "") {
      showErrorMessage(playerImage, "you have to enter a valid url");
    } else if (playerPosition.value === "none") {
      showErrorMessage(playerPosition, "you have to choose a valid position");
    } else if (playerNationality.value === "") {
      showErrorMessage(playerNationality, "you have to enter a valid url");
    } else if (playerClub.value === "") {
      showErrorMessage(playerClub, "enter a valid logo url");
    } else if (playerRating.value === "" || playerRating.value <= 0) {
      showErrorMessage(playerRating, "invalid rating number");
    } else if (playerPace.value === "" || playerPace.value <= 0) {
      showErrorMessage(playerPace, "invalid pace number");
    } else if (playerShooting.value === "" || playerShooting.value <= 0) {
      showErrorMessage(playerShooting, "invalid shooting number");
    } else if (playerPassing.value === "" || playerPassing.value <= 0) {
      showErrorMessage(playerPassing, "invalid passing number");
    } else if (playerDriblling.value === "" || playerDriblling.value <= 0) {
      showErrorMessage(playerDriblling, "invalid dribling number");
    } else if (playerDefending.value === "" || playerDefending.value <= 0) {
      showErrorMessage(playerDefending, "invalid defendig number");
    } else if (playerPhysical.value === "" || playerPhysical.value <= 0) {
      showErrorMessage(playerPhysical, "invalid physical number");
    } else {
      alert.log("added successfully");
      
    }
  };

  function showErrorMessage(element, message) {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector(".error-message");
    displayError.innerHTML = message;
  }
  document.getElementById("add-player-btn").addEventListener('click', (e) => {
    e.preventDefault();
    console.log("fzepn");
    validateForm();
  });
  
  document.getElementById('close-btn-modal').addEventListener("click", function(e) {
    toggleVisibility(modal_add_player);
  });