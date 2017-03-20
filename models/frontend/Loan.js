import LoanAbstract from '../LoanAbstract';
import _schema from '../schemas/Loan.json';

/**
 * Loan model
 */
class Loan extends LoanAbstract
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


}

export default Loan;
