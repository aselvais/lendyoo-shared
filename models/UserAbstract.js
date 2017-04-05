import ModelAbstract from '../../models/ModelAbstract';

/**
 * This is shared/inherited by both client and server models
 *
 */
class UserAbstract extends ModelAbstract
{
	constructor(params={})
	{
		super(params);
		this.schemaName = 'user';
	}

	get fullName()
	{
		return this.fname + ' ' + this.lname;
	}

}


export default UserAbstract;
