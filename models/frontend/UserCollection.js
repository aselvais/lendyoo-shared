
import CollectionAbstract from './CollectionAbstract';
import User from './User';

/**
 * Collection of userss
 */
class UserCollection extends CollectionAbstract
{

	constructor()
	{
		super();
		this.collectionName = 'user';
		this._model= User;
	}

}

export default UserCollection;
