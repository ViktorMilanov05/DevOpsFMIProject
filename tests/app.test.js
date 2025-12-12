import request from 'supertest';
import app from '../app.js';

describe('GET /hello', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('GET /big', () => {
  it('should return HTML Hello World', async () => {
    const response = await request(app).get('/big');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('<h1>Hello World!</h1>');
  });
});

describe('GET /json', () => {
  it('should return JSON', async () => {
    const response = await request(app).get('/json');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('{"name" : "Nandini"}');
  });
});

describe('GET /json', () => {
  it('should return JSON', async () => {
    const response = await request(app).get('/json');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('{"name" : "Nandini"}');
  });
});

describe('GET /greeting/:id', () => {
  it('should return greeting with the id', async () => {
    const response = await request(app).get('/greeting/John');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello! The id provided was John.');
  });
});

describe('GET /yo/:buddy', () => {
  it('should return Yo message with buddy name', async () => {
    const response = await request(app).get('/yo/Dr.Rogers');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('<h1>Yo, Dr.Rogers!</h1>');
  });
});

describe('GET /fancy', () => {
  it('should return fancy greeting', async () => {
    const response = await request(app).get('/fancy?first=Denise&last=Case');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello Denise Case!');
  });
});

describe('GET /fortune', () => {
  it('should return prompt if no query', async () => {
    const response = await request(app).get('/fortune');
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch(/You wish to know the future\?/);
  });

  it('should return a fortune if question is provided', async () => {
    const response = await request(app).get('/fortune?Will I be rich?');
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch(/The answer is/);
  });
});

describe('GET unknown route', () => {
  it('should return 404', async () => {
    const response = await request(app).get('/unknown');
    expect(response.statusCode).toBe(404);
    expect(response.text).toMatch(/status 404/);
  });
});

