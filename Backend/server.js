const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PDFDocument = require('pdfkit'); 
const fs = require('fs'); 
const User = require('./human');
const Event = require('./events'); 
const Register = require('./register'); 

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use('/Register', express.static('Register'));

mongoose.connect('mongodb://localhost:27017/details')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json({ message: 'success' });
            } else {
                res.status(401).json({ message: 'Incorrect password' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error });
    }
});

app.post('/api/details/sign', (req, res) => {
    const { username, email, phn, password, cpassword } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json({ message: 'Email already exists' });
            } else {
                const newUser = new User({
                    username,
                    email,
                    phn,
                    password,
                    cpassword
                });
                newUser.save()
                    .then(() => res.json({ message: 'User registered successfully' }))
                    .catch(err => res.status(400).json({ message: 'Error: ' + err }));
            }
        })
        .catch(err => res.status(500).json({ message: 'Error: ' + err }));
});

app.get('/api/details', (req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(500).json({ message: 'Error: ' + err }));
});


app.post('/api/details/registered', (req, res) => {
    const { username, email, phn, eventname, fee, date } = req.body;
    try {
        const newRegister = new Register({
            username,
            email,
            phn,
            eventname,
            fee,
            
        });

        newRegister.save();
        res.json({ message: 'User registered for event successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error });
    }
});

app.post('/api/pdf', (req, res) => {
    const { username, email, phn, eventname, fee } = req.body;
    try {
        const doc = new PDFDocument();
        const filePath = `./Register/${eventname}.pdf`;
        doc.pipe(fs.createWriteStream(filePath));
        doc.text(`Username: ${username}`);
        doc.text(`Email: ${email}`);
        doc.text(`Phone No.: ${phn}`);
        doc.text(`Event Name: ${eventname}`);
        doc.text(`Fee: ${fee}`);
        doc.end();

      
        res.json({ pdfUrl: `http://localhost:3001/Register/${eventname}.pdf` });
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error });
    }
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
