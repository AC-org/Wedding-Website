import React, { useState } from 'react';
import supabase from '../supabaseClient';
import './RSVP.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';

function RSVP() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [hasAllergies, setHasAllergies] = useState(false);
  const [allergies, setAllergies] = useState('');
  const [attending, setAttending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the data to be sent
    console.log('Submitting RSVP with:', { email, name, text, attending, hasAllergies, allergies });

    try {
      const { data, error } = await supabase
        .from('rsvp')
        .insert([{ name, email, text, attending, has_allergies: hasAllergies, allergies }]);

      if (error) {
        throw error;
      }

      // If successful, log the data and set the submitted state
      console.log('RSVP submitted successfully:', data);
      setSubmitted(true);
      setErrorMessage(''); // Clear any previous error message

    } catch (error) {
      // Log the error and show an error message to the user
      console.error('Error submitting RSVP:', error);
      setErrorMessage('There was an issue submitting your RSVP. Please try again.');
    }
  };

  return (
    <div className="rsvp-wrapper">
      <div className="rsvp-container">
        <Navbar />

        <div className="rsvp-card">
        {!submitted ? (
          <>
            <h1 className="rsvp-title">O S A</h1>
            <p className="rsvp-subtitle">Vi är så redo att fira med er! </p>
            <p className="rsvp-subtitle">OSA i detta formulär innan 1/5-2026. En OSA per person!</p>
            <form onSubmit={handleSubmit} className="rsvp-form">
              <input
                type="text"
                placeholder="Namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rsvp-input"
              />
              <input
                type="email"
                placeholder="Mailadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rsvp-input"
              />
              <div className="rsvp-checkbox-container">
                <label className="rsvp-checkbox-label">
                  Allergier
                  <input
                    type="checkbox"
                    checked={hasAllergies}
                    onChange={(e) => setHasAllergies(e.target.checked)}
                    className="rsvp-checkbox"
                  />
                </label>
              </div>
              <input
                type="text"
                placeholder="Ange allergier"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                className="rsvp-input"
                disabled={!hasAllergies}
              />
              <input
                type="text"
                placeholder="Text (frivilligt)"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="rsvp-input"
              />
              <div className="rsvp-checkbox-container">
                <label className="rsvp-checkbox-label">
                  Jag kommer:
                  <input
                    type="checkbox"
                    checked={attending}
                    onChange={(e) => setAttending(e.target.checked)}
                    className="rsvp-checkbox"
                  />
                </label>
              </div>
              <button type="submit" className="rsvp-button">Skicka</button>
            </form>
            {errorMessage && <p className="rsvp-error-message">{errorMessage}</p>}
          </>
        ) : (
          <p className="rsvp-success-message">Tack, hoppas vi ses i augusti!!</p>
        )}
        </div>
      </div>

      <CountdownFooter />
    </div>
  );
}

export default RSVP;