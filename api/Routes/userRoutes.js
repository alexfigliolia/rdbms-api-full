import { newUser, getUsers, getUser, deleteUser, getUserPosts } from '../Controllers/userControllers';

const userRoutes = (app) => {
	app.route('/').post(newUser).get(getUsers);
	app.route('/:id').get(getUser).delete(deleteUser);
	app.route('/:id/posts').get(getUserPosts);
}

export default userRoutes;