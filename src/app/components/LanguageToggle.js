import { Globe } from 'lucide-react';
import { Select, MenuItem } from '@mui/material';

export default function LanguageToggle({ language, setLanguage }) {
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex items-center gap-2 bg-lightSecondary dark:bg-darkSecondary rounded-lg">
      
      <Select
      value={language}
      onChange={handleLanguageChange}
      variant="outlined"
      displayEmpty
      sx={{
        color: 'gray',
        width: '60px',
        fontSize: '0.975rem',
        '.MuiOutlinedInput-root': {
          width: '60px',
          padding: '4px 8px',
          minHeight: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.MuiSelect-select': {
          width: '60px',
          padding: '4px 8px !important',
          minHeight: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        '.MuiSvgIcon-root': { color: 'gray', fontSize: '1rem' },
      }}
      MenuProps={{
          PaperProps: {
            sx: {
              width: '60px',
              '.MuiMenuItem-root': {
                fontSize: '0.975rem',
                padding: '4px 8px', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '1rem',
              },
            },
          },
        }}
      >

        <MenuItem value="pt">PT</MenuItem>
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="es">ES</MenuItem>
    </Select>

    </div>
  );
}