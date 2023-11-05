import React, { useEffect, useRef, useState } from "react";

type Props = {};

interface SnakePart {
  x: number;
  y: number;
}

interface GameInfo {
  ctx?: CanvasRenderingContext2D | null;
  gameWidth?: number;
  gameHeight?: number;
  running?: boolean;
  xVelocity?: number;
  yVelocity?: number;
  foodX?: number;
  foodY?: number;
  score?: number;
}

const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;

const useWormGameHander = (props?: Props) => {
  const gameBoardRef = useRef<HTMLCanvasElement>(null);
  const scoreTextRef = useRef<HTMLDivElement>(null);
  const resetButtonRef = useRef<HTMLButtonElement>(null);

  const gameInfoRef = useRef<GameInfo>({});

  const [snake, setSnake] = useState<SnakePart[]>([
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
  ]);

  const [time, setTime] = useState(0);

  // @ts-ignore
  function gameStart() {
    if (!scoreTextRef.current) return;

    gameInfoRef.current.running = true;
    scoreTextRef.current.textContent =
      gameInfoRef?.current?.score?.toString() || null;
    createFood();
    drawFood();
    nextTick();
  }

  // @ts-ignore
  function nextTick(): void {
    if (gameInfoRef.current.running) {
      setTimeout(() => {
        clearBoard();
        drawFood();
        moveSnake();
        drawSnake();
        checkGameOver();
        nextTick();
      }, 1000);
    } else {
      displayGameOver();
    }
  }

  // @ts-ignore
  function clearBoard() {
    if (
      !gameInfoRef.current.ctx ||
      !gameInfoRef.current.gameWidth ||
      !gameInfoRef.current.gameHeight
    )
      return;
    gameInfoRef.current.ctx.fillStyle = boardBackground;
    gameInfoRef.current.ctx.fillRect(
      0,
      0,
      gameInfoRef.current.gameWidth,
      gameInfoRef.current.gameHeight
    );
  }

  // @ts-ignore
  function createFood() {
    if (!gameInfoRef.current.gameWidth || !gameInfoRef.current.gameHeight)
      return;
    function randomFood(min: number, max: number) {
      const randNum =
        Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
      return randNum;
    }
    gameInfoRef.current.foodX = randomFood(
      0,
      gameInfoRef.current.gameWidth - unitSize
    );
    gameInfoRef.current.foodY = randomFood(
      0,
      gameInfoRef.current.gameWidth - unitSize
    );
  }

  // @ts-ignore
  function drawFood() {
    if (
      !gameInfoRef.current.ctx ||
      !gameInfoRef.current.foodX ||
      !gameInfoRef.current.foodY
    )
      return;

    gameInfoRef.current.ctx.fillStyle = foodColor;
    gameInfoRef.current.ctx.fillRect(
      gameInfoRef.current.foodX,
      gameInfoRef.current.foodY,
      unitSize,
      unitSize
    );
  }

  // @ts-ignore
  function moveSnake() {
    if (
      !scoreTextRef.current ||
      !gameInfoRef.current.xVelocity ||
      typeof gameInfoRef.current.yVelocity === "undefined" ||
      typeof gameInfoRef.current.score === "undefined"
    )
      return;

    const head = {
      x: snake[0].x + gameInfoRef.current.xVelocity,
      y: snake[0].y + gameInfoRef.current.yVelocity,
    };
    console.log("head", head);
    const copiedSnake = [head, ...snake];
    // copiedSnake.unshift(head);

    setSnake([...copiedSnake.map((snake) => ({ ...snake }))]);
    //if food is eaten
    if (
      snake[0].x == gameInfoRef.current.foodX &&
      snake[0].y == gameInfoRef.current.foodY
    ) {
      gameInfoRef.current.score += 1;
      scoreTextRef.current.textContent = gameInfoRef.current.score.toString();
      createFood();
    } else {
      const copiedSnake = [...snake];
      copiedSnake.pop();
      setSnake([...copiedSnake.map((snake) => ({ ...snake }))]);
    }
  }
  // @ts-ignore
  function drawSnake() {
    if (!gameInfoRef.current.ctx) return;
    gameInfoRef.current.ctx.fillStyle = snakeColor;
    gameInfoRef.current.ctx.strokeStyle = snakeBorder;
    snake.forEach((snakePart) => {
      if (gameInfoRef.current?.ctx) {
        gameInfoRef.current.ctx.fillRect(
          snakePart.x,
          snakePart.y,
          unitSize,
          unitSize
        );
        gameInfoRef.current.ctx.strokeRect(
          snakePart.x,
          snakePart.y,
          unitSize,
          unitSize
        );
      }
    });
    setTime((time) => time + 1);
  }
  // @ts-ignore
  function changeDirection(event) {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = gameInfoRef.current.yVelocity == -unitSize;
    const goingDown = gameInfoRef.current.yVelocity == unitSize;
    const goingRight = gameInfoRef.current.xVelocity == unitSize;
    const goingLeft = gameInfoRef.current.xVelocity == -unitSize;

    switch (true) {
      case keyPressed == LEFT && !goingRight:
        gameInfoRef.current.xVelocity = -unitSize;
        gameInfoRef.current.yVelocity = 0;
        break;
      case keyPressed == UP && !goingDown:
        gameInfoRef.current.xVelocity = 0;
        gameInfoRef.current.yVelocity = -unitSize;
        break;
      case keyPressed == RIGHT && !goingLeft:
        gameInfoRef.current.xVelocity = unitSize;
        gameInfoRef.current.yVelocity = 0;
        break;
      case keyPressed == DOWN && !goingUp:
        gameInfoRef.current.xVelocity = 0;
        gameInfoRef.current.yVelocity = unitSize;
        break;
    }
  }
  // @ts-ignore
  function checkGameOver() {
    if (
      typeof gameInfoRef.current.gameWidth === "undefined" ||
      typeof gameInfoRef.current.gameHeight === "undefined"
    )
      return;

    switch (true) {
      case snake[0].x < 0:
        gameInfoRef.current.running = false;
        break;
      case snake[0].x >= gameInfoRef.current.gameWidth:
        gameInfoRef.current.running = false;
        break;
      case snake[0].y < 0:
        gameInfoRef.current.running = false;
        break;
      case snake[0].y >= gameInfoRef.current.gameHeight:
        gameInfoRef.current.running = false;
        break;
    }
    for (let i = 1; i < snake.length; i += 1) {
      if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
        gameInfoRef.current.running = false;
      }
    }
  }
  // @ts-ignore
  function displayGameOver() {
    if (
      !gameInfoRef.current.ctx ||
      typeof gameInfoRef.current.gameWidth === "undefined" ||
      typeof gameInfoRef.current.gameHeight === "undefined"
    )
      return;

    gameInfoRef.current.ctx.font = "50px MV Boli";
    gameInfoRef.current.ctx.fillStyle = "black";
    gameInfoRef.current.ctx.textAlign = "center";
    gameInfoRef.current.ctx.fillText(
      "GAME OVER!",
      gameInfoRef.current.gameWidth / 2,
      gameInfoRef.current.gameHeight / 2
    );
    gameInfoRef.current.running = false;
  }
  // @ts-ignore
  function resetGame() {
    gameInfoRef.current.score = 0;
    gameInfoRef.current.xVelocity = unitSize;
    gameInfoRef.current.yVelocity = 0;
    setSnake([
      { x: unitSize * 4, y: 0 },
      { x: unitSize * 3, y: 0 },
      { x: unitSize * 2, y: 0 },
      { x: unitSize, y: 0 },
      { x: 0, y: 0 },
    ]);
    gameStart();
  }

  useEffect(() => {
    if (
      gameBoardRef?.current &&
      scoreTextRef?.current &&
      resetButtonRef?.current
    ) {
      gameInfoRef.current = {
        ctx: gameBoardRef.current.getContext("2d"),
        gameWidth: gameBoardRef.current.width,
        gameHeight: gameBoardRef.current.height,
        running: false,
        xVelocity: unitSize,
        yVelocity: 0,
        foodX: undefined,
        foodY: undefined,
        score: 0,
      };

      window.addEventListener("keydown", changeDirection);
      resetButtonRef.current.addEventListener("click", resetGame);

      gameStart();
    }
  }, []);

  return { gameBoardRef, scoreTextRef, resetButtonRef };
};

export default useWormGameHander;
