import React from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Checkbox, 
  FormControlLabel, 
  Link, 
  Container,
  Paper,
  IconButton
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import QrCodeIcon from '@mui/icons-material/QrCode';
import talkLogo from '../assets/images/talk_logo.png';


function Home() {
  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#FFFFFF',
      '& fieldset': {
        border: 'none',
      },
      '& input': {
        padding: '10px 14px',
      },
    },
  };

  return (
    <Box sx={{ bgcolor: '#FEE500', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container 
        maxWidth="xs" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box 
          component="img" 
          src={talkLogo} 
          alt="Talk Logo" 
          sx={{ 
            width: 120, 
            mb: 4
          }} 
        />

        <Box sx={{ 
          borderRadius: '4px', 
          overflow: 'hidden',
          border: '1px solid rgba(0, 0, 0, 0.23)',
          mb: 2
        }}>
          <TextField 
            fullWidth 
            placeholder="카카오계정 (이메일 또는 전화번호)" 
            variant="outlined"
            sx={{
              ...textFieldStyle,
              '& .MuiOutlinedInput-root': {
                ...textFieldStyle['& .MuiOutlinedInput-root'],
                borderRadius: '4px 4px 0 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
              },
            }}
          />
          <TextField 
            fullWidth 
            placeholder="비밀번호" 
            type="password" 
            variant="outlined"
            sx={{
              ...textFieldStyle,
              '& .MuiOutlinedInput-root': {
                ...textFieldStyle['& .MuiOutlinedInput-root'],
                borderRadius: '0 0 4px 4px',
              },
            }}
          />
        </Box>
        
        <Button 
          fullWidth 
          variant="contained" 
          sx={{ 
            mb: 2, 
            bgcolor: '#f2f2f2', 
            color: 'black',
            height: '50px',  // 버튼 높이 조정
            '&:hover': {
              bgcolor: '#e0e0e0',
            },
          }}
        >
          로그인
        </Button>
        
        <Typography variant="body2" sx={{ my: 2, color: 'text.secondary' }}>또는</Typography>
        
        <Button fullWidth variant="outlined" startIcon={<QrCodeIcon />} sx={{ mb: 2 }}>
          QR코드 로그인
        </Button>
        
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 2 }}>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<Typography variant="body2">자동 로그인</Typography>}
          />
          <IconButton size="small" sx={{ ml: 'auto' }}>
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Link href="#" variant="body2" underline="hover" sx={{ mr: 1 }}>
            회원가입
          </Link>
          <Typography variant="body2" sx={{ mx: 1 }}>|</Typography>
          <Link href="#" variant="body2" underline="hover" sx={{ ml: 1 }}>
            비밀번호 재설정
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
