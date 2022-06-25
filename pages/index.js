import styled from 'styled-components';
import Link from 'next/link';

const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function Home() {
  return (
    <div>
      <h1><Link href="/game">Game</Link></h1>
    </div>
  )
}
