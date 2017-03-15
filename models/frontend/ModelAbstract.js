import Config from './Config';


/**
 * Abstract client model
 */
class ModelAbstract
{

	/**
	 * Constructor
	 * @param {object} params Object composed of key:vals to push in the model
	 */
	constructor(params={})
	{
		this.config = new Config();
		this.populateParams(params);
	}

	/**
	 * Set params to local model properties
	 * @param params
	 */
	populateParams(params)
	{
		if (typeof params === 'object')
		{
			for( var e in params)
			{
				if (params[e])
					this[e] = params[e];
			}
		}
	}

	/**
	 * Sets the local props based on the schema
	 * @param schema
	 */
	setSchema(schema)
	{
		this._schema = schema;
		if (typeof params === 'object')
		{
			for (var e in schema)
			{
				if (schema[e])
					this[e] = (schema[e].default ? schema[e].default : null);
			}
		}
	}

	/**
	 *
	 * @param _id
	 * @returns {Promise.<TResult>}
	 */
	populateDataFromRemote(_id='')
	{
		var _that = this;
		var _qurl = this.config.API_URL + '/api/'+this.schemaName+'/getone/' + _id;
		return fetch(_qurl).then(
			function(res)
			{
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
				}
				return false;
			},
			function(e){
				return false;
			}
		);
	}

}

export default ModelAbstract;
