import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss'; 

export function Login() {
  const [email, setEmail] = useState('');
  const [adgangskode, setAdgangskode] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      alert('Indtast en gyldig emailadresse');
      return;
    }

    if (adgangskode.length < 6) {
      alert('Adgangskoden skal være mindst 6 tegn');
      return;
    }

    alert('Du er nu logget ind!');
    console.log({ email, adgangskode });
  };

  const handleAnnuller = () => {
    setEmail('');
    setAdgangskode('');
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Indtast din email"
          />
        </div>

        <div className="form-group">
          <label>Adgangskode</label>
          <input
            type="password"
            value={adgangskode}
            onChange={(e) => setAdgangskode(e.target.value)}
            required
            placeholder="Indtast adgangskode"
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn btn-login">
            Login
          </button>
          <button type="button" onClick={handleAnnuller} className="btn btn-cancel">
            Annuller
          </button>
        </div>

        <p className="register-text">
          Har du ikke en profil?{' '}
          <Link to="/opret" className="link">
            Opret en her
          </Link>
        </p>
      </form>
    </div>
  );
}
