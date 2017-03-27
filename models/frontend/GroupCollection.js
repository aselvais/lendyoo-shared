
import CollectionAbstract from './CollectionAbstract';
import Group from './Group';

/**
 * Collection of userss
 */
class GroupCollection extends CollectionAbstract
{

	constructor()
	{
		super();
		this.collectionName = 'group';
		this._model= Group;
	}

}

export default GroupCollection;
