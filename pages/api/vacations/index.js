import { apiHandler, vacationsRepo } from 'helpers/api';

export default apiHandler({
    get: getAll,
    post: create
});

async function getAll(req, res) {
    const vacations = await vacationsRepo.getAll();
    return res.status(200).json(vacations);
}

async function create(req, res) {
    console.log('aca');
    await vacationsRepo.create(req.body);
    return res.status(200).json({});
}