import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './style/QR.css';
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

function QRCodePage() {
  const location = useLocation();
  const [registrationInfo, setRegistrationInfo] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
  
    if (location.state && location.state.registrationData) {
      setRegistrationInfo(location.state.registrationData);
    }
  }, [location]);

  useEffect(() => {
    if (registrationInfo) {
      generatePDF(registrationInfo);
    }
  }, [registrationInfo]);

  const generatePDF = async (registrationData) => {
    try {
      const response = await fetch('http://localhost:3001/api/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      const data = await response.json();
      setPdfUrl(data.pdfUrl); 
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="qr-code-page">
      <Navigation/>
      {registrationInfo && (
        <div className="qr-code-container">
          <div className="qr-code">
            <QRCode value={pdfUrl} />
          </div>
          <div className="registration-info">
           
            <p>Username: {registrationInfo.username}</p>
            <p>Email: {registrationInfo.email}</p>
            <p>Phone No.: {registrationInfo.phn}</p>
            <p>Event Name: {registrationInfo.eventname}</p>
            <p>Fee: {registrationInfo.fee}</p>
          </div>
        </div>
      )}
      <button className="close-button" onClick={() => navigate(`/Homepage`)}>Close</button>
    </div>
  );
  

}

export default QRCodePage;
