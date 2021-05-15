document.addEventListener('DOMContentLoaded', () => {
    const pointsCounter = document.querySelector('.points'),
        gameFieldWrapper = document.querySelector('.snake-wrapper'),
        gameFieldContainer = document.createElement('div'),
        gameSize = 10;

    gameFieldContainer.classList.add('snake-container');
    gameFieldWrapper.append(gameFieldContainer);

    let playerSize = 1, //размер змейки
        playerCords = [], //координаты всех частей змейки
        pointX, pointY, //координаты яблочек
        keyHandler; //переменная интервала обновления

    pointsCounter.textContent = playerSize;

    function createGameField(size) {
        for (let x = 0; x < size; x++) {
            let gameFieldLine = document.createElement('div');
            gameFieldLine.classList.add('snake__line');
            gameFieldContainer.append(gameFieldLine);
            for (let y = 0; y < size; y++) {
                let gameFieldBlock = document.createElement('div');
                gameFieldBlock.classList.add('snake__field-item');
                gameFieldLine.append(gameFieldBlock);
            }
        }
    }

    function getFieldCords({ posX, posY }) {
        const lines = document.querySelectorAll('.snake__line');
        lines.forEach(line => {
            line.querySelectorAll('.snake__field-item').forEach(block => block.classList.remove('snake__active'));
        });

        playerCharacter({ posX: posX, posY: posY });
        playerCords.forEach(i => {
            lines[i[1]].querySelectorAll('.snake__field-item')[i[0]].classList.add('snake__active');

            lines[pointX].querySelectorAll('.snake__field-item')[pointY].classList.add('snake__point');

            if (i[1] == pointX && i[0] == pointY) {
                playerSize++;

                lines[pointX].querySelectorAll('.snake__field-item')[pointY].classList.remove('snake__point');

                pointGenerator(gameSize);
                pointsCounter.textContent = playerSize;
            }

            //Логика на врезания в себя (поиск дубликата координат)
            if (playerCords.filter(item => item[0] == posX && item[1] == posY).length > 1) {
                endGame();
            }
        });
    }

    function endGame() {
        clearInterval(keyHandler);

        let message = document.createElement('div');
        message.classList.add('message');
        message.textContent = `Игра окончена! Ваш результат: ${playerSize}`;
        playerSize = 1;
        playerCords = [];
        pointsCounter.textContent = playerSize;

        gameFieldContainer.append(message);

        document.addEventListener('keydown', () => {
            message.remove();
        });
    }

    function pointGenerator(size) {
        pointX = parseInt(Math.random() * size);
        pointY = parseInt(Math.random() * size);
    }

    function playerCharacter({ posX, posY }) {
        if (playerCords.length >= playerSize) {
            playerCords.shift();
        }
        playerCords.push([
            posX,
            posY
        ]);
    }

    function playerActions({ X, Y }) {
        let posX = X,
            posY = Y;
        getFieldCords({ posX: posX, posY: posY });

        document.addEventListener('keydown', e => {
            switch (e.key.toLowerCase()) {
                case 'arrowup':
                case 'ц':
                case 'w':
                    clearInterval(keyHandler);
                    keyHandler = setInterval(() => {
                        --posY;
                        if (posY < 0) {
                            posY = gameSize - 1;
                        }
                        getFieldCords({ posX: posX, posY: posY });
                    }, 100);
                    break;
                case 'arrowleft':
                case 'ф':
                case 'a':
                    clearInterval(keyHandler);
                    keyHandler = setInterval(() => {
                        --posX;
                        if (posX < 0) {
                            posX = gameSize - 1;
                        }
                        getFieldCords({ posX: posX, posY: posY });
                    }, 100);
                    break;
                case 'arrowdown':
                case 'ы':
                case 's':
                    clearInterval(keyHandler);
                    keyHandler = setInterval(() => {
                        ++posY;
                        if (posY >= gameSize) {
                            posY = 0;
                        }
                        getFieldCords({ posX: posX, posY: posY });
                    }, 100);
                    break;
                case 'arrowright':
                case 'в':
                case 'd':
                    clearInterval(keyHandler);
                    keyHandler = setInterval(() => {
                        ++posX;
                        if (posX >= gameSize) {
                            posX = 0;
                        }
                        getFieldCords({ posX: posX, posY: posY });
                    }, 100);
                    break;
                default:
                    console.error('Клавиши управления: W A S D');
            }
        });
    }
    createGameField(gameSize);
    pointGenerator(gameSize);
    playerActions({ X: 5, Y: 5 });
});