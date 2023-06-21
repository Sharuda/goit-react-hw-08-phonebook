import { useSelector, useDispatch } from 'react-redux';
import { TextField, Box } from '@mui/material';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: 400 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          {' '}
          <TextField
            id="outlined-filter-input"
            label="Find a contact by name"
            type="text"
            name="filter"
            required
            value={filter}
            onChange={handleChange}
          />
        </div>
      </Box>
    </>
  );
};

export default Filter;
