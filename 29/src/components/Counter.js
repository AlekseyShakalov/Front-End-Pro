import { memo } from "react";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import useCounter from "../hooks/useCounter";

const initialValue = 1;

const Counter = () => {
  const { count, increment, decrement, setCount } = useCounter(initialValue);

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
        <IconButton
          onClick={decrement}
          disabled={count <= initialValue}
          colorScheme="blue"
          icon={<MinusIcon />}
        />
        <Input
          value={count}
          onChange={handleChange}
          htmlSize={4}
          width="auto"
        />
        <IconButton onClick={increment} colorScheme="blue" icon={<AddIcon />} />
      </Box>
    </>
  );
};

export default memo(Counter);
