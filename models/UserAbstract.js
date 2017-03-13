import ModelAbstract from '../../models/ModelAbstract';

/**
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
