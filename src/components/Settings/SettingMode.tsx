import { Box, Grid, Radio, Paper, RadioGroup, CardActionArea, FormControlLabel } from '@mui/material';
import { useTranslation } from 'hooks';
import useSettings from '../../hooks/useSettings';

export default function SettingMode() {
  const { themeMode, onChangeMode } = useSettings();
  const { t } = useTranslation();

  return (
    <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode}>
      <Grid container spacing={2.5} dir="ltr">
        {['light', 'dark'].map((mode) => (
          <Grid item xs={6} key={mode}>
            <Paper
              sx={{
                width: 1,
                zIndex: 0,
                overflow: 'hidden',
                position: 'relative',
                bgcolor: mode === 'dark' ? 'grey.900' : 'common.white',
                ...(themeMode === mode && {
                  boxShadow: (theme) => theme.customShadows.z12
                })
              }}
            >
              <CardActionArea sx={{ color: 'primary.main' }}>
                <Box
                  sx={{
                    py: 4,
                    display: 'flex',
                    color: 'text.disabled',
                    justifyContent: 'center',
                    ...(themeMode === mode && {
                      color: 'primary.main'
                    })
                  }}
                >
                  {t(mode === 'dark' ? 'Dark' : 'Light')}
                </Box>

                <FormControlLabel
                  label=""
                  value={mode}
                  control={<Radio sx={{ display: 'none' }} />}
                  sx={{
                    top: 0,
                    margin: 0,
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                  }}
                />
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
}
