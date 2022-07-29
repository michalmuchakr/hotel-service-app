import React from 'react';
import { Alert } from '@chakra-ui/react';

const ErrorMessageAlert = () => {
  return (
    <Alert
      status="error"
      variant="left-accent"
      data-testid="error-message"
      position="fixed"
      bottom="0"
      left="0">
      There was an error connecting to database
    </Alert>
  );
};

export default ErrorMessageAlert;
