const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.post("/send-email", async (req, res) => {
    const { name, email, phone } = req.body;

    // Create a transporter with your SMTP configuration (e.g., Gmail)
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "your_email@gmail.com", // Your email address
            pass: "your_password", // Your email password or an app-specific password
        },
    });

    // Email data
    const mailOptions = {
        from: "liatyoga@gmail.com", // Sender's email address
        to: "liatyoga@gmail.com", // Recipient's email address
        subject: "New contact form submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send email" });
    }
});

app.use(express.static("build"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
