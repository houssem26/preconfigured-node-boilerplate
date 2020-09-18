const request = require('supertest')
const app = require('../app')
const db = require('../db')

describe('Post workflow', () => {
    it('should create a new workflow', async () => {
      const res = await request(app)
        .post('/workflow')
        .send({
            name:'first workflow',
            categories: [1],
            status: 2,
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('id')
    });
    it('should not create a new workflow with no category', async () => {
        const res = await request(app)
          .post('/workflow')
          .send({
              name:'second workflow',
          })
        expect(res.statusCode).not.toEqual(200)
      });
    it('should create a new category with variants', async () => {
        const res = await request(app)
          .post('/workflow')
          .send({
              name:'second workflow',
              variants: [1],
              categories: [1],
              status: 2,
          })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('id')
      });
  })
  describe('filter workflow', () => {
    it('should filter categories by name', async () => {
      const res = await request(app)
        .get('/workflow/filter')
        .query({
          name: 'second',
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toEqual(1)
    });
    it('should filter workflows by status', async () => {
      const res = await request(app)
        .get('/workflow/filter')
        .query({
          status: 2,
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toEqual(2)
    });
    it('should filter workflows by category', async () => {
      const res = await request(app)
        .get('/workflow/filter')
        .query({
          categories: [1,1],
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toEqual(2)
    });
    it('should filter workflows by name and status', async () => {
      const res = await request(app)
        .get('/workflow/filter')
        .query({
          name: 'second',
          status: 2,
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toEqual(1)
    });
    it('should filter workflows by name and category', async () => {
      const res = await request(app)
        .get('/workflow/filter')
        .query({
          categories: [1,2],
          name: 'second',
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toEqual(1)
    });
    it('should filter workflows by category and status', async () => {
      const res = await request(app)
        .get('/workflow/filter')
        .query({
          categories: [1,1],
          status: 2
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toEqual(2)
    });
    it('should filter workflows by category name and status', async () => {
      const res = await request(app)
        .get('/workflow/filter')
        .query({
          categories: [1,5],
          name: 'second',
          status: 2
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toEqual(1)
    });
    it('should filter workflows by category name and status', async () => {
      const res = await request(app)
        .get('/workflow/filter')
        .query({
          categories: [8,4],
          name: 'second',
          status: 2
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toEqual(0)
    });
  })

afterAll(async () => {
    // run the migrations and do any other setup here
    await db.migrate.rollback()
    await db.destroy()
    return;
  })  
  