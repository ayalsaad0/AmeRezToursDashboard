import { Sequelize } from 'Sequelize';

import sequelize from '../utils/database.js';
const rating = sequelize.define('ratings', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    attractionId: {
        type: Sequelize.INTEGER,
        allowNull: true,

    },
    vehicleId: {
        type: Sequelize.INTEGER,
        allowNull: true,

    },
    totalUsers: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    avgRating: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
}, {
    timestamps: false
});

export default rating;
