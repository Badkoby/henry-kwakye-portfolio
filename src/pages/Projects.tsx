import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useProjects } from '../context/ProjectsContext';

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}));

const Projects = () => {
  const { projects } = useProjects();
  
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>
        Projects
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Showcasing my data analysis and visualization projects
      </Typography>
      
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard elevation={3}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography>
                  {project.description}
                </Typography>
                
                {/* Business Impact Metrics */}
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Grid container spacing={1}>
                    {project.businessImpact.revenue && (
                      <Grid item xs={6}>
                        <Typography variant="subtitle2" color="primary">Revenue Impact</Typography>
                        <Typography variant="body2">
                          ${project.businessImpact.revenue.toLocaleString()}
                        </Typography>
                      </Grid>
                    )}
                    {project.businessImpact.costSaving && (
                      <Grid item xs={6}>
                        <Typography variant="subtitle2" color="primary">Cost Savings</Typography>
                        <Typography variant="body2">
                          ${project.businessImpact.costSaving.toLocaleString()}
                        </Typography>
                      </Grid>
                    )}
                    {project.businessImpact.roi && (
                      <Grid item xs={6}>
                        <Typography variant="subtitle2" color="primary">ROI</Typography>
                        <Typography variant="body2">{project.businessImpact.roi}%</Typography>
                      </Grid>
                    )}
                    {project.businessImpact.customerSatisfaction && (
                      <Grid item xs={6}>
                        <Typography variant="subtitle2" color="primary">Customer Satisfaction</Typography>
                        <Typography variant="body2">+{project.businessImpact.customerSatisfaction}%</Typography>
                      </Grid>
                    )}
                  </Grid>
                </Box>

                {/* Tools */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tools.map((tool) => (
                    <Typography
                      key={tool}
                      variant="body2"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1
                      }}
                    >
                      {tool}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link}>
                  View Details
                </Button>
              </CardActions>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
