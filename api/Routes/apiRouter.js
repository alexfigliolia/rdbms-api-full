import express from 'express';
import postRoutes from './postRoutes';
import tagRoutes from './tagRoutes';
import userRoutes from './userRoutes';

const api = express.Router();

api.use('/users', userRoutes);
api.use('/posts', postRoutes);
api.use('/tags', tagRoutes);

export default api;