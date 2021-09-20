import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useTranslation } from 'hooks';

const SettingLanguage = () => {
  const { languages, languageList, currentLanguage, setLanguage } = useTranslation();
  return (
    <Box sx={{ p: 3 }}>
      <RadioGroup
        row
        value={currentLanguage.locale}
        onChange={(event) => {
          setLanguage(languages[event.target.value]);
        }}
      >
        {languageList.map((lang) => (
          <FormControlLabel key={lang.code} value={lang.locale} label={lang.language} control={<Radio />} />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default SettingLanguage;
