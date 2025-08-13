import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Palette, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Rayan Bellil - Frontend Developer"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary-glow/50 shadow-glow animate-glow-pulse"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center shadow-elegant">
                <Code2 size={16} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight">
            Rayan Bellil
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Frontend Developer & Digital Craftsman
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, responsive web experiences that bring ideas to life. 
            I blend creativity with clean code to build user interfaces that are both functional and visually stunning.
          </p>

          {/* Skills Icons */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                <Code2 className="text-primary" size={24} />
              </div>
              <span className="text-sm text-muted-foreground">Clean Code</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                <Palette className="text-primary" size={24} />
              </div>
              <span className="text-sm text-muted-foreground">UI/UX Design</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                <Zap className="text-primary" size={24} />
              </div>
              <span className="text-sm text-muted-foreground">Performance</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            View My Projects
            <ArrowRight className="ml-2" size={20} />
          </Button>

          {/* Bottom text */}
          <p className="text-sm text-muted-foreground/60 mt-8">
            Let's build something amazing together
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;