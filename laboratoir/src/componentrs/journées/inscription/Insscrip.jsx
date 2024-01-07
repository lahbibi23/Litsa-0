import { useState } from 'react';
import Navig from '../../navigation/Navig';
import './insscrip.css';
import { useDropzone } from 'react-dropzone';
import { useForm, ValidationError } from '@formspree/react';

function Insscrip() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [theme, setTheme] = useState('');
  const [communicationMethod, setCommunicationMethod] = useState('');
  const [email, setEmail] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [state, handleSubmitFormspree] = useForm("xgegeqpj")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
  
  const onDrop = (acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('theme', theme);
    formData.append('communicationMethod', communicationMethod);
    formData.append('email', email);
    selectedFiles.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    try {
      const response = await handleSubmitFormspree(e);

      if (response.ok) {
        setSubmissionMessage('Votre formulaire a été soumis avec succès !');
        console.log('Formulaire envoyé avec succès !');
        // Réinitialiser les champs et les fichiers sélectionnés après l'envoi du formulaire
        setFullName('');
        setPhoneNumber('');
        setTheme('');
        setCommunicationMethod('');
        setEmail('');
        setSelectedFiles([]);
      } else {
        setSubmissionMessage('Erreur lors de la soumission du formulaire. Veuillez réessayer.');
      }
    } catch (error) {
      setSubmissionMessage('Erreur lors de la soumission du formulaire. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <Navig />
      <section className="contact-us border ">
        <h1 className="title">
          <span className="icon-envelope"></span>
          Inscription
        </h1>

        <p className="sub-title border ">
          Contact us for more information and get notified when I publish something new.
        </p>

        <form className="form border " onSubmit={handleSubmit}>
          <div className="form-field border">
            <label htmlFor="fullName">Full Name:</label>
            <input autoComplete="off" required type="text" name="fullName" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" />
          </div>
          <div className="form-field border">
            <label htmlFor="phoneNumber">Numéro de téléphone:</label>
            <input required type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="0123456789" />
          </div>
          <div className="form-checkbox border">
            <div style={{ fontWeight: 'bold' }}>Thème</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label htmlFor="theme1">Theme 1</label>
              <input type="radio" id="theme1" name="theme" value="Theme 1" onChange={(e) => setTheme(e.target.value)} />
              <label htmlFor="theme2">Theme 2</label>
              <input type="radio" id="theme2" name="theme" value="Theme 2" onChange={(e) => setTheme(e.target.value)} />
              <label htmlFor="theme3">Theme 3</label>
              <input type="radio" id="theme3" name="theme" value="Theme 3" onChange={(e) => setTheme(e.target.value)} />
            </div>
          </div>
          <div className="form-checkbox border">
            <div style={{ fontWeight: 'bold' }}>Communication</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label htmlFor="oral">Orale</label>
              <input type="radio" id="oral" name="communicationMethod" value="Orale" onChange={(e) => setCommunicationMethod(e.target.value)} />
              <label htmlFor="display">Affichage</label>
              <input type="radio" id="display" name="communicationMethod" value="Affichage" onChange={(e) => setCommunicationMethod(e.target.value)} />
            </div>
          </div>
          <div className="form-field border">
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" required type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com" />
          </div>
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          <div className="flex fichier border">
            <span>
              <h3>Fichier à soumettre</h3>
            </span>
            <div {...getRootProps()} className="dropzone border">
              <input {...getInputProps()} />
              <button type="button" className="submit">Cliquez ici pour sélectionner des fichiers</button>
            </div>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>

          {submissionMessage && <p>{submissionMessage}</p>}
          {submissionMessage === 'Votre formulaire a été soumis avec succès !' && (
            <p style={{ color: 'green' }}>Merci ! Votre formulaire a été soumis avec succès.</p>
          )}
        </form>
      </section>
    </div>
  );
}

export default Insscrip;
