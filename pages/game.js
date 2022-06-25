import { useState } from 'react';
import styled from 'styled-components';
import Link from "next/link";
import Image from "next/image";

const IMAGE_SIZE = 64; // actual image size is 64px x 64px
const GRID_SIZE = 5; // size of grid (height and width)
const GRASS_IMAGE_URL = '/images/grass.png';

const Row = styled.div`
  height: ${IMAGE_SIZE}px;
`;

const Game = () => {
  const [board, setBoard] = useState(new Array(GRID_SIZE).fill().map(() => new Array(GRID_SIZE).fill('')));
  return (
    <div>
      <h1>Game</h1>
      <Link href="/">Home</Link>
      <div>
        {board.map((row, y) => (
          <Row>
            {row.map((cell, x) =>
              <Image key={`${x}-${y}`} src={GRASS_IMAGE_URL} width={IMAGE_SIZE} height={IMAGE_SIZE} alt="grass" />
            )}
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Game;
