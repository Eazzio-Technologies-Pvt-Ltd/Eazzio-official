import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsAndConditions = () => {
  return (
    <div className="policy-page section container" style={{ padding: '4rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <Helmet>
        <title>Terms & Conditions | Eazzio Technologies</title>
        <meta name="description" content="Terms and Conditions for Eazzio Technologies." />
      </Helmet>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Terms & Conditions</h1>
      <div style={{ lineHeight: '1.8', color: 'var(--color-text)' }}>
        <p style={{ marginBottom: '1rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
        <p style={{ marginBottom: '1.5rem' }}>
          Please read these terms and conditions carefully before using our service. By accessing or using the Eazzio Technologies website and software solutions, you agree to be bound by these terms.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>Intellectual Property</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          The Service and its original content, features, and functionality are and will remain the exclusive property of Eazzio Technologies and its licensors. The Service is protected by copyright, trademark, and other laws.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>Links To Other Web Sites</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Eazzio Technologies. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>Changes</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
