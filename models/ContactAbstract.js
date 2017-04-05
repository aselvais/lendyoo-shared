import ModelAbstract from '../../models/ModelAbstract';

/**
 * This is shared/inherited by both client and server models
 */
class ContactAbstract extends ModelAbstract
{
	constructor(params={})
	{
		super(params);
		this.schemaName = 'contact';
	}


}


export default ContactAbstract;
