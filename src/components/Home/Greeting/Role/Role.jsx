import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useBreakpoint from '../../../../hooks/useBreakpoint';

const Role = () => {
  const theme = useTheme();
  const { isSm, isMd } = useBreakpoint();
  const isSmallScreen = isSm || isMd;

  const roleStyles = {
    color: isSmallScreen
      ? theme.palette.accent.green
      : theme.palette.secondary.purple,
    fontSize: isSmallScreen ? 20 : theme.typography.h2,
    mb: 2,
  };

  return (
    <Typography variant="h2" sx={roleStyles}>
      &gt; Front-end developer
    </Typography>
  );
};

export default Role;
