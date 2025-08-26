"use client";

import { useEffect, useState } from "react";

const CaminoEasterEgg = () => {
  const [keySequence, setKeySequence] = useState<string>("");
  const [showMessage, setShowMessage] = useState(false);
  const targetSequence = "CAMINO";

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      
      setKeySequence((prev) => {
        const newSequence = (prev + key).slice(-targetSequence.length);
        
        if (newSequence === targetSequence) {
          setShowMessage(true);
          return "";
        }
        
        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  if (!showMessage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
      onClick={() => setShowMessage(false)}
    >
      <div 
        className="relative max-w-2xl mx-4 p-8 bg-background rounded-xl border border-accent/30 shadow-2xl shadow-accent/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowMessage(false)}
          className="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors text-lg"
        >
          ✕
        </button>
        
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-light tracking-tight text-foreground">
              Yo <span className="text-accent font-medium">Sean</span> 👋
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>
          
          <div className="bg-foreground/[0.02] rounded-lg p-6 border border-foreground/10">
            <p className="text-foreground/80 leading-relaxed font-light">
              Comme je t'ai dit, j'ai envie de taffer chez <span className="font-medium text-accent">Camino</span> depuis 2018 mais j'étais manutentionnaire.. Mais là! Je suis développeur web depuis 2 ans et je suis prêt à rejoindre l'aventure Camino TV.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light mt-4">
              Je suis d'accord ce que t'as dit sur le live de vendredi, sur la notion de communication qu'il faut avoir dans la vie et pas seulement au travail & de vivre l'aventure avec des reufs. <br /> Hâte de partager ensemble ✈️
            </p>
            <p className="text-accent font-medium mt-4 text-center">
              LONGUE VIE À NOUS TOUS !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaminoEasterEgg;