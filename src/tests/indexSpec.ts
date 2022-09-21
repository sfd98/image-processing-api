import supertest from 'supertest';
import fs from "fs";
import app from '../index';


const request = supertest(app);

describe('Test endpoint responses', () => {
    
    it('gets the main api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    }),

    it('gets the api/convert endpoint', async () => {
        const response = await request.get('/api/convert');
        expect(response.status).toBe(200);
    });
    
});

describe("Test image processing", () => {
    it("inputs new file into thumb folder", () => {
        expect()
    })
})