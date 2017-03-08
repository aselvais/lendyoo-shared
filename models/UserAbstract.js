import ModelAbstract from './frontend/ModelAbstract';

/**
 *
 */
class UserAbstract extends ModelAbstract
{

	get fullName()
	{
		return this.fname + ' ' + this.lname;
	}

}


export default UserAbstract;
