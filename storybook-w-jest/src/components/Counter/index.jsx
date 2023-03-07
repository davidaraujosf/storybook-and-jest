import React, { useState } from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

function Counter({ initialCount }) {
  const Button = styled.button`
    display: inline-block;
    margin: 0.3rem;
  `;

  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  `;

  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <Div>
      <h1>
        Count: <h3 data-testid="count">{count}</h3>
      </h1>
      <Row>
        <Button onClick={increment}> Increment</Button>
        <Button onClick={decrement}> Decrement</Button>
        <Button onClick={restart}> Restart</Button>
        <Button onClick={switchSigns}> Switch Signs</Button>
      </Row>
    </Div>
  );
}

export default Counter;
