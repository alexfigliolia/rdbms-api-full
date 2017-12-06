import knex from 'knex';

export const newUser = (req, res) => {
	const { user } = req.body;
	knex.insert(user).into('users')
	.then(users => {
		res.status(200).json(users);
	})
	.catch(err => console.log(err));
}

export const getUsers = (req, res) => {
	const users = knex('users')
	.then(users => {
		res.status(200).json(users);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	});
}

export const getUser = (req, res) => {
	const { id } = req.params;
	const users = knex('users').while('id', id)
	then(user => {
		res.status(200).json(user);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	});
}

export const deleteUser = (req, res) => {
	const { id } = req.params;
	const users = knex('users').while('id', id).del()
	.then(user => {
		res.status(200).json(user);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	});
}

export const getUserPosts = (req, res) => {
	const { id } = req.params;
	const posts = knex('posts').where('userId', id)
	.then(posts => {
		res.status(200).json(posts);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	})
}