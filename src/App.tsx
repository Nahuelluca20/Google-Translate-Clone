import {Button, HStack, Heading, Stack, Text, Image} from "@chakra-ui/react";

import ArrowInterChange from "./assets/arrow-interchange.svg";
import useStore from "./hooks/useStore";
import {AUTO_LANGUAGE} from "./types/constants";
import {LanguageSelector} from "./components";

function App() {
  const {fromLanguage, setFromLanguage, toLanguage, interchangeLenguages, setToLanguage} =
    useStore();

  return (
    <main>
      <Stack alignItems={"center"} height={"90vh"} justifyContent={"center"} width={"100%"}>
        <Heading>Google Translate</Heading>
        <HStack alignItems={"start"} pt={5} spacing={20}>
          <Stack>
            <LanguageSelector type="from" value={fromLanguage} onChange={setFromLanguage} />
            <Text>{fromLanguage}</Text>
          </Stack>
          <Stack pt={3}>
            <Button
              isDisabled={fromLanguage === AUTO_LANGUAGE}
              variant={"link"}
              onClick={interchangeLenguages}
            >
              <Image height={"24px"} src={ArrowInterChange} width={"24px"} />
            </Button>
          </Stack>
          <Stack>
            <LanguageSelector type="to" value={toLanguage} onChange={setToLanguage} />
            <Text>{toLanguage}</Text>
          </Stack>
          {fromLanguage}
        </HStack>
      </Stack>
    </main>
  );
}

export default App;
