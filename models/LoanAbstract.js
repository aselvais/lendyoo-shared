import ModelAbstract from '../../models/ModelAbstract';

/**
 * This is shared/inherited by both client and server models
 *
 */
class LoanAbstract extends ModelAbstract
{
	constructor(params={})
	{
		super(params);
		this.schemaName = 'loan';
	}


}

export default LoanAbstract;
