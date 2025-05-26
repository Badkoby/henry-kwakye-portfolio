import React, { createContext, useContext, ReactNode } from 'react';

interface BusinessImpact {
  revenue?: number;          // Additional revenue generated
  costSaving?: number;       // Cost savings achieved
  efficiency?: number;       // Efficiency improvement percentage
  roi?: number;             // Return on Investment percentage
  investmentCost?: number;  // Initial investment/implementation cost
  customerSatisfaction?: number;  // Customer satisfaction improvement percentage
  customerRetention?: number;     // Customer retention improvement percentage
  description: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tools: string[];
  link: string;
  businessImpact: BusinessImpact;
}

const projects = [
  {
    title: "E-commerce Analytics Platform",
    description: "Developed comprehensive analytics dashboard for an e-commerce platform, leading to optimized inventory and pricing strategies",
    image: "https://source.unsplash.com/random/800x600/?ecommerce",
    tools: ["Python", "Pandas", "Tableau", "SQL"],
    link: "#",
    businessImpact: {
      revenue: 280000,
      costSaving: 95000,
      efficiency: 35,
      roi: 150,
      investmentCost: 50000,
      customerSatisfaction: 20,
      customerRetention: 10,
      description: "Increased annual revenue through dynamic pricing and optimized stock levels"
    }
  },
  {
    title: "Supply Chain Optimization",
    description: "Implemented predictive analytics for supply chain optimization, reducing logistics costs and improving delivery times",
    image: "https://source.unsplash.com/random/800x600/?logistics",
    tools: ["Python", "Scikit-learn", "Power BI", "PostgreSQL"],
    link: "#",
    businessImpact: {
      costSaving: 320000,   // $320K logistics cost reduction
      efficiency: 42,       // 42% improvement in delivery time
      roi: 180,
      investmentCost: 70000,
      customerSatisfaction: 25,
      customerRetention: 15,
      description: "Reduced annual logistics costs by $320K and improved delivery times by 42% through route optimization and demand forecasting"
    }
  },
  {
    title: "Customer Churn Prevention",
    description: "Built machine learning model to predict and prevent customer churn, significantly improving retention rates",
    image: "https://source.unsplash.com/random/800x600/?customer",
    tools: ["Python", "TensorFlow", "Streamlit", "MongoDB"],
    link: "#",
    businessImpact: {
      revenue: 450000,      // $450K saved from prevented churn
      costSaving: 75000,    // $75K reduction in acquisition costs
      efficiency: 28,       // 28% improvement in retention rate
      roi: 200,
      investmentCost: 30000,
      customerSatisfaction: 30,
      customerRetention: 20,
      description: "Prevented $450K in revenue loss through improved retention and saved $75K in customer acquisition costs"
    }
  },
  {
    title: "Marketing Campaign Optimization",
    description: "Developed ML-powered marketing attribution model to optimize campaign spending and targeting",
    image: "https://source.unsplash.com/random/800x600/?marketing",
    tools: ["R", "Python", "Google Analytics", "BigQuery"],
    link: "#",
    businessImpact: {
      revenue: 180000,      // $180K additional revenue
      costSaving: 120000,   // $120K reduction in ad spend
      efficiency: 45,       // 45% improvement in conversion rate
      roi: 250,
      investmentCost: 40000,
      customerSatisfaction: 35,
      customerRetention: 25,
      description: "Generated $180K additional revenue while reducing ad spend by $120K through optimized targeting"
    }
  }
];

const calculateProjectMetrics = (projects: Project[]) => {
  const totalRevenue = projects.reduce((sum, project) => 
    sum + (project.businessImpact.revenue || 0), 0);
  
  const totalCostSaving = projects.reduce((sum, project) => 
    sum + (project.businessImpact.costSaving || 0), 0);
  
  const efficiencyProjects = projects.filter(p => p.businessImpact.efficiency !== undefined);
  const averageEfficiency = efficiencyProjects.length > 0
    ? efficiencyProjects.reduce((sum, project) => 
        sum + (project.businessImpact.efficiency || 0), 0) / efficiencyProjects.length
    : 0;

  // Calculate average ROI
  const roiProjects = projects.filter(p => p.businessImpact.roi !== undefined);
  const averageROI = roiProjects.length > 0
    ? roiProjects.reduce((sum, project) => 
        sum + (project.businessImpact.roi || 0), 0) / roiProjects.length
    : 0;

  // Calculate average customer satisfaction improvement
  const custSatProjects = projects.filter(p => p.businessImpact.customerSatisfaction !== undefined);
  const avgCustomerSatisfaction = custSatProjects.length > 0
    ? custSatProjects.reduce((sum, project) => 
        sum + (project.businessImpact.customerSatisfaction || 0), 0) / custSatProjects.length
    : 0;

  return {
    totalRevenue,
    totalCostSaving,
    averageEfficiency,
    averageROI,
    avgCustomerSatisfaction
  };
};

interface ProjectsContextType {
  projects: Project[];
  totalRevenue: number;
  totalCostSaving: number;
  averageEfficiency: number;
  averageROI: number;
  avgCustomerSatisfaction: number;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const metrics = calculateProjectMetrics(projects);
  
  return (
    <ProjectsContext.Provider value={{ 
      projects,
      ...metrics
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};
