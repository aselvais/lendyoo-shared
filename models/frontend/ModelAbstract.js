import Config from './Config';

/**
 * Abstract client model
 */
class ModelAbstract {

	/**
	 * Constructor
	 * @param {object} params Object composed of key:vals to push in the model
	 */
	constructor(params = {}) {
		this.config = new Config(process.env.NODE_ENV);
		this.populateParams(params);
		// container for the validation error structured as {error:1, message: '', data; {}}
		this.validationErrorObject = null;
	}

	/**
	 * Set params to local model properties
	 * @param params
	 */
	populateParams(params) {
		if (typeof params === 'object') {
			for (var e in params) {
				if (params[e])
				{
					this[e] = params[e];
				}
			}
		}
	}

	/**
	 * Returns the data only as an object
	 * @returns {{}}
	 */
	getJsonData() {
		var toret={};
		if (this._id)
		{
			toret._id = this._id;
		}
		for (var e in this._schema) {
			if (this[e])
				toret[e] = this[e];
		}
		return toret;
	}

	/**
	 * Sets the local props based on the schema
	 * @param schema
	 */
	setSchema(schema) {
		this._schema = schema;
		if (typeof params === 'object') {
			for (var e in schema) {
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
	populateDataFromRemote(_id = '') {
		var _that = this;
		var _qurl = this.config.API_URL + '/api-v2/' + this.schemaName + '/getone/' + _id;
		return fetch(_qurl).then(
			function (res) {
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
				}
				return false;
			},
			function (e) {
				return false;
			}
		);
	}

	/**
	 *
	 * @returns {*|Promise.<U>|Promise.<TResult>}
	 */
	save() {

		var _that = this;
		var _qurl = this.config.API_URL + '/api-v2/' + this.schemaName + '/save/';

		return fetch(_qurl, {
			method: "POST",
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			body: 'json=' + encodeURIComponent(JSON.stringify(_that.getJsonData()))
		}).then(
			function (res) {
				//console.log(res);
				if (res.status === 200) {
					res.json().then(function (d) {
						if (typeof d.error !== 'undefined' && d.error === 0 && d.data) {
							_that.populateParams(d.data);
							_that.validationErrorObject = d;
							return true;
						}
						else {
							_that.validationErrorObject = d;
							return false;
						}
					});
				} else
				{
					console.log(res);
					return false;
				}
			},
			function (e) {
				//console.log(e);
				return false;
			}
		);
	}

	/**
	 *
	 * @returns {Promise.<TResult>}
	 */
	delete()
	{
		var _that = this;
		var _qurl = this.config.API_URL + '/api-v2/' + this.schemaName + '/delete/';

		return fetch(_qurl, {
			method: "POST",
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			body: 'json=' + encodeURIComponent(JSON.stringify(_that.getJsonData()))
		}).then(
			function (res) {
				console.log(res);
				if (res.status === 200) {
					return res.json().then(function (d) {
						if (typeof d.error !== 'undefined' && d.error === 0 && d.data) {
							delete this;
							return d;
						}
						else {
							_that.validationErrorObject = d;
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

}

export default ModelAbstract;
