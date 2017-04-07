import PhotoAbstract from '../PhotoAbstract';
import _schema from '../schemas/Photo.json';
// for react native
import RNFetchBlob from 'react-native-fetch-blob';

import React from 'react';
import { Image } from 'react-native';

/**
 *
 */
class Photo extends PhotoAbstract
{

	/**
	 *
	 * @param params
	 */
	constructor(params={})
	{
		super(params);
		this.setSchema(_schema);
	}
	/**
	 *
	 * @returns {*|Promise.<TResult>}
	 */
	initImage()
	{
		var _that = this;
		_that.width = 0;
		_that.height = 0;
		try {
			Image.getSize(_that.localpath,
				function(width, height) {
					_that.width = width;
					_that.height = height;
				});

			return RNFetchBlob.fs.readFile(_that.localpath, 'base64').then(
				function(data) {
					_that.data = data;
				}
			);

		} catch (er) {}
	}

	/**
	 *
	 * @param _id
	 * @returns {Promise.<U>|*|Promise.<TResult>}
	 */
	populateDataFromRemoteByLoanId(_id = '') {
		var _that = this;
		var _qurl = this.config.API_URL + '/api-v2/' + this.schemaName + '/getonebyloanid/' + _id;
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


}

export default Photo;
