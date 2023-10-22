import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'host',
    dialect: 'postgres',
});

export default sequelize;
