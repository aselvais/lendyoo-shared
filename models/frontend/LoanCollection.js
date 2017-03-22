import CollectionAbstract from './CollectionAbstract';
import Loan from './Loan';

/**
 * Collection of loans
 */
class LoanCollection extends CollectionAbstract
{

	constructor()
	{
		super();
		this.collectionName = 'loan';
		this._model= Loan;
	}

	/**
	 *
	 */
	createNewLoan()
	{
		this.setActiveModel( new Loan() );
	}

	/**
	 *
	 * @param User_id
	 * @returns {Promise.<U>|*|Promise.<TResult>}
	 */
	setRemoteLoansFromUser( User_id='' )
	{
		return this.setRemoteCollection({ User_id: User_id });
	}

}

export default LoanCollection;
