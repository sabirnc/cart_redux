import { Alert , AlertDescription, AlertIcon , AlertTitle } from "@chakra-ui/react"


const Error = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Network issue </AlertTitle>
      <AlertDescription>
         please try again later
      </AlertDescription>
    </Alert>
  );
};


export default Error
