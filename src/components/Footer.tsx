import { Box, Container, Typography, Stack, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import type { Theme } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: '#1a1a1a',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
  borderTop: `1px solid ${theme.palette.divider}`,
  width: '100%',
  position: 'relative',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(180deg, #242424 0%, #1a1a1a 100%)`,
    opacity: 0.7,
    zIndex: -1
  }
}));

const SocialLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1.5, 2.5),
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            textAlign: 'center',
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Typography 
            variant="h4" 
            component="h2"
            fontWeight="bold"
            sx={(theme) => ({
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              maxWidth: '800px'
            })}
          >
            Let's Build Something Amazing Together
          </Typography>
            <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 4,
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Ready to transform your data into actionable insights? Let's discuss your next project.
          </Typography>
          
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 3 }}
            justifyContent="center"
            alignItems="center"
            sx={{ 
              width: '100%',
              maxWidth: '800px',
              flexWrap: { sm: 'wrap' }
            }}
          >
            <SocialLink href="mailto:iamkobinahenry@gmail.com">
              <EmailIcon /> Email
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/henrykwakye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon /> LinkedIn
            </SocialLink>
            <SocialLink 
              href="https://github.com/Badkoby"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> GitHub
            </SocialLink>
            <SocialLink href="tel:+233548017688">
              <PhoneIcon /> +233 54 801 7688
            </SocialLink>
          </Stack>
          
          <Box sx={{ pt: 4, width: '100%', maxWidth: '800px' }}>            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                borderTop: theme => `1px solid ${theme.palette.divider}`,
                pt: 2
              }}
            >
              © {currentYear} Henry Kwakye. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
