import ModelAbstract from '../../models/ModelAbstract';

/**
 * This is shared/inherited by both client and server models
 *
 */
class GroupAbstract extends ModelAbstract
{
	constructor(params={})
	{
		super(params);
		this.schemaName = 'group';
	}

}


export default GroupAbstract;
