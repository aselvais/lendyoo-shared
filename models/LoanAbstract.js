import ModelAbstract from '../../models/ModelAbstract';

/**
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
