const { sendEmail } = require('../utils/sendEmail');

const handleContactSubmit = async (req, res) => {
  try {
    const { name, email, phone, company, product, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required fields.' 
      });
    }

    // Compose email content
    const emailSubject = `New Contact Inquiry from ${name} - ${company || 'Individual'}`;
    const emailBody = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Product of Interest:</strong> ${product || 'Not provided'}</p>
      <hr />
      <h4>Message:</h4>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    // Send email using utility function
    await sendEmail({
      to: process.env.TO_EMAIL, // Company's receiving email
      subject: emailSubject,
      html: emailBody,
      replyTo: email
    });

    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully.' 
    });

  } catch (error) {
    console.error('Error in handleContactSubmit:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
};

module.exports = {
  handleContactSubmit
};
