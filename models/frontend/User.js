import UserAbstract from '../UserAbstract';
import _schema from '../schemas/User.json';

/**
 * The application registered used.
 */
class User extends UserAbstract
{

	constructor(params={})
	{
		super(params);
		this.setSchema(_schema);
	}

}

export default User;
