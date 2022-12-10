import { memo } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, setCount, initialValue } = useCounter();

  const handleChange = ({ target: { value } }) => {
    if (value !== "" && value < initialValue) {
      setCount(initialValue);
    } else {
      setCount(value);
    }
  };

  return (
    <>
      <Box display="flex">
        <Button onClick={decrement} colorScheme="blue" disabled={count <= 1}>
          -
        </Button>
        <Input
          value={count}
          onChange={handleChange}
          htmlSize={4}
          width="auto"
        />
        <Button onClick={increment} colorScheme="blue">
          +
        </Button>
      </Box>
    </>
  );
};

export default memo(Counter);
