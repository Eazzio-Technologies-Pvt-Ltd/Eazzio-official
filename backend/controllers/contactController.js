const { sendEmail } = require('../utils/sendEmail');
const { saveLead } = require('../services/leadService');

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

    const submissionDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

    // Optional: Save to Database (Stub)
    await saveLead({
      name,
      email,
      phone,
      company_name: company,
      product_interested: product,
      message,
      created_at: new Date()
    });

    // Compose email content
    const emailSubject = `New Contact Inquiry from ${name} - ${company || 'Individual'}`;
    const emailBody = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h3 style="color: #00d790; border-bottom: 2px solid #0f172a; padding-bottom: 10px;">New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Product of Interest:</strong> ${product || 'Not provided'}</p>
        <p><strong>Submitted At:</strong> ${submissionDate}</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <h4 style="margin-bottom: 10px;">Message:</h4>
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px;">
          <p style="margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      </div>
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
