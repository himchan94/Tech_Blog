import React, { useEffect, useRef } from "react";
import cx from "classnames";
import { NextPage } from "next";
import styles from "./worm.module.scss";

interface PlanetPageProps {}

// FIXME: type refactor need
const WormPage: NextPage = ({}) => {
  const gameBoardRef = useRef<HTMLCanvasElement>(null);
  const scoreTextRef = useRef<HTMLDivElement>(null);
  const resetButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      gameBoardRef?.current &&
      scoreTextRef?.current &&
      resetButtonRef?.current
    ) {
      const ctx = gameBoardRef.current.getContext("2d");

      const gameWidth = gameBoardRef.current.width;
      const gameHeight = gameBoardRef.current.height;
      const boardBackground = "white";
      const snakeColor = "lightgreen";
      const snakeBorder = "black";
      const foodColor = "red";
      const unitSize = 25;
      let running = false;
      let xVelocity = unitSize;
      let yVelocity = 0;
      let foodX: any;
      let foodY: any;
      let score = 0;
      let snake = [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 },
      ];

      window.addEventListener("keydown", changeDirection);
      resetButtonRef.current.addEventListener("click", resetGame);

      gameStart();

      // @ts-ignore
      function gameStart() {
        if (!scoreTextRef.current) return;

        running = true;
        scoreTextRef.current.textContent = score.toString();
        createFood();
        drawFood();
        nextTick();
      }
      // @ts-ignore
      function nextTick(): void {
        if (running) {
          setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
          }, 75);
        } else {
          displayGameOver();
        }
      }
      // @ts-ignore
      function clearBoard() {
        if (!ctx) return;
        ctx.fillStyle = boardBackground;
        ctx.fillRect(0, 0, gameWidth, gameHeight);
      }
      // @ts-ignore
      function createFood() {
        // @ts-ignore
        function randomFood(min, max) {
          const randNum =
            Math.round((Math.random() * (max - min) + min) / unitSize) *
            unitSize;
          return randNum;
        }
        foodX = randomFood(0, gameWidth - unitSize);
        foodY = randomFood(0, gameWidth - unitSize);
      }
      // @ts-ignore
      function drawFood() {
        if (!ctx) return;

        ctx.fillStyle = foodColor;
        ctx.fillRect(foodX, foodY, unitSize, unitSize);
      }
      // @ts-ignore
      function moveSnake() {
        if (!scoreTextRef.current) return;

        const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };

        snake.unshift(head);
        //if food is eaten
        // @ts-ignore
        if (snake[0].x == foodX && snake[0].y == foodY) {
          score += 1;
          scoreTextRef.current.textContent = score.toString();
          createFood();
        } else {
          snake.pop();
        }
      }
      // @ts-ignore
      function drawSnake() {
        if (!ctx) return;
        ctx.fillStyle = snakeColor;
        ctx.strokeStyle = snakeBorder;
        snake.forEach((snakePart) => {
          ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
          ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
        });
      }
      // @ts-ignore
      function changeDirection(event) {
        const keyPressed = event.keyCode;
        const LEFT = 37;
        const UP = 38;
        const RIGHT = 39;
        const DOWN = 40;

        const goingUp = yVelocity == -unitSize;
        const goingDown = yVelocity == unitSize;
        const goingRight = xVelocity == unitSize;
        const goingLeft = xVelocity == -unitSize;

        switch (true) {
          case keyPressed == LEFT && !goingRight:
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
          case keyPressed == UP && !goingDown:
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
          case keyPressed == RIGHT && !goingLeft:
            xVelocity = unitSize;
            yVelocity = 0;
            break;
          case keyPressed == DOWN && !goingUp:
            xVelocity = 0;
            yVelocity = unitSize;
            break;
        }
      }
      // @ts-ignore
      function checkGameOver() {
        switch (true) {
          case snake[0].x < 0:
            running = false;
            break;
          case snake[0].x >= gameWidth:
            running = false;
            break;
          case snake[0].y < 0:
            running = false;
            break;
          case snake[0].y >= gameHeight:
            running = false;
            break;
        }
        for (let i = 1; i < snake.length; i += 1) {
          if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false;
          }
        }
      }
      // @ts-ignore
      function displayGameOver() {
        if (!ctx) return;

        ctx.font = "50px MV Boli";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
        running = false;
      }
      // @ts-ignore
      function resetGame() {
        score = 0;
        xVelocity = unitSize;
        yVelocity = 0;
        snake = [
          { x: unitSize * 4, y: 0 },
          { x: unitSize * 3, y: 0 },
          { x: unitSize * 2, y: 0 },
          { x: unitSize, y: 0 },
          { x: 0, y: 0 },
        ];
        gameStart();
      }
    }
  }, []);

  return (
    <div id={styles["container"]}>
      <div id={styles["gameContainer"]}>
        <canvas
          id={styles["gameBoard"]}
          width='500'
          height='500'
          ref={gameBoardRef}></canvas>
        <div id={styles["scoreText"]} ref={scoreTextRef}>
          0
        </div>
        <button id={styles["resetBtn"]} ref={resetButtonRef}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default WormPage;
