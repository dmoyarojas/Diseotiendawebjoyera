"use client";
import * as React from 'react';
import { Button } from "./ui/button"; 
import { ArrowUp } from 'lucide-react';



function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  // Lógica para mostrar/ocultar el botón
  const toggleVisibility = React.useCallback(() => {
    // Si el usuario ha bajado más de 300px se muestra el boton
    if (window.scrollY > 550) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);
//  Lógica para subir al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

// Añadir y limpiar el listener al montar el componente
  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

return (
    <Button
      data-slot="scroll-to-top"
      variant="default" 
      size="icon" 
      onClick={scrollToTop}
      
      className={`fixed bottom-8 left-10 z-50 transition-opacity duration-300 size-14 rounded-full ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-label="Volver arriba"
      disabled={!isVisible} 
    >
      <ArrowUp className="size-10" />
      
    </Button>
  );



}


export default ScrollToTopButton;