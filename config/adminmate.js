// Get database instance
import db from '../database.js';

export default {

  // Test
  projectId: process.env.AM_PROJECT_ID,
  secretKey: process.env.AM_SECRET_KEY,
  authKey: process.env.AM_AUTH_KEY,
  masterPassword: process.env.AM_MASTER_PWD,

  models: [
    {
      slug: 'users',
      model: db.users,
      actions: [],
      segments: []
    },
  ],

  authorizedIps: []
};
