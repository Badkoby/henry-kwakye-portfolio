import React from 'react';
import cleanAnalyticsIllustration from '../assets/clean-analytics-illustration.svg';
import dataStatisticsIllustration from '../assets/data-statistics-illustration.svg';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Theme } from '@mui/material';
import type { SxProps } from '@mui/system';
import { motion } from 'framer-motion';
import { GradientText, HeroSection, StyledCard } from '../components/StyledComponents';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useProjects } from '../context/ProjectsContext';

// Animation variants
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

interface StatData {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay: number;
}

const illustrationStyles: SxProps<Theme> = {
  width: '100%',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
  transition: 'all 0.3s ease-in-out',
  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))'
};

const Home: React.FC = () => {
  const { totalRevenue, totalCostSaving, averageEfficiency, averageROI, avgCustomerSatisfaction } = useProjects();
  
  // Format currency (e.g., $150,000)
  const formatCurrency = (num: number) => {
    return `$${num.toLocaleString()}`;
  };

  // Total business impact (revenue + savings)
  const totalImpact = totalRevenue + totalCostSaving;  const statsData: StatData[] = [
    { 
      icon: <MonetizationOnIcon sx={{ fontSize: '3rem' }} color="primary" />,
      number: formatCurrency(totalRevenue),
      label: 'Revenue Generated',
      delay: 0.2
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: '3rem' }} color="primary" />,
      number: formatCurrency(totalCostSaving),
      label: 'Costs Saved',
      delay: 0.3
    },
    {
      icon: <SentimentVerySatisfiedIcon sx={{ fontSize: '3rem' }} color="primary" />,
      number: `${Math.round(avgCustomerSatisfaction)}%`,
      label: 'Customer Satisfaction',
      delay: 0.4
    },
    { 
      icon: <MonetizationOnIcon sx={{ fontSize: '3rem' }} color="primary" />,
      number: formatCurrency(totalImpact),
      label: 'Total Business Impact',
      delay: 0.5
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: '3rem' }} color="primary" />,
      number: `${Math.round(averageROI)}%`,
      label: 'Average ROI',
      delay: 0.6
    },
    {
      icon: <SentimentVerySatisfiedIcon sx={{ fontSize: '3rem' }} color="primary" />,
      number: `${Math.round(averageEfficiency)}%`,
      label: 'Efficiency Improvement',
      delay: 0.7
    }
  ];

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      pb: 8 // Add padding at the bottom to prevent content from touching footer
    }}>
      <HeroSection sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(25, 118, 210, 0.03) 0%, transparent 100%)',
          zIndex: 0
        }
      }}>
        <Container maxWidth={false} sx={{ maxWidth: '1800px', position: 'relative', zIndex: 1 }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 8, 
            alignItems: 'center',
            py: { xs: 8, md: 12 } 
          }}>
            <Box sx={{ 
              maxWidth: '900px', 
              width: '100%', 
              textAlign: 'center',
              px: { xs: 2, sm: 4 }
            }}>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ userSelect: 'text' }}
              >
                <Typography 
                  variant="h6" 
                  color="primary" 
                  gutterBottom 
                  sx={{ 
                    userSelect: 'text',
                    cursor: 'text',
                    letterSpacing: '0.2em',
                    fontWeight: 600
                  }}
                >
                  DATA ANALYST & INSIGHTS SPECIALIST
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ userSelect: 'text' }}
              >
                <GradientText 
                  variant="h1" 
                  gutterBottom 
                  sx={{ 
                    userSelect: 'text',
                    cursor: 'text',
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 3
                  }}
                >
                  Turning Data into Actionable Insights
                </GradientText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ userSelect: 'text' }}
              >
                <Typography
                  variant="h5"
                  color="textSecondary"
                  paragraph
                  sx={{ 
                    mb: 6, 
                    userSelect: 'text', 
                    cursor: 'text',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    lineHeight: 1.8,
                    maxWidth: '800px',
                    mx: 'auto',
                    opacity: 0.9
                  }}
                >
                  Helping businesses make data-driven decisions through advanced analytics
                  and clear visualization techniques.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{ width: '100%' }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  gap: { xs: 2, sm: 3 },
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'center',
                  width: '100%',
                  maxWidth: '500px',
                  mx: 'auto',
                  px: 2
                }}>
                  <Button
                    component={Link}
                    to="/projects"
                    variant="contained"
                    size="large"
                    color="primary"
                    fullWidth
                    sx={{ 
                      minWidth: { xs: '100%', sm: '200px' },
                      py: 2,
                      px: 4,
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: '0 8px 20px rgba(25, 118, 210, 0.2)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 24px rgba(25, 118, 210, 0.3)',
                      },
                      transition: 'all 0.2s ease-in-out'
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    size="large"
                    color="primary"
                    fullWidth
                    sx={{ 
                      minWidth: { xs: '100%', sm: '200px' },
                      py: 2,
                      px: 4,
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderWidth: '2px',
                      '&:hover': {
                        borderWidth: '2px',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'all 0.2s ease-in-out'
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </motion.div>
            </Box>

            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                flexWrap: { xs: 'wrap', md: 'nowrap' }, 
                gap: { xs: 6, md: 8 },
                px: { xs: 2, md: 4 },
                maxWidth: '1400px',
                width: '100%',
                mt: { xs: 4, md: 8 }
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  minWidth: { xs: '300px', sm: '400px' },
                  maxWidth: { xs: '100%', sm: '600px' }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  style={{ transformOrigin: 'center center' }}
                >
                  <Box
                    sx={{
                      p: 6,
                      bgcolor: 'background.paper',
                      borderRadius: 4,
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)',
                      },
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <Box
                      component="img"
                      src={cleanAnalyticsIllustration}
                      alt="Data Analytics Visualization"
                      sx={illustrationStyles}
                    />
                  </Box>
                </motion.div>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  minWidth: { xs: '300px', sm: '400px' },
                  maxWidth: { xs: '100%', sm: '600px' }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  style={{ transformOrigin: 'center center' }}
                >                  <Box
                    sx={{
                      p: 6,
                      bgcolor: 'background.paper',
                      borderRadius: 4,
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12)',
                      },
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <Box
                      component="img"
                      src={dataStatisticsIllustration}
                      alt="Statistical Analysis and Insights"
                      sx={illustrationStyles}
                    />
                  </Box>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      <Box sx={{ 
        py: 12, 
        bgcolor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 0% 0%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }
      }}>
        <Container maxWidth="lg">
          <Box sx={{            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr',
              sm: 'repeat(2, 1fr)', 
              lg: 'repeat(3, 1fr)' 
            }, 
            gap: { xs: 4, sm: 6 },
            position: 'relative',
            zIndex: 1
          }}>
            {statsData.map((stat, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  style={{ userSelect: 'text' }}
                >
                  <StyledCard sx={{
                    p: 5,
                    textAlign: 'center',
                    borderRadius: 4,
                    bgcolor: 'background.paper',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 48px rgba(0, 0, 0, 0.12)',
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}>
                    <Box sx={{ 
                      mb: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      '& > svg': {
                        fontSize: '3rem',
                        color: 'primary.main'
                      }
                    }}>
                      {stat.icon}
                    </Box>
                    <GradientText 
                      variant="h3" 
                      gutterBottom 
                      sx={{ 
                        userSelect: 'text',
                        cursor: 'text',
                        fontSize: { xs: '2.5rem', sm: '3rem' },
                        fontWeight: 700,
                        mb: 2
                      }}
                    >
                      {stat.number}
                    </GradientText>
                    <Typography 
                      variant="h6" 
                      color="textSecondary" 
                      sx={{ 
                        userSelect: 'text',
                        cursor: 'text',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        opacity: 0.9
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </StyledCard>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
