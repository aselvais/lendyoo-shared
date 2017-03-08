import ModelAbstract from '../../models/ModelAbstract';

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
