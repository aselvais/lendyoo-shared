import UserAbstract from '../UserAbstract';
import _schema from '../schemas/User.json';

/**
 * The application registered used.
 */
class User extends UserAbstract
{

	constructor(params={})
	{
		super(params);
		this.setSchema(_schema);
	}

	/**
	 *
	 * @param username
	 * @param password
	 * @returns {*|Promise.<TResult>|Promise.<U>}
	 */
	authenticate(username='', password='')
	{
		var _that = this;
		var _qurl = this.config.API_URL + '/api-v2/'+this.schemaName+'/auth/';
		return fetch(_qurl, {
			method: "POST",
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type':'application/x-www-form-urlencoded'
			},
			body: 'username='+encodeURIComponent(username)+'&password='+encodeURIComponent(password)
		}).then(
			function(res)
			{
				//console.log(res);
				if (res.status === 200)
				{
					return res.json().then(function (d)
					{
						if (typeof d.error !== 'undefined' && d.error === 0 && d.data)
						{
							_that.populateParams(d.data);
							return true;
						}
						else
						{
							return false;
						}
					});
				} else
					return false;
			},
			function(e){
				return false;
			}
		);
	}


}

export default User;
