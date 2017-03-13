import ModelAbstract from '../../models/ModelAbstract';

/**
 *
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
