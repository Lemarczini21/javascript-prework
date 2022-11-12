function playGame(playerInput) {
  clearMessages();
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
    } else if (
      (argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
    ) {
      printMessage('Przegrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Kamień, papier lub nożyce - więcej opcji nie ma');
    }
  }
  // odczytanie ruchu komputera
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  printMessage('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);
  printMessage(argComputerMove);
  /*
if(randomNumber == 1)   {
  argComputerMove = 'kamień';
}   else if(randomNumber == 2)  {
    argComputerMove = 'papier';
}   else {
    argComputerMove = 'nożyce';
}
*/
  printMessage('Mój ruch to: ' + argComputerMove);

  // odczytanie ruchu gracza
  /*
  let playerInput = prompt(
    'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'
  );
*/
  printMessage('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  /*
if(playerInput == '1')  {
  argPlayerMove = 'kamień';
}   else if(playerInput == '2') {
    argPlayerMove = 'papier';
}   else    {
    argPlayerMove = 'nożyce';
}
*/
  printMessage('Twój ruch to: ' + argPlayerMove);

  // Zwrócenie wyniku

  displayResult(argComputerMove, argPlayerMove);
  /*
if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}   else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!')
}   else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!')
}   else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz!')
}   else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz!')
}   else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz!')
}   else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!')
}   else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!')
}   else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!')
}   else {
    printMessage('Kamień, papier lub nożyce - więcej opcji nie ma!')
}
*/
}
document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1)('Zagrałeś kamień!');
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2)('Zagrałeś papier!');
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3)('Zagrałeś nożyce!');
});
