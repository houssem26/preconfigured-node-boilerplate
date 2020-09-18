const request = require('supertest')
const app = require('../app')
const db = require('../db')


beforeAll(async () => {
  // run the migrations and do any other setup here
  await db.migrate.latest()
})

describe('Post category', () => {
    it('should create a new category', async () => {
      const res = await request(app)
        .post('/category')
        .send({
            name:'first category'
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('id')
    });
    it('should not create a new category with wrong parent_id', async () => {
        const res = await request(app)
          .post('/category')
          .send({
              name:'first category',
              parent_category_id: 5
          })
        expect(res.statusCode).toEqual(500)
        expect(res.body).not.toHaveProperty('id')
      });
    it('should create a new category with correct parent_id', async () => {
        const res = await request(app)
          .post('/category')
          .send({
              name:'second category',
              parent_category_id: 1
          })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('id')
      });
  })
  describe('read all category', () => {
    it('should read all categories', async () => {
      const res = await request(app)
        .get('/category')
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toEqual(2)
    });
  })

