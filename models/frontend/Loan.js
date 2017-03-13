import ModelAbstract from './ModelAbstract';
import _schema from '../schemas/Loan.json';

/**
 * Loan model
 */
class Loan extends ModelAbstract
{

	constructor(params={})
	{
		super(params);
		this.setSchema(_schema);
	}

	/**
	 *
	 */
	setDefaultExpirationDate()
	{
		this.loanExpirationDate = this.loanDate.setMonth(this.loanDate.getMonth()+2);
	}

	/**
	 * @todo implement this thing
	 */
	save()
	{
		// this.Console.log('Loan.save() Save the thing ...');
	}



}

export default Loan;
