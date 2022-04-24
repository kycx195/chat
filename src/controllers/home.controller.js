export const getHome = (req, res) => {
  /* 
   #swagger.tags = ['Test']
   #swagger.responses[200] = {
         description: 'User successfully obtained.',
         schema: { $ref: '#/definitions/User' }
    } 
  */
  return res.send('home');
}
