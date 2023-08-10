import { Typography } from '@mui/material';
import React from 'react';
import { getUTCDateTime } from '../../Utilities/DateTimeUtils';

const UTCDateTime = () => {
  const utcFullDate = getUTCDateTime();
  const utcTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {utcFullDate} GMT
    </Typography>
  );
  return utcTimeValue;
};

export default UTCDateTime;