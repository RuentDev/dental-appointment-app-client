import { Box, Flex, GridItem, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface AppointmentProcessSectionCardProps {
  icon: React.ReactNode;
  title: string;
}

const AppointmentProcessSectionCard: FC<AppointmentProcessSectionCardProps> = ({
  icon,
  title,
}) => {
  return (
    <GridItem colSpan={{ base: 3, lg: 1 }}>
      <Flex
        padding={8}
        minWidth={170}
        direction='column'
        border={'3px solid #18AFD3'}
        borderRadius={35}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        rowGap={8}>
        <Box>
          <Text>{icon}</Text>
        </Box>
        <Box>
          <Text fontWeight={700} textAlign={'center'}>
            {title}
          </Text>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default AppointmentProcessSectionCard;