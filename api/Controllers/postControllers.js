import knex from 'knex';

export const savePost = (req, res) => {
	const { post } = req.body;
	knex.insert(post).into('posts')
	.then(p => {
		res.status(200).json(p);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	})
}

export const getPosts = (req, res) => {
	const p = knex('posts')
	.then(posts => {
		res.status(200).json(posts);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	});
}

export const getPost = (req, res) => {
	const { id } = req.params;
	const post = knex('posts').while('id', id)
	.then(p => {
		res.status(200).json(p);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	})
}

export const deletePost = (req, res) => {
	const { id } = req.params;
	const deleted = knex('posts').while('id', id).del()
	.then(post => {
		res.status(200).json(post);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	})
}