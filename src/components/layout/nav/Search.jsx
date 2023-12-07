import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthPage/hook/useAuth';
import { useState } from 'react';

const Search = () => {
  const { setSearchVal } = useAuth()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      setSearchVal(inputValue)
      navigate(`/shop?search=${inputValue}`)
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="relative md:w-full">
      <TextField
        variant="outlined"
        placeholder="Search..."
        fullWidth
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeyPress}
        InputProps={{
          startAdornment: (
            <SearchIcon
              style={{
                cursor: 'pointer',
                color: 'gray',
                marginRight: '10px'
              }}
            />
          ),
          style: {
            borderRadius: '50px',
            backgroundColor: 'white',
          }
        }}
      />
    </div>
  )
}

export default Search