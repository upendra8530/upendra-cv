import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const Experience = () => {
  const experiences = [
    {
      title: 'Sr. Web Designer → Frontend Developer',
      company: 'Space-O Technologies',
      location: 'Gujarat, India',
      period: 'Feb 2022 - Present',
      type: 'Full-time',
      achievements: [
        'Led successful conversion to Next.js framework, improving FCP/LCP performance metrics',
        'Designed and developed responsive websites and landing pages using Figma, Adobe XD, WordPress, Bootstrap, and SCSS',
        'Collaborated closely with marketing teams on multiple internal and client projects',
        'Implemented SEO optimization strategies and responsive design principles across all projects',
        'Mentored junior developers and established frontend development best practices'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe XD', 'WordPress', 'Bootstrap', 'SCSS']
    },
    {
      title: 'Senior Web Designer',
      company: 'STALWART DIGITAL',
      location: 'Remote',
      period: 'Aug 2019 - Feb 2022',
      type: 'Full-time',
      achievements: [
        'Developed high-converting Shopify-based landing pages and e-commerce solutions',
        'Managed comprehensive client coordination and project delivery from concept to launch',
        'Utilized Photoshop, HTML/CSS, and responsive/mobile-first design techniques',
        'Maintained strong client relationships and delivered projects within specified timelines',
        'Increased client conversion rates by 35% through optimized landing page designs'
      ],
      technologies: ['Shopify', 'HTML/CSS', 'JavaScript', 'Photoshop', 'Responsive Design', 'E-commerce']
    },
    {
      title: 'Web Designer',
      company: 'Siddhi Infosoft',
      location: 'Gujarat, India',
      period: 'May 2016 - Nov 2017',
      type: 'Full-time',
      achievements: [
        'Developed responsive websites using Bootstrap, WordPress, Joomla, and Magento platforms',
        'Gained extensive hands-on experience with HTML/CSS and Photoshop in fast-paced project environment',
        'Built foundational skills in multiple CMS platforms and frontend frameworks',
        'Collaborated with design and development teams to deliver client projects',
        'Successfully completed 50+ website projects across various industries'
      ],
      technologies: ['WordPress', 'Joomla', 'Magento', 'Bootstrap', 'HTML/CSS', 'Photoshop', 'jQuery']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of growth, learning, and delivering exceptional web solutions across various industries
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-4 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-medium flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-16 md:ml-20">
                    <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-medium">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <Building2 className="h-4 w-4" />
                              <span className="font-medium">{exp.company}</span>
                              <span className="text-xs px-2 py-1 bg-secondary rounded-full">{exp.type}</span>
                            </div>
                          </div>
                          <div className="flex flex-col md:items-end gap-1">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience