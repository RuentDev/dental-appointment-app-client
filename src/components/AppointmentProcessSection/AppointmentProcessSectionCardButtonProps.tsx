import { Button, ButtonProps } from '@chakra-ui/react';

interface AppointmentProcessSectionCardButtonProps extends ButtonProps {}

const AppointmentProcessSectionCardButtonProps: React.FC<
  AppointmentProcessSectionCardButtonProps
> = props => {
  return (
    <Button paddingY={4} {...props}>
      Full Process
    </Button>
  );
};

export default AppointmentProcessSectionCardButtonProps;
