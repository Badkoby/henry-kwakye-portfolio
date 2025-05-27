import { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { Grid } from '../components/StyledComponents';
import PageContainer from '../components/PageContainer';

const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 48px rgba(0,0,0,0.15)'
  }
}));

const StyledAnchor = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  minWidth: '240px',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius * 2,
  color: theme.palette.primary.main,
  background: 'none',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.primary.main,
    color: '#fff',
    textDecoration: 'none',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <PageContainer title="Contact Me">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ContactPaper elevation={3}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </ContactPaper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <ContactPaper elevation={3}>
            <Typography variant="h4" gutterBottom fontWeight="bold" align="center">
              Connect With Me
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center" paragraph sx={{ mb: 4 }}>
              Feel free to reach out through any of these channels:
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <StyledAnchor
                href="mailto:iamkobinahenry@gmail.com"
              >
                <EmailIcon sx={{ mr: 2 }} /> Email
              </StyledAnchor>
              <StyledAnchor
                href="https://www.linkedin.com/in/henrykwakye"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ mr: 2 }} /> LinkedIn
              </StyledAnchor>
              <StyledAnchor
                href="https://github.com/Badkoby"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ mr: 2 }} /> GitHub
              </StyledAnchor>
              <StyledAnchor href="tel:+233548017688">
                <PhoneIcon sx={{ mr: 2 }} /> +233 54 801 7688
              </StyledAnchor>
            </Box>
          </ContactPaper>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
          elevation={6}
          variant="filled"
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </PageContainer>
  );
};

export default Contact;
