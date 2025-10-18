"use client"

import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { ExternalLink, Calendar, Target, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgBeautyBusinessForum from '../../my materials/Portfolio/beauty_business_forum.webp';
import imgTattooArtistPortfolio from '../../my materials/Portfolio/Tattoo_Artist_Portfolio.webp';
import imgAIMusicPlatform from '../../my materials/Portfolio/AI_Music_Platform.webp';
import imgSketchArtistPortfolio from '../../my materials/Portfolio/Sketch_Artist_Portfolio.webp';
import imgStartupLandingPage from '../../my materials/Portfolio/Startup_Landing_Page.webp';
import imgEcommerceFashionStore from '../../my materials/Portfolio/E-commerce_Fashion_Store.webp';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

interface Project {
  id: number;
  caption: string;
  metric: string;
  category: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image?: string;
}

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [api, setApi] = useState<CarouselApi>();

  const projects: Project[] = [
    {
      id: 1,
      caption: "Beauty Business Forum",
      metric: "350+ active members",
      category: "Forum",
      duration: "4 months",
      description: "Modern community forum platform for beauty professionals with discussion boards, networking features, and business resources.",
      challenge: "Beauty professionals needed a dedicated platform to connect and share knowledge. Existing solutions were too generic for their specific needs.",
      solution: "Built a custom forum platform with specialized features for the beauty industry including portfolios, business tools, and discussion boards.",
      results: ["350+ active members", "Daily user engagement", "Positive community feedback", "Growing member base"],
      technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "AWS"],
      image: imgBeautyBusinessForum
    },
    {
      id: 2,
      caption: "Tattoo Artist Portfolio",
      metric: "25% more bookings",
      category: "Portfolio",
      duration: "3 weeks",
      description: "Professional portfolio website for a tattoo artist showcasing their work with a clean gallery and easy booking system.",
      challenge: "The artist needed a professional online presence to showcase their portfolio and streamline the booking process for new clients.",
      solution: "Created a visually striking portfolio with high-quality image galleries, artist bio, and integrated booking form for consultations.",
      results: ["25% increase in bookings", "Better client engagement", "Professional online presence", "Easy appointment scheduling"],
      technologies: ["React", "Next.js", "Image Optimization", "Contact Forms"],
      image: imgTattooArtistPortfolio
    },
    {
      id: 3,
      caption: "AI Music Platform",
      metric: "180+ beta users",
      category: "AI/Music",
      duration: "6 weeks",
      description: "Interactive landing page for an AI-powered music creation platform with demo features and user onboarding.",
      challenge: "The platform needed to explain complex AI music technology in a simple, engaging way while collecting beta signups.",
      solution: "Designed an interactive landing page with live demos, clear value proposition, and streamlined signup flow for beta access.",
      results: ["180+ beta signups", "Interactive demo engagement", "Clear product communication", "Growing waitlist"],
      technologies: ["React", "Motion", "Audio Integration", "Email Automation"],
      image: imgAIMusicPlatform
    },
    {
      id: 4,
      caption: "Sketch Artist Portfolio",
      metric: "40+ commission requests",
      category: "Portfolio",
      duration: "2 weeks",
      description: "Elegant portfolio website for a sketch artist featuring artwork gallery, commission info, and contact system.",
      challenge: "The artist wanted to showcase their sketch work professionally and make it easier for potential clients to request commissions.",
      solution: "Built a clean, image-focused portfolio with organized galleries, commission pricing details, and simple inquiry form.",
      results: ["40+ commission requests", "Professional presentation", "Organized portfolio display", "Easy client contact"],
      technologies: ["React", "Image Gallery", "Lightbox", "Contact Forms"],
      image: imgSketchArtistPortfolio
    },
    {
      id: 6,
      caption: "Relax Studio",
      metric: "250+ email signups",
      category: "Startup",
      duration: "3 weeks",
      description: "Modern landing page for a tech startup to validate their idea and collect early interest from potential users.",
      challenge: "The startup needed to test market interest and build an early user base before full product development.",
      solution: "Developed a compelling landing page explaining the product value proposition with email capture for early access.",
      results: ["250+ email signups", "Product validation feedback", "Early adopter interest", "Market research data"],
      technologies: ["React", "Email Integration", "Analytics", "A/B Testing"],
      image: imgStartupLandingPage
    },
    {
      id: 7,
      caption: "Sierra Detail",
      metric: "120+ monthly orders",
      category: "E-commerce",
      duration: "5 weeks",
      description: "Clean online store for a boutique fashion brand with product catalog, shopping cart, and checkout integration.",
      challenge: "A local fashion boutique wanted to expand online but needed a simple, elegant e-commerce solution that matched their brand aesthetic.",
      solution: "Built a streamlined e-commerce website with beautiful product galleries, easy navigation, and secure payment processing.",
      results: ["120+ monthly orders", "Smooth checkout experience", "Mobile-friendly shopping", "Growing customer base"],
      technologies: ["React", "Stripe", "Product Management", "Payment Gateway"],
      image: imgEcommerceFashionStore
    }
  ];

  return (
    <section className="Work/Container py-16 lg:py-24 bg-background">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-section mb-4">
            Our Work Speaks
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore our portfolio of successful projects that transformed businesses and delivered measurable results.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-12 lg:mb-16 px-0 lg:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              skipSnaps: false,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4 lg:-ml-6">
              {projects.map((project) => (
                <CarouselItem 
                  key={project.id}
                  className="pl-4 lg:pl-6 basis-full sm:basis-[85%] md:basis-[60%] lg:basis-1/2"
                >
                  <div
                    className="bg-elevated rounded-soft overflow-hidden border-2 border-border hover:border-brand transition-all duration-200 cursor-pointer group/card h-full"
                    style={{ boxShadow: 'var(--shadow-soft)' }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image */}
                    <div className="aspect-video bg-surface relative overflow-hidden">
                      {project.image ? (
                        <>
                          <ImageWithFallback 
                            src={project.image}
                            alt={project.caption}
                            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300"></div>
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-surface to-brand-light flex items-center justify-center group-hover/card:scale-105 transition-transform duration-300">
                            <div className="text-text-tertiary font-mono uppercase tracking-wider">{project.category}</div>
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300"></div>
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 lg:p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-2 mb-3">
                        <Badge 
                          variant="secondary" 
                          className="bg-surface text-text-primary border border-border font-mono uppercase tracking-wider"
                        >
                          {project.category}
                        </Badge>
                        <span className="text-xs text-text-tertiary font-mono">{project.duration}</span>
                      </div>

                      {/* Title */}
                      <h3 className="heading-small text-text-primary mb-2 group-hover/card:text-brand transition-colors duration-200">
                        {project.caption}
                      </h3>

                      {/* Metric */}
                      <p className="text-brand mb-4 font-mono">
                        {project.metric}
                      </p>

                      {/* CTA */}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-0 h-auto text-text-primary hover:text-brand font-mono uppercase tracking-wider transition-colors duration-200"
                      >
                        Read More <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows - Premium styling */}
            <button
              onClick={() => api?.scrollPrev()}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-border hover:bg-accent-dark hover:text-white hover:border-accent-dark transition-all duration-200 rounded-soft items-center justify-center z-20"
              style={{ boxShadow: 'var(--shadow-soft)' }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-border hover:bg-accent-dark hover:text-white hover:border-accent-dark transition-all duration-200 rounded-soft items-center justify-center z-20"
              style={{ boxShadow: 'var(--shadow-soft)' }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </Carousel>

          {/* Mobile hint */}
          <p className="text-center text-xs text-text-tertiary mt-6 lg:hidden font-mono uppercase tracking-wider">
            Swipe to explore
          </p>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-elevated border-2 border-border rounded-soft">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge 
                    variant="secondary"
                    className="bg-surface text-text-primary border border-border font-mono uppercase tracking-wider"
                  >
                    {selectedProject.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-text-tertiary font-mono">
                    <Calendar className="h-4 w-4" />
                    {selectedProject.duration}
                  </div>
                </div>
                <DialogTitle className="heading-sub text-text-primary">{selectedProject.caption}</DialogTitle>
                <DialogDescription className="text-text-secondary">
                  Detailed case study for {selectedProject.caption} - {selectedProject.metric}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Project Image */}
                {selectedProject.image && (
                  <div className="rounded-soft overflow-hidden border-2 border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
                    <ImageWithFallback 
                      src={selectedProject.image}
                      alt={selectedProject.caption}
                      className="w-full h-auto aspect-video object-cover"
                    />
                  </div>
                )}

                {/* Hero Metric */}
                <div className="bg-surface rounded-soft p-6 border-2 border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-brand" />
                    <span className="heading-small text-text-primary">Key Result</span>
                  </div>
                  <p className="text-brand font-mono">{selectedProject.metric}</p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="heading-small text-text-primary mb-3">Project Overview</h3>
                  <p className="text-text-secondary leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-surface rounded-soft p-5 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="h-5 w-5 text-danger" />
                      <h3 className="heading-small text-text-primary">Challenge</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div className="bg-surface rounded-soft p-5 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-brand" />
                      <h3 className="heading-small text-text-primary">Solution</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="heading-small text-text-primary mb-3">Results Achieved</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand square"></div>
                        <span className="text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="heading-small text-text-primary mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="bg-elevated border-border font-mono uppercase tracking-wider"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
