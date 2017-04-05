import ModelAbstract from '../../models/ModelAbstract';

/**
 * This is shared/inherited by both client and server models
 *
 */
class PhotoAbstract extends ModelAbstract
{
	constructor(params={})
	{
		super(params);
		this.schemaName = 'photo';
	}


}


export default PhotoAbstract;
