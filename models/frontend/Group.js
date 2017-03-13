import GroupAbstract from '../GroupAbstract';
import _schema from '../schemas/Group.json';

/**
 * The application registered used.
 */
class Group extends GroupAbstract
{

	constructor(params={})
	{
		super(params);
		this.setSchema(_schema);
	}

}

export default Group;
