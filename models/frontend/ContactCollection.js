
import CollectionAbstract from './CollectionAbstract';
import Contact from './Contact';

/**
 * Collection of contacts
 */
class ContactCollection extends CollectionAbstract
{

	constructor()
	{
		super();
		this.collectionName = 'contact';
		this._model= Contact;
	}

	/**
	 *
	 * @param User_id
	 * @returns {*}
	 */
	setRemoteContactsFromUser( User_id='' )
	{
		return this.setRemoteCollection({ User_id: User_id });
	}

}

export default ContactCollection;
