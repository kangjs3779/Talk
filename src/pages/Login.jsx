import React from 'react';
import { Box, TextField, Button} from '@mui/material';
import talkLogo from '../assets/images/TalkLogo.png';

function Login() {
  const textFieldStyle = {
    width: '80%',
    borderRadius: '5px',
    backgroundColor: 'white',
  };

  return (
    <Box 
      sx={{
        height: '100vh',
        backgroundColor: 'var(--kakao-yellow)',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          component="img"
          src={talkLogo}
          alt="talk logo"
          sx={{
            width: '15vh',
            height: '15vh',
            marginTop: '13vh',
            marginBottom: '5vh'
          }}
        />
        <TextField 
          type='text' 
          label="이메일 또는 전화번호" 
          variant="outlined" 
          size="small"
          sx={textFieldStyle}
        />
        <TextField 
          type="password" 
          label="비밀번호" 
          variant="outlined" 
          size="small"
          sx={textFieldStyle}
        />
        <Button 
          variant="contained" 
          sx={{ 
            width: '80%', 
            marginTop: '1vh',
            backgroundColor: '#423630',
          }}
        >
          로그인
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
