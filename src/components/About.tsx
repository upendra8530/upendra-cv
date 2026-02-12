import { motion } from 'framer-motion'
import { Code2, Palette, Rocket, Users } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import profileAvatar from '@/assets/profile-avatar.jpg'

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Excellence',
      description: 'Expert in React, Next.js, TypeScript, and modern web technologies'
    },
    {
      icon: Palette,
      title: 'Design Systems',
      description: 'Creating beautiful, consistent UI/UX with Figma and Adobe XD'
    },
    {
      icon: Rocket,
      title: 'Performance Focus',
      description: 'Optimizing web applications for speed and best practices'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading technical migrations and mentoring developers'
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
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences that combine beautiful design with robust functionality
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-card rounded-2xl p-2 shadow-strong">
                  <img
                    src={profileAvatar}
                    alt="Upendra Nath Dubey"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gradient">
                Senior Frontend Developer & UI/UX Specialist
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over <span className="text-primary font-semibold">9+ years of experience</span> in web development, 
                  I specialize in building high-performance, pixel-perfect, and fully responsive web applications that deliver 
                  exceptional user experiences.
                </p>
                
                <p>
                  Currently working as a Senior Web Designer & Frontend Developer at <span className="text-primary font-semibold">Space-O Technologies</span>, 
                  where I develop high-performance Next.js frontends integrated with WordPress and Prismic CMS, 
                  and migrate legacy websites to modern stacks improving page speed by 45%.
                </p>
                
                <p>
                  I actively leverage <span className="text-primary font-medium">AI-assisted development tools</span> like 
                  ChatGPT and Claude Code to accelerate development, improve code quality, and reduce turnaround time. 
                  Proven success in <span className="text-primary font-medium">Core Web Vitals optimization</span> and modern frontend architecture.
                </p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 pt-4"
              >
                {['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'WordPress', 'Prismic CMS', 'Shopify'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">What I Bring to the Table</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium group-hover:bg-card/80">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About