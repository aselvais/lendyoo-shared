import ContactAbstract from '../ContactAbstract';
import _schema from '../schemas/Contact.json';

/**
 * Contact model.
 * Person you can lend an item to
 *
 */
class Contact extends ContactAbstract
{

	constructor(params={})
	{
		super(params);
		this.setSchema(_schema);
	}

	/**
	 *
	 * @returns {string}
	 */
	getFullName()
	{
		return this.firstName + ' ' + this.lastName;
	}

}

export default Contact;
