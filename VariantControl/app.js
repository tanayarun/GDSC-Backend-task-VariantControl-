const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const attributeRoutes = require('./routes/attributeRoutes');
const variantRoutes = require('./routes/variantRoutes');

const app = express();
const uri = "mongodb+srv://TANAY:3HogVdyueYQRrGUn@cluster0.zyaknmx.mongodb.net/?retryWrites=true&w=majority"; 

app.use(bodyParser.json());


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        
        
        app.get('/', (req, res) => {
            res.send('Welcome to the product variant management system By Tanay');
        });

        app.use('/products', productRoutes);
        app.use('/attributes', attributeRoutes);
        app.use('/variants', variantRoutes);

        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); 
    });