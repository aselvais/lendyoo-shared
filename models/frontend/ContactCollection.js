
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
	 * @param contacts
	 */
	/*setContacts( contacts=[] )
	{
		for (var i=0; i < contacts.length; i++)
		{
			this.addModel( new Contact(contacts[i]) );
		}
	}*/

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
