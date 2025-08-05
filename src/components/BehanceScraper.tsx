import { useState } from 'react';
import { useToast } from "@/hooks/use-toast"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Key, Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectData {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  tags?: string[];
  publishedDate?: string;
}

export const BehanceScraper = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState(FirecrawlService.getApiKey() || '');
  const [isApiKeySet, setIsApiKeySet] = useState(!!FirecrawlService.getApiKey());
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrapedData, setScrapedData] = useState<any>(null);
  const [projects, setProjects] = useState<ProjectData[]>([]);

  const behanceUrl = 'https://www.behance.net/upendradubey';

  const handleApiKeySubmit = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Firecrawl API key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const isValid = await FirecrawlService.testApiKey(apiKey);
    
    if (isValid) {
      FirecrawlService.saveApiKey(apiKey);
      setIsApiKeySet(true);
      toast({
        title: "Success",
        description: "API key validated and saved successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid API key. Please check and try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleScrape = async () => {
    setIsLoading(true);
    setProgress(0);
    setScrapedData(null);
    setProjects([]);
    
    try {
      const apiKey = FirecrawlService.getApiKey();
      if (!apiKey) {
        toast({
          title: "Error",
          description: "Please set your API key first",
          variant: "destructive",
        });
        return;
      }

      setProgress(30);
      console.log('Starting scrape for Behance portfolio:', behanceUrl);
      const result = await FirecrawlService.scrapeWebsite(behanceUrl);
      setProgress(70);
      
      if (result.success) {
        setScrapedData(result.data);
        
        // Extract project data from the scraped content
        const extractedProjects = extractProjectsFromBehance(result.data);
        setProjects(extractedProjects);
        
        toast({
          title: "Success",
          description: `Successfully scraped Behance portfolio! Found ${extractedProjects.length} projects.`,
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to scrape Behance portfolio",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error scraping Behance:', error);
      toast({
        title: "Error",
        description: "Failed to scrape Behance portfolio",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setProgress(100);
    }
  };

  const extractProjectsFromBehance = (data: any): ProjectData[] => {
    // Parse the scraped data to extract project information
    try {
      const markdown = data.markdown || '';
      const projects: ProjectData[] = [];
      
      // Basic extraction logic - this would need to be refined based on actual Behance structure
      const lines = markdown.split('\n');
      let currentProject: Partial<ProjectData> = {};
      
      for (const line of lines) {
        if (line.startsWith('# ') || line.startsWith('## ')) {
          if (currentProject.title) {
            projects.push(currentProject as ProjectData);
          }
          currentProject = {
            title: line.replace(/^#+\s/, ''),
            description: '',
            tags: []
          };
        } else if (line.includes('![') && currentProject.title) {
          // Extract image URLs
          const imageMatch = line.match(/!\[.*?\]\((.*?)\)/);
          if (imageMatch && !currentProject.imageUrl) {
            currentProject.imageUrl = imageMatch[1];
          }
        } else if (line.includes('[') && line.includes('](') && currentProject.title) {
          // Extract project URLs
          const urlMatch = line.match(/\[.*?\]\((.*?)\)/);
          if (urlMatch && !currentProject.projectUrl) {
            currentProject.projectUrl = urlMatch[1];
          }
        } else if (line.trim() && currentProject.title && !currentProject.description) {
          currentProject.description = line.trim();
        }
      }
      
      if (currentProject.title) {
        projects.push(currentProject as ProjectData);
      }
      
      return projects;
    } catch (error) {
      console.error('Error extracting projects:', error);
      return [];
    }
  };

  const downloadProjectsData = () => {
    const dataStr = JSON.stringify(projects, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'behance-projects.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!isApiKeySet) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto p-6 bg-card rounded-lg border border-border shadow-soft"
      >
        <div className="text-center mb-6">
          <Key className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Setup Firecrawl API</h3>
          <p className="text-sm text-muted-foreground">
            Enter your Firecrawl API key to scrape your Behance portfolio
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">Firecrawl API Key</Label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="fc-..."
              className="transition-all duration-200"
            />
            <p className="text-xs text-muted-foreground">
              Get your API key from{' '}
              <a 
                href="https://firecrawl.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                firecrawl.dev
              </a>
            </p>
          </div>
          
          <Button
            onClick={handleApiKeySubmit}
            disabled={isLoading || !apiKey.trim()}
            className="w-full bg-primary hover:bg-primary-hover"
          >
            {isLoading ? "Validating..." : "Save API Key"}
          </Button>
          
          <div className="mt-4 p-3 bg-secondary/50 rounded-lg border border-border/50">
            <p className="text-xs text-muted-foreground">
              💡 <strong>Recommendation:</strong> Connect this project to Supabase for better security and to store your API keys securely in Edge Function Secrets.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold mb-2">Behance Portfolio Scraper</h2>
        <p className="text-muted-foreground">
          Extract your projects from Behance to update your portfolio
        </p>
      </motion.div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Scrape Behance Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
            <span className="text-sm font-medium">Target URL:</span>
            <a 
              href={behanceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              {behanceUrl}
            </a>
          </div>
          
          {isLoading && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-xs text-center text-muted-foreground">
                Scraping your Behance portfolio...
              </p>
            </div>
          )}
          
          <Button
            onClick={handleScrape}
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary-hover"
          >
            {isLoading ? "Scraping..." : "Scrape Behance Portfolio"}
          </Button>
        </CardContent>
      </Card>

      {projects.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Extracted Projects ({projects.length})</CardTitle>
              <Button 
                onClick={downloadProjectsData}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download JSON
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-colors"
                  >
                    {project.imageUrl && (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                    )}
                    <h4 className="font-semibold mb-2">{project.title}</h4>
                    {project.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {project.description}
                      </p>
                    )}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {project.projectUrl && (
                      <a 
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <Eye className="h-3 w-3" />
                        View Project
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {scrapedData && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Raw Scraped Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-auto max-h-96">
                <pre className="text-xs">
                  {JSON.stringify(scrapedData, null, 2)}
                </pre>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};