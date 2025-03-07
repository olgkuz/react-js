import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

export default function Form (){
    return(
    <Box > 
    
    <Stack
      component="form"
      sx={{ width: '25ch' }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Ваше имя"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Ваш телефон"
        variant="filled"
      />
  
    </Stack>
    
  
  </Box>
    )
}