import { Box, Container, Grid as MuiGrid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { GradientText, SkillChip, StyledCard, SectionTitle } from '../components/StyledComponents';

const Grid = MuiGrid as any; // Temporary type assertion to fix Grid issues

const About = () => {
  const skills = {
    technical: [
      'Python', 'SQL', 'Excel', 'Vibe Coding',
      'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
      'Predictive Modeling', 'Power BI', 'Data Visualization'
    ]
  };

  const experiences = [
    {
      title: 'Senior Data Analyst',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: [
        'Led cross-functional team of 5 analysts, delivering insights that drove 30% improvement in operational efficiency',
        'Implemented automated ML pipeline reducing customer churn by 25%',
        'Developed real-time dashboard system monitoring KPIs for 100+ daily active users'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Corp',
      period: '2021 - 2023',
      description: [
        'Developed automated reporting systems saving 20 hours per week in manual work',
        'Created predictive models achieving 85% accuracy in sales forecasting',
        'Optimized marketing spend allocation resulting in 40% ROI improvement'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Tech University',
      period: '2020 - 2021',
      highlights: 'Specialized in Machine Learning and Statistical Analysis'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      period: '2016 - 2020',
      highlights: 'Graduated with Honors, Minor in Mathematics'
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Data Analytics Specialist',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      title: 'Google Professional Data Engineer',
      issuer: 'Google Cloud',
      year: '2022'
    },
    {
      title: 'Microsoft Certified: Azure Data Scientist Associate',
      issuer: 'Microsoft',
      year: '2022'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box mb={8}>
            <Box textAlign="center" mb={6}>
              <GradientText variant="h2" gutterBottom>
                About Me
              </GradientText>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
              <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '40%' }, display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="/profile-photo.png"
                  alt="Henry Kwakye"
                  sx={{
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: 3
                  }}
                />
              </Box>
              <Box sx={{ flex: '1 1 auto', width: { xs: '100%', md: '60%' } }}>
                <Typography variant="h5" color="textSecondary" paragraph sx={{ mb: 3 }}>
                  Passionate Data Professional with expertise in transforming complex data into actionable insights
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  I specialize in leveraging Python, SQL, and advanced data visualization tools to uncover meaningful patterns and drive data-informed decisions. My approach combines technical expertise with clear communication to translate complex analyses into actionable business strategies.
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" gutterBottom>
            Skills & Expertise
          </SectionTitle>
          <Grid container spacing={4}>
            <Grid component="div" item xs={12}>
              <motion.div variants={item}>
                <StyledCard>
                  <Box>
                    {skills.technical.map((skill) => (
                      <SkillChip key={skill}>{skill}</SkillChip>
                    ))}
                  </Box>
                </StyledCard>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Experience Section */}        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" gutterBottom>
            Professional Experience
          </SectionTitle>
          <motion.div variants={container} initial="hidden" animate="show">
            <Grid container spacing={4}>
              {experiences.map((experience, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <motion.div variants={item}>
                    <StyledCard>
                      <Typography variant="h6" gutterBottom color="primary">
                        {experience.title}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        {experience.company}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        {experience.period}
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2 }}>
                        {experience.description.map((desc, i) => (
                          <Typography component="li" variant="body1" key={i} sx={{ mb: 1 }}>
                            {desc}
                          </Typography>
                        ))}
                      </Box>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        {/* Education Section */}        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" gutterBottom>
            Education
          </SectionTitle>
          <motion.div variants={container} initial="hidden" animate="show">
            <Grid container spacing={4}>
              {education.map((edu, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <motion.div variants={item}>
                    <StyledCard>
                      <Typography variant="h6" gutterBottom color="primary">
                        {edu.degree}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        {edu.period}
                      </Typography>
                      <Typography variant="body1">
                        {edu.highlights}
                      </Typography>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        {/* Certifications Section */}        <Box>
          <SectionTitle variant="h3" gutterBottom>
            Certifications
          </SectionTitle>
          <motion.div variants={container} initial="hidden" animate="show">
            <Grid container spacing={4}>
              {certifications.map((cert, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <motion.div variants={item}>
                    <StyledCard>                      <Typography variant="h6" gutterBottom>
                        {cert.title}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        {cert.issuer}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {cert.year}
                      </Typography>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
