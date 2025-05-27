import React from 'react';
import { Container, Box, useTheme, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  spacing?: number;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  maxWidth = 'lg',
  spacing = 4
}) => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        pt: spacing,
        pb: spacing * 2, // Double bottom padding to ensure space for footer
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Container maxWidth={maxWidth}>
        {title && (
          <Typography
            variant="h2"
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            gutterBottom
            sx={{
              mb: 4,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}
          >
            {title}
          </Typography>
        )}
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </Container>
    </Box>
  );
};

export default PageContainer;
