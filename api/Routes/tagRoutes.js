import { saveTag, getTags, getTag, deleteTag } from '../Controllers/tagControllers';

const tagRoutes = (app) => {
	app.route('/').post(saveTag).get(getTags);
	app.route('/:id').get(getTag).delete(deleteTag);
}

export default tagRoutes;