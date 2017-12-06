import knex from 'knex';

export const saveTag = (req, res) => {
	const { tag } = req.body;
	knex.insert(tag).into('tags')
	.then(saved => {
		res.status(200).json(saved);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	})
}

export const getTags = (req, res) => {
	const tags = knex('tags')
	.then(t => {
		res.status(200).json(t);
	})
	.catch(err => {
		res.status(200).json({'something went wrong': err});
	});
}

export const getTag = (req, res) => {
	const { id } = req.body;
	const tag = knex('tags').while('id', id)
	.then(t => {
		res.status(200).json(t);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	});
}

export const deleteTag = (req, res) => {
	const { id } = req.body;
	const deleted = knex('tags').while('id', id).del()
	.then(tag => {
		res.status(200).json(tag);
	})
	.catch(err => {
		res.status(500).json({'something went wrong': err});
	});
}