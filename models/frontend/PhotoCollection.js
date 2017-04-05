
import CollectionAbstract from './CollectionAbstract';
import Photo from './Photo';

/**
 *
 */
class PhotoCollection extends CollectionAbstract
{

	constructor()
	{
		super();
		this.collectionName = 'photo';
		this._model= Photo;
	}

}

export default PhotoCollection;
