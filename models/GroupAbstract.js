import ModelAbstract from '../../models/ModelAbstract';

/**
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
