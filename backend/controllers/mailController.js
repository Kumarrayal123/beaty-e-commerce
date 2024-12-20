import nodemailer from 'nodemailer';

export const sendMail = async (req, res) => {
    try {
        const { email, subject, html } = req.body;
    
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "singhrohit44164@gmail.com",
            pass: "lmjd uuyy lrzo vymu",
        },
        });
    
        const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject,
        html,
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ success: false, message: error.message });
        } else {
            res.json({ success: true, message: 'Email sent: ' + info.response });
        }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
    };
