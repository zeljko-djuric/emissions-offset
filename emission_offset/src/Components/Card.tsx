import * as React from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

type Props = {
  trip: {
    title: string;
    countries: number;
    days: number;
    emissions_offset: string;
    trip_rating: number;
    image_url: string;
  };
};
export const Card = ({ trip }: Props) => {
  return (
    <Box
      bgSize="cover"
      bgImg={trip.image_url}
      minWidth="md"
      w="20%"
      minHeight="sm"
      borderRadius="xl"
      borderColor="white"
    >
      <Center color="white">
        <Box position="absolute" bottom="60%">
          <Text fontSize="x-large" as="b">
            {trip.title}
          </Text>
        </Box>
      </Center>
      <Center color="white">
        <Box position="absolute" bottom="55%">
          <Text fontSize="sm" as="b">
            {trip.countries} Countries, {trip.days} Days
          </Text>
        </Box>
      </Center>
      <Center>
        <Box
          bgColor="gray.800"
          borderRadius="lg"
          padding="3"
          color="white"
          position="absolute"
          bottom="30%"
        >
          <Text fontSize="medium" as="b">
            Emmision offset: {trip.emissions_offset}
          </Text>
        </Box>
      </Center>
      <Center>
        <Box
          textAlign="center"
          display="flex"
          borderRadius="lg"
          bgColor="white"
          padding="5"
          position="absolute"
          bottom="0"
          alignItems="center"
        >
          <Text as="b">Trip rating:</Text>
          {new Array(5).fill("").map((_, i) => (
            <StarIcon key={i} color="gold" />
          ))}
          <Box as="span" ml="2" fontSize="sm">
            <Text as="b">{trip.trip_rating}</Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
