import {Select} from "@chakra-ui/react";

import {SUPPORTED_LANGUAGES} from "../../types/constants";
import {Language, FromLanguage} from "../../types/state";

type LanguageSelectorProps =
  | {type: "from"; value: FromLanguage; onChange: (language: FromLanguage) => void}
  | {type: "to"; value: Language; onChange: (language: Language) => void};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({onChange}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };

  return (
    <Select placeholder="Select option" onChange={handleChange}>
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Select>
  );
};

export default LanguageSelector;
