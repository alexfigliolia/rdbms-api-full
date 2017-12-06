import { getPosts, getPost, deletePost, savePost, getTagsFromPost } from '../Controllers/postControllers';

const postRoutes = (app) => {
	app.route('/').post(savePost).get(getPosts);
	app.route('/:id').get(getPost).delete(deletePost);
	app.route('/:id/tags').get()
}

export default postRoutes;