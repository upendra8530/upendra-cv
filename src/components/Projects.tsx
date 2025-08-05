import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing, and responsive design.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      featured: true,
      category: 'Full Stack'
    },
    {
      title: 'SaaS Dashboard',
      description: 'A comprehensive analytics dashboard for SaaS businesses with real-time data visualization, user management, and subscription handling.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      featured: true,
      category: 'Frontend'
    },
    {
      title: 'Restaurant Website',
      description: 'An elegant restaurant website with online reservation system, menu management, and integrated payment processing.',
      image: '/api/placeholder/400/250',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theme'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: false,
      category: 'WordPress'
    },
    {
      title: 'Portfolio Website',
      description: 'A creative portfolio website for a design agency featuring smooth animations, case studies, and contact forms.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: false,
      category: 'Frontend'
    },
    {
      title: 'Learning Management System',
      description: 'A comprehensive LMS platform with course management, student tracking, video streaming, and progress analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: true,
      category: 'Full Stack'
    },
    {
      title: 'Mobile App Landing Page',
      description: 'A high-converting landing page for a mobile app with smooth scrolling, feature showcases, and download tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML/CSS', 'JavaScript', 'GSAP', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2022',
      featured: false,
      category: 'Landing Page'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web development and design
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Work</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-strong">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button size="sm" className="bg-primary hover:bg-primary-hover" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{project.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-medium">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 opacity-80 hover:opacity-100" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 opacity-80 hover:opacity-100" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">{project.category}</Badge>
                        <span className="text-xs text-muted-foreground">{project.date}</span>
                      </div>
                      <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-muted-foreground text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-hover" asChild>
              <a href="#contact">
                Let's Work Together
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
