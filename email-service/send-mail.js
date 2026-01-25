require("dotenv").config();
const express = require("express");
const http = require("http");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Body Parser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Environment Variables
const PORT = process.env.PORT || 3000;
// const SMTP_HOST = process.env.SMTP_HOST || "smtpout.secureserver.net"; // Default GoDaddy host
const SMTP_PORT = process.env.SMTP_PORT || 465;
const SMTP_SERVICE = process.env.SMTP_SERVICE;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SEND_MAIL_TO = process.env.SEND_MAIL_TO;
const DEV_EMAIL = process.env.DEV_EMAIL; // Developer email for error notifications

const transporter = nodemailer.createTransport({
  service: SMTP_SERVICE,
  port: SMTP_PORT,
  secure: false, // Must be false for port 587
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

app.get("/", (req, res) => {
  res.send("Email server is running!");
});

// POST API: Inquiry Mail Send
app.post("/inquiry/mail/send", async (req, res) => {
  const { name, address, mobile, email, message } = req.body;

  // Email content for the admin
  const mailOptions = {
    from: SMTP_USER,
    to: SEND_MAIL_TO,
    replyTo: email,
    subject: `New Inquiry from ${name}`,
    html: `
      <h3>New Inquiry Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[SUCCESS] Mail sent successfully to ${SEND_MAIL_TO}`);
  } catch (error) {
    // Log error so PM2 captures it
    console.error(`[ERROR] Failed to send mail: ${error.message}`);
    console.error(error);

    // Notify Developer on personal email about the failure
    if (DEV_EMAIL) {
      try {
        await transporter.sendMail({
          from: SMTP_USER,
          to: DEV_EMAIL,
          subject: "ALERT: Email Service Failure",
          text: `An error occurred while sending an inquiry email.\n\nError: ${
            error.message
          }\n\nPayload: ${JSON.stringify(req.body, null, 2)}`,
        });
        console.log(`[INFO] Developer notified of error at ${DEV_EMAIL}`);
      } catch (devErr) {
        console.error(`[CRITICAL] Failed to notify developer: ${devErr.message}`);
      }
    }

    // Return success to client as requested, even if email failed
  }
  return res.status(200).json({ message: "Mail sent successfully" });
});

const server = http.createServer(app);

// Start Server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
