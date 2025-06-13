/*import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
iport Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [visibleCertificate, setVisibleCertificate] = useState(null);

  const toggleReadMore = (s_no) => {
    if (expandedService === s_no) {
      setExpandedService(null);
    } else {
      setExpandedService(s_no);
    }
  };

  const toggleCertificate = (s_no) => {
    if (visibleCertificate === s_no) {
      setVisibleCertificate(null);
    } else {
      setVisibleCertificate(s_no);
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="Decorative pattern for the section" />
      </div>
      <div className="services-container">
        {Services_Data.map((service) => (
          <article key={service.s_no} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>

            <div
              className="view-certificate-btn"
              onClick={() => toggleCertificate(service.s_no)}
              style={{ cursor: 'pointer', marginTop: '10px', color: '#007bff', textDecoration: 'underline' }}
            >
              {visibleCertificate === service.s_no ? 'Hide Certificate' : 'View Certificate'}
            </div>

         
            {visibleCertificate === service.s_no && service.certificate && (
              <div className="certificate-image" style={{ marginTop: '10px' }}>
                <img
                  src={service.certificate}
                  alt={`${service.s_name} Certificate`}
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}
                />
              </div>
            )}

            {expandedService === service.s_no && (
              <p className="expanded-desc" style={{ marginTop: '10px' }}>{service.s_full_desc}</p>
            )}

          
            <div
              className="services-readmore"
              onClick={() => toggleReadMore(service.s_no)}
              style={{ cursor: 'pointer', marginTop: '10px', display: 'flex', alignItems: 'center' }}
            >
              <p style={{ margin: 0 }}>{expandedService === service.s_no ? 'Read Less' : 'Read More'}</p>
              <img
                src={arrow_icon}
                alt="Arrow icon indicating more content"
                style={{ marginLeft: '5px', transform: expandedService === service.s_no ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

*/
         import React, { useState, useRef } from 'react';
import './Services.css';
/* import theme_pattern from '../../assets/theme_pattern.svg'; */
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [modalCertificate, setModalCertificate] = useState(null);
  const sectionRef = useRef(null);

  const openCertificateModal = (certificate) => {
    setModalCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setModalCertificate(null);
  };

  const toggleShow = () => {
    if (showAll && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay allows DOM to update first
    }
    setShowAll(!showAll);
  };

  const servicesToShow = showAll ? Services_Data : Services_Data.slice(0, 3);

  return (
    <section id="certifications" className="services" ref={sectionRef}>
      <div className="services-title">
        <h1>Certifications</h1>
       {/*  <img src={theme_pattern} alt="Decorative pattern" /> */}
      </div>

      <div className="services-container">
        {servicesToShow.map((service) => (
          <article key={service.s_no} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>

            <button
              className="view-certificate-btn"
              onClick={() => openCertificateModal(service.certificate)}
              style={{ marginTop: '10px', cursor: 'pointer' }}
            >
              View Certificate
            </button>
          </article>
        ))}
      </div>

      <div className="services-showmore" onClick={toggleShow} style={{ cursor: 'pointer' }}>
        <p>{showAll ? 'Show Less' : 'Show More'}</p>
        <img
          src={arrow_icon}
          alt="Arrow Icon"
          style={{
            transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>

      {modalCertificate && (
        <div
          className="modal-overlay"
          onClick={closeCertificateModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <img
            src={modalCertificate}
            alt="Certificate Fullscreen"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(255,255,255,0.6)',
              cursor: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Services;
