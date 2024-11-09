import { masterKey } from "../app.js";
const verifyMasterKey = (req, res, next) => {
	if (req.query.key === masterKey) {
		next();
	} else {
		res.status(403).json({ message: "Unauthorised" }); //res zakańcza obsułę rządania więc nie trzeba żadnego next() ani nic
	}
};

export default verifyMasterKey;
