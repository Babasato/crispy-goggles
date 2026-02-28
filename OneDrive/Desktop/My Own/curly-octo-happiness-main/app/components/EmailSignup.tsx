"use client";

import { useState } from 'react';

// Define the props interface HERE instead of importing a broken one
interface EmailSignupProps {
  onSignup: (email: string) => void;
  isLoading?: boolean;
  language?: string;
  getMoreText?: string;
  signupText?: string;
  appearance?: 'light' | 'dark';
}

export default function EmailSignup({ 
  onSignup, 
  isLoading = false, 
  language = 'en', 
  getMoreText = "Get more worksheets", 
  signupText = "Sign up for unlimited access", 
  appearance = 'light' 
}: EmailSignupProps) {
  const [email, setEmail] = useState('');

  const translations = {
    en: {
      placeholder: "Enter your email",
      button: "Sign Up Free",
      signingUp: "Signing Up...",
      privacy: "We respect your privacy. Unsubscribe at any time."
    },
    fr: {
      placeholder: "Entrez votre email",
      button: "Inscription Gratuite",
      signingUp: "Inscription...",
      privacy: "Nous respectons votre vie privée. Désabonnez-vous à tout moment."
    },
    de: {
      placeholder: "Geben Sie Ihre E-Mail ein",
      button: "Kostenlos Anmelden",
      signingUp: "Anmeldung...",
      privacy: "Wir respektieren Ihre Privatsphäre. Jederzeit abbestellbar."
    },
    es: {
      placeholder: "Ingrese su correo electrónico",
      button: "Regístrese Gratis",
      signingUp: "Registrando...",
      privacy: "Respetamos su privacidad. Cancela la suscripción en cualquier momento."
    },
    it: {
      placeholder: "Inserisci la tua email",
      button: "Registrati Gratuitamente",
      signingUp: "Registrazione...",
      privacy: "Rispettiamo la tua privacy. Annulla l'iscrizione in qualsiasi momento."
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(email);
    setEmail('');
  };

  return (
    <div className={`email-signup email-signup--${appearance}`}>
      <div className="signup-content">
        <h3>{getMoreText}</h3>
        <p>{signupText}</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder={t.placeholder} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? t.signingUp : t.button}
          </button>
        </form>
        <div className="privacy-note">
          {t.privacy}
        </div>
      </div>
    </div>
  );
}