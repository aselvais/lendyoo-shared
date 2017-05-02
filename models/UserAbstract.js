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
		if (this.fname && this.lname)
			return this.fname + ' ' + this.lname;
		else if (this.fname)
			return this.fname;
		else if (this.username)
			return this.username;
		else
			return '';
	}

}


export default UserAbstract;
