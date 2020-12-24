import { Request, Response } from 'express';
import EmailService from '../services/EmailService'

const users = [
    {name: 'Dionison', email: 'diodev@gmail.com'}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail( {
            to: { 
                name: 'Dionison', 
                email: 'krekmg@gmail.com'},
            message: {
                subject: 'Bem vindo ao Sistema', 
                body: 'Seja-Bem-vindo'}
        });
        return res.send();
    }
};
