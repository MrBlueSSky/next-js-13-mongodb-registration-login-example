import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Appointment = db.Appointment;

export const appointmentsRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    try {
        return await Appointment.find();
    } catch (error) {
        throw error.message;
    }
}

async function getById(id) {
    try {
        return await Appointment.findById(id);
    } catch (error) {
        throw error.message;
    }
}

async function create(params) {
    try {
        const appointment = new Appointment(params);
        await appointment.save();
    } catch (error) {
        throw error.message;
    }
}

async function update(id, params) {
    try {
        const appointment = await Appointment.findById(id);
        if (!appointment) throw 'Appointment not found';

        Object.assign(appointment, params);
        await appointment.save();
    } catch (error) {
        throw error.message;
    }
}

async function _delete(id) {
    try {
        await Appointment.findByIdAndRemove(id);
    } catch (error) {
        throw error.message;
    }
}
