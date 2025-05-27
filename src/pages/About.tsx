import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { GradientText, SkillChip, StyledCard, SectionTitle } from '../components/StyledComponents';
import { styled } from '@mui/material/styles';
import profilePhoto from '../assets/profile-photo.png';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  highlights: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
}

const StyledLink = styled('a')({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
});

const About = () => {
  const skills = {
    technical: [
      'Python', 'SQL', 'Excel', 'Data Analysis',
      'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
      'Predictive Modeling', 'Power BI', 'Data Visualization',
      'Statistical Analysis', 'Machine Learning', 'Data Mining'
    ]
  };

  const experiences: Experience[] = [
    {
      title: 'Data Analyst',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: [
        'Led data analysis projects using Python, SQL, and advanced visualization tools',
        'Developed automated reporting systems reducing manual work by 40%',
        'Created predictive models achieving 85% accuracy in business forecasting',
        'Collaborated with cross-functional teams to deliver actionable insights'
      ]
    },
    {
      title: 'Junior Data Analyst',
      company: 'Analytics Corp',
      period: '2021 - 2023',
      description: [
        'Performed data cleaning and preprocessing using Python and SQL',
        'Built interactive dashboards using Power BI for 100+ daily active users',
        'Optimized database queries resulting in 30% faster report generation',
        'Conducted A/B testing and statistical analysis for marketing campaigns'
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: 'Masters in Data Analytics',
      institution: 'University of Ghana',
      period: '2022 - 2024',
      highlights: 'Specialized in Machine Learning and Statistical Analysis'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Kwame Nkrumah University of Science and Technology',
      period: '2018 - 2022',
      highlights: 'First Class Honours, Minor in Mathematics'
    }
  ];

  const certifications: Certification[] = [
    {
      title: 'Data Analysis Professional Certificate',
      issuer: 'Google',
      year: '2023'
    },
    {
      title: 'Data Science Specialization',
      issuer: 'IBM',
      year: '2023'
    },
    {
      title: 'Advanced SQL for Data Analytics',
      issuer: 'Microsoft',
      year: '2022'
    }
  ];

  const containerMotion = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemMotion = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="lg">
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
                  src={profilePhoto}
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
                  Data Analyst specializing in transforming complex data into clear, actionable insights
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  With a strong foundation in Python, SQL, and data visualization, I help organizations make data-driven decisions
                  that drive business growth. My expertise includes statistical analysis, machine learning, and creating
                  interactive dashboards that make complex data accessible and actionable.
                </Typography>
                <Box mt={2}>
                  <Typography variant="body1" color="text.secondary">
                    📧 <StyledLink href="mailto:iamkobinahenry@gmail.com">iamkobinahenry@gmail.com</StyledLink><br />
                    📱 <StyledLink href="tel:+233548017688">+233 54 801 7688</StyledLink><br />
                    🔗 <StyledLink href="https://www.linkedin.com/in/henrykwakye" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/henrykwakye
                    </StyledLink><br />
                    🐙 <StyledLink href="https://github.com/Badkoby" target="_blank" rel="noopener noreferrer">
                      github.com/Badkoby
                    </StyledLink>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>

        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" gutterBottom>
            Skills & Expertise
          </SectionTitle>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {skills.technical.map((skill, index) => (
              <SkillChip key={index}>{skill}</SkillChip>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" gutterBottom>
            Professional Experience
          </SectionTitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemMotion}
                initial="hidden"
                animate="show"
              >
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
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" gutterBottom>
            Education
          </SectionTitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemMotion}
                initial="hidden"
                animate="show"
              >
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
            ))}
          </Box>
        </Box>

        <Box>
          <SectionTitle variant="h3" gutterBottom>
            Certifications
          </SectionTitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemMotion}
                initial="hidden"
                animate="show"
              >
                <StyledCard>
                  <Typography variant="h6" gutterBottom>
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
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
