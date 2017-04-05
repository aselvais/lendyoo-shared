import ModelAbstract from '../../models/ModelAbstract';

/**
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
