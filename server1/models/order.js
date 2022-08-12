import { Sequelize } from 'Sequelize';

import sequelize from '../utils/database.js';

const Order = sequelize.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    start_Date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    end_Date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
    },
    order_Date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    attractionId: {
        allowNull: true,
        type: Sequelize.INTEGER
    },
    vehicleId: {
        allowNull: true,
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Order;