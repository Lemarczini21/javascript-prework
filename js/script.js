{
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
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    printMessage('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);
    printMessage(argComputerMove);

    printMessage('Mój ruch to: ' + argComputerMove);

    printMessage('Gracz wpisał: ' + playerInput);

    const argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    // Zwrócenie wyniku

    displayResult(argComputerMove, argPlayerMove);
  }
  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1)('Zagrałeś kamień!');
  });

  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2)('Zagrałeś papier!');
  });

  document
    .getElementById('play-scissors')
    .addEventListener('click', function () {
      playGame(3)('Zagrałeś nożyce!');
    });
}
