import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  IconButton, 
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  background: 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(8px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&.scrolled': {
    background: 'rgba(18, 18, 18, 0.95)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
  }
});

interface NavButtonProps {
  component: React.ElementType;
  to: string;
  className?: string;
  children?: React.ReactNode;
}

const NavButton = styled(Button)<NavButtonProps>(({ theme }) => ({
  marginLeft: '16px',
  position: 'relative',
  color: 'rgba(255, 255, 255, 0.9)',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '2px',
    bottom: '0',
    left: '50%',
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    transition: 'all 0.3s ease-in-out',
    transform: 'translateX(-50%)'
  },
  '&:hover': {
    color: '#fff',
    backgroundColor: 'transparent'
  },
  '&:hover::after': {
    width: '100%'
  },
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 600,
    '&::after': {
      width: '100%'
    }
  }
}));

const StyledLogo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '1px'
}));

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <StyledAppBar position="fixed" className={isScrolled ? 'scrolled' : ''}>
        <Container maxWidth={false} sx={{ maxWidth: '1800px' }}>
          <Toolbar disableGutters>
            <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <StyledLogo variant="h6">
                HENRY KWAKYE
              </StyledLogo>
            </RouterLink>

            <Box sx={{ flexGrow: 1 }} />

            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item) => (
                  <NavButton
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    className={isActive(item.path) ? 'active' : ''}
                  >
                    {item.label}
                  </NavButton>
                ))}
              </Box>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            bgcolor: 'background.default',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <List sx={{ pt: 2 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: isActive(item.path) ? 'primary.main' : 'text.primary',
                bgcolor: isActive(item.path) ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                fontWeight: isActive(item.path) ? 600 : 400,
                borderLeft: isActive(item.path) ? 3 : 0,
                borderColor: 'primary.main',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  bgcolor: 'rgba(25, 118, 210, 0.08)'
                }
              }}
            >
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  pl: isActive(item.path) ? 2 : 3
                }} 
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
