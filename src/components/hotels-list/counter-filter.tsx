import { Box, Button, ButtonGroup, Flex, IconButton, Text } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const CounterFilter = ({
  label,
  labelTestKey,
  counterFilterCallback
}: {
  label: string;
  labelTestKey: string;
  counterFilterCallback: Dispatch<SetStateAction<number>>;
}) => {
  const [counterFilterValue, setCounterFilterValue] = useState(0);

  const manageFilterChange = (modifyCounterBy: number) => {
    setCounterFilterValue((prevCounterFilterValue) => {
      const newCounterFilterValue = prevCounterFilterValue + modifyCounterBy;

      if (newCounterFilterValue < 0) {
        return 0;
      } else {
        return newCounterFilterValue;
      }
    });
  };

  useEffect(() => {
    counterFilterCallback(counterFilterValue);
  }, [counterFilterValue]);

  return (
    <Box margin="0 15px" data-testid={`${labelTestKey}`}>
      <Flex alignContent="center">
        <Text
          fontSize="md"
          lineHeight="31px"
          paddingRight="7px"
          data-testid={`${labelTestKey}-label`}>
          {label}
        </Text>
        <ButtonGroup size="sm" isAttached variant="outline">
          <IconButton
            onClick={() => manageFilterChange(-1)}
            aria-label={`${labelTestKey}-reduce-amount`}
            icon={<MinusIcon />}
            borderRadius={0}
            border={0}
            data-testid={`${labelTestKey}-reduce-amount`}
          />
          <Button border={0} data-testid={`${labelTestKey}-amount-value`}>
            {counterFilterValue}
          </Button>
          <IconButton
            onClick={() => manageFilterChange(1)}
            aria-label={`${labelTestKey}-increase-amount`}
            icon={<AddIcon />}
            borderRadius={0}
            border={0}
            data-testid={`${labelTestKey}-increase-amount`}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default CounterFilter;
