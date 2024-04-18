import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Vacation = db.Vacation;

export const vacationsRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    try {
        return await Vacation.find();
    } catch (error) {
        throw error.message;
    }
}

async function getById(id) {
    try {
        return await Vacation.findById(id);
    } catch (error) {
        throw error.message;
    }
}

async function create(params) {
    try {
        const vacation = new Vacation(params);
        await vacation.save();
    } catch (error) {
        throw error.message;
    }
}

async function update(id, params) {
    try {
        const vacation = await Vacation.findById(id);
        if (!vacation) throw 'Vacation not found';

        Object.assign(vacation, params);
        await vacation.save();
    } catch (error) {
        throw error.message;
    }
}

async function _delete(id) {
    try {
        await Vacation.findByIdAndRemove(id);
    } catch (error) {
        throw error.message;
    }
}
