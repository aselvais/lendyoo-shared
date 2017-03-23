import Config from './Config';

/**
 *
 */
class CollectionAbstract
{

	/**
	 *
	 */
	constructor()
	{
		this.config = new Config();
		// collection of models
		this.models = [];
		// the current model we are working on
		this.activeModel = null;
		this.collectionName = '';
		this._model=null;
	}

	/**
	 * Populate a Json collection in this collection as array of models
	 * @param jsonCollection
	 */
	populateParams(jsonCollection=[])
	{
		for (var i=0; i < jsonCollection.length; i++)
		{
			this.addModel( new this._model(jsonCollection[i]) );
		}
	}

	/**
	 * Sets a collection from the remote API this this object
	 * @param filter
	 * @returns {Promise.<U>|*|Promise.<TResult>}
	 */
	setRemoteCollection( filter={}, clearCurrentCollection=true )
	{
		var _that = this;

		if (clearCurrentCollection === true)
		{
			this.models = [];
		}


		var _qurl = this.config.API_URL + '/api-v2/' + this.collectionName + '/getcollection/';
		return fetch(_qurl, {
			method: "POST",
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			body: 'json=' + encodeURIComponent(JSON.stringify(filter))
		}).then(
			function (res) {
				console.log(res);
				if (res.status === 200) {
					return res.json().then(function (d) {
						if (typeof d.error !== 'undefined' && d.error === 0 && d.data) {
							_that.populateParams(d.data);
							return true;
						}
						else {
							return false;
						}
					});
				} else
					return false;
			},
			function (e) {
				console.log(e);
				return false;
			}
		);
	}

	/**
	 * Add a model to the collection
	 * @param model
	 */
	addModel( model )
	{
		this.models.push(model);
	}

	/**
	 *
	 * @returns {ModelAbstract|null}
	 */
	getActiveModel()
	{
		return this.activeModel;
	}

	/**
	 *
	 * @param model
	 */
	setActiveModel( model )
	{
		this.activeModel = model;
	}

	/**
	 *
	 * @param id
	 * @returns {string}
	 */
	getModelById( id )
	{
		for (var i=0; i < this.models.length; i++)
		{
			if (this.models[i]._id == id)
				return this.models[i];
		}
		return null;
	}

}

export default CollectionAbstract;