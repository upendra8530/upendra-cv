import { motion } from 'framer-motion'
import { ExternalLink, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Projects = () => {
  const projects = [
    {
      title: 'Welco.ai',
      description: 'AI-powered platform built with Next.js and modern frontend architecture, featuring high-performance pages and optimized Core Web Vitals.',
      technologies: ['Next.js', 'Tailwind CSS', 'AI Integration', 'Prismic CMS'],
      liveUrl: 'https://welco.ai',
      category: 'AI / SaaS',
      featured: true
    },
    {
      title: 'Fieldcamp.ai',
      description: 'Field service management platform with responsive UI, built using Next.js and integrated with modern CMS for content management.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://fieldcamp.ai',
      category: 'SaaS',
      featured: true
    },
    {
      title: 'Space-O Technologies',
      description: 'Corporate website migration from WordPress to Next.js + Tailwind, improving page speed by 45% and optimizing Core Web Vitals.',
      technologies: ['Next.js', 'WordPress', 'Tailwind CSS', 'SEO'],
      liveUrl: 'https://www.spaceo.ca',
      category: 'Corporate',
      featured: true
    },
    {
      title: 'Foxcue',
      description: 'Modern web application with pixel-perfect design converted from Figma, featuring responsive layouts and smooth animations.',
      technologies: ['Next.js', 'Tailwind CSS', 'Figma', 'Framer Motion'],
      liveUrl: '#',
      category: 'Web App',
      featured: false
    },
    {
      title: 'Labsmedia',
      description: 'Creative agency website with high-converting landing pages and optimized performance metrics.',
      technologies: ['Next.js', 'SCSS', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      category: 'Agency',
      featured: false
    },
    {
      title: 'Lunya',
      description: 'Custom Shopify e-commerce website with UI/UX enhancements that improved conversion rates by 22%.',
      technologies: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
      liveUrl: '#',
      category: 'E-commerce',
      featured: false
    },
    {
      title: 'Daeken',
      description: 'Full-featured web platform with modern design patterns and optimized frontend performance.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Prismic CMS'],
      liveUrl: '#',
      category: 'Web App',
      featured: false
    },
    {
      title: 'Fyule',
      description: 'Performance-optimized web application with pixel-perfect Figma to HTML conversion and responsive design.',
      technologies: ['Next.js', 'Tailwind CSS', 'Figma', 'TypeScript'],
      liveUrl: '#',
      category: 'Web App',
      featured: false
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world projects showcasing expertise in modern frontend development, CMS integration, and performance optimization
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-strong">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{project.category}</Badge>
                        {project.liveUrl !== '#' && (
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
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
            <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">{project.category}</Badge>
                        {project.liveUrl !== '#' && (
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
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
              Interested in working together on your next project?
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
