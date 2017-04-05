import PhotoAbstract from '../PhotoAbstract';
import _schema from '../schemas/Photo.json';

/**
 *
 */
class Photo extends PhotoAbstract
{

	constructor(params={})
	{
		super(params);
		this.setSchema(_schema);
	}

}

export default Photo;
