import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page section container" style={{ padding: '4rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <Helmet>
        <title>Privacy Policy | Eazzio Technologies</title>
        <meta name="description" content="Privacy Policy for Eazzio Technologies." />
      </Helmet>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Privacy Policy</h1>
      <div style={{ lineHeight: '1.8', color: 'var(--color-text)' }}>
        <p style={{ marginBottom: '1rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
        <p style={{ marginBottom: '1.5rem' }}>
          At Eazzio Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our business software solutions.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>Information We Collect</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products, when you participate in activities on the website, or otherwise when you contact us.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>How We Use Your Information</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We use the information we collect or receive to provide, operate, and maintain our website, improve, personalize, and expand our website, understand and analyze how you use our website, and develop new products, services, features, and functionality.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>Contact Us</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          If you have questions or comments about this Privacy Policy, please contact us at eazziogroup@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
