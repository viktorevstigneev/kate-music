const { HttpStatusCode } = require('../constants');
const { People, createTeam, getTeamData, deleteTeam, updateTeam, getPersonData } = require('../models/People');

const handleAddTeam = async (req, res) => {
	try {
		const result = await createTeam({...req.body,avatar: req.file.filename} );

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleGetTeam = async (req, res) => {
	try {
		let result;
		result = await getTeamData();
		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleGetPerson = async (req, res) => {
	try {
		let result;
		result = await getPersonData(req.params.id);
		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};


const handleDeleteTeam = async (req, res) => {
	try {
		const result = await deleteTeam(req.params.id);
		
		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleUpdateTeam = async (req, res) => {
	try {
		const result = await updateTeam(req.params.id, {
			name: req.body.name,
			description: req.body.description,
			avatar: req.body.avatar,
		});

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error);
	}
};

const handleUploadPhoto = async (req, res) => {
	try {
	
		let filedata = req.file;
;

		const result = await updateTeam(req.query.id, { avatar: filedata.filename });

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

module.exports = {
	handleAddTeam,
	handleGetTeam,
	handleDeleteTeam,
	handleUploadPhoto,
	handleUpdateTeam,
	handleGetPerson
};
