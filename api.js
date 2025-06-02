// GET            criar
// POST           ler 
// PUT / PATCH    atualizar
// DELETE         deletar

// JSON = Javascript Object Notation

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import VendaMensal from './VendaMensal.js';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json()); // Converte em JSON

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_URI)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectDB();

// CREATE
app.post('/vendas', async (req, res) => {
    try {
        const novaVendaMensal = await VendaMensal.create(req.body);
        res.json(novaVendaMensal); 
    } catch (error) {
        res.json({ error: 'Error creating monthly sale' }); 
    }

});

// READ
app.get('/vendas', async (req, res) => {
    try {
        const vendasMensais = await VendaMensal.find();
        res.json(vendasMensais);    
    } catch (error) {
        res.json({ error: 'Error fetching monthly sales' }); 
    }
});

// UPDATE
app.put('/vendas/:id', async (req, res) => {
    try {
        const novaVendaMensal = await VendaMensal.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // Retorna o documento atualizado
        );
        res.json(novaVendaMensal);
    } catch (error) {
        res.json({ error: 'Error updating monthly sale' });
    }
});
    
// DELETE
app.delete("/vendas/:id", async (req, res) => {
    try {
        const vendaMensalExcluida = await VendaMensal.findByIdAndDelete(
            req.params.id
        );
        res.json(vendaMensalExcluida);
    } catch (error) {
        res.json({ error: error });
    }
});

app.listen(3000, () => console.log(`Server is running on port ${PORT}`));
      