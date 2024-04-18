import { apiHandler, appointmentsRepo } from 'helpers/api';

export default apiHandler({
    get: getAll,
    post: create
});

async function getAll(req, res) {
    const users = await appointmentsRepo.getAll();
    return res.status(200).json(users);
}

async function create(req, res) {
    console.log('aca');
    await appointmentsRepo.create(req.body);
    return res.status(200).json({});
}