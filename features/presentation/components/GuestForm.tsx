import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Button,
  MenuItem,
  Menu,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import PageBar from './PageBar';

export default function GuestForm() {
  const [guestOf, setGuestOf] = React.useState('Khách của');
  const [event, setEvent] = React.useState('Đến dự');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: '#b2dfdb',
        main: '#5F8575',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <PageBar />
        <Box
          component="form"
          m="auto"
          sx={{
            mt: 1,
            width: 550,
            border: 3,
            backgroundColor: 'primary.light',
            borderColor: 'primary.main',
            borderRadius: '16px',
            '& .MuiTextField-root': { m: 2, width: '25ch' },
            '& .MuiButton-root': { mt: 1, ml: 2, mb: 1 },
            '& .MuiTypography-root': { ml: 2, mb: 0 },
            '& .MuiFormGroup-root': { mt: 0, ml: 1 },
            '& .MuiFormControlLabel-root': { ml: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              size="medium"
              focused
              required
              id="outlined-required"
              label="Tên"
              name="Name"
              placeholder="Bạn tên là?"
            />
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="outlined"
              onClick={handleClick}
            >
              {guestOf}
            </Button>
            <Menu
              id="guest-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                onClick={() => {
                  setGuestOf('Cô Dâu');
                  handleClose();
                }}
              >
                Cô Dâu
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setGuestOf('Chú Rể');
                  handleClose();
                }}
              >
                Chú Rể
              </MenuItem>
            </Menu>
          </div>
          {guestOf == 'Cô Dâu' && (
            <div>
              <Button
                id="bride-button"
                aria-controls={open ? 'bride-event-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                onClick={handleClick2}
              >
                {event}
              </Button>
              <Menu
                id="bride-event-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'bride-button',
                }}
              >
                <MenuItem
                  onClick={() => {
                    setEvent('Nhà Cô Dâu');
                    handleClose();
                  }}
                >
                  Nhà cô dâu
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setEvent('Nhà hàng Long Vĩ');
                    handleClose();
                  }}
                >
                  Nhà hàng Long Vĩ
                </MenuItem>
              </Menu>
            </div>
          )}
          {guestOf == 'Chú Rể' && (
            <div>
              <Button
                id="groom-button"
                aria-controls={open ? 'groom-event-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                onClick={handleClick2}
              >
                {event}
              </Button>
              <Menu
                id="groom-event-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'groom-button',
                }}
              >
                <MenuItem
                  onClick={() => {
                    setEvent('Nhà chú rể');
                    handleClose();
                  }}
                >
                  Nhà chú rể
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setEvent('Nhà hàng Long Vĩ');
                    handleClose();
                  }}
                >
                  Nhà hàng Long Vĩ
                </MenuItem>
              </Menu>
            </div>
          )}
          <div>
            <Button variant="contained">Sẽ đến</Button>
            <Button>Không thể đến</Button>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
