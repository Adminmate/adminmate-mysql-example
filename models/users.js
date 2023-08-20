export default (sequelize, Sequelize) => {
  const Users = sequelize.define('users', {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    profile_pic: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.ENUM('owner', 'occupant')
    },
    rating: {
      type: Sequelize.INTEGER
    },
    signup_date: {
      type: Sequelize.DATE
    }
  }, {
    tableName: 'users',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  return Users;
};
