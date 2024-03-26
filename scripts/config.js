function openPlayerConfig(event) {
  //const selectedPlayerId = event.target.dataset['player-id']; // data-player-id если будет так записано
  //const selectedPlayerId = event.target.dataset.playerid;// data-playerid если будет так записано
  editedPlayer = +event.target.dataset.playerid; // +'1' => 1
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault(); //метод предотвращающий отправку браузером формы
  const formData = new FormData(event.target);//создаем объект формы
  //const enteredPlayername = formData.get('playername');//get позволяет получить входные данные
  const enteredPlayername = formData.get('playername').trim();//'    ' => ''удалят пробелы => '   Max   ' => 'Max'

  if (!enteredPlayername) { // enteredPlayername === ''
    //event.target.firstElementChild.className = 'error';//Если запишем так, то это перезапишет все классы
    event.target.firstElementChild.classList.add('error');//Добавим класс error
    errorsOutputElement.textContent = 'Please enter a valid name!';//Добавляем в <p></p> это собщение
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();  
}