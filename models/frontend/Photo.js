import PhotoAbstract from '../PhotoAbstract';
import _schema from '../schemas/Photo.json';
// for react native
import RNFetchBlob from 'react-native-fetch-blob';
import React from 'react';
import {Image} from 'react-native';

/**
 *
 */
class Photo extends PhotoAbstract {

	/**
	 *
	 * @param params
	 */
	constructor(params = {}) {
		super(params);
		this.setSchema(_schema);
	}

	/**
	 *
	 * @returns {*|Promise.<TResult>}
	 */
	initImage() {
		this.initImageSize();
		this.initFilename();
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

	/**
	 * init the image size from the localpath
	 */
	initImageSize() {
		var _that = this;
		_that.width = 0;
		_that.height = 0;
		if (Image && Image.getSize && _that.localpath && _that.localpath != '') {
			Image.getSize(_that.localpath,
				function (width, height) {
					_that.width = width;
					_that.height = height;
				});
			Image;
		}
	}

	/**
	 * Init the filename param from the localpath
	 */
	initFilename() {
		var _fln = {};
		// gets the filename
		var s = this.localpath.split("/");
		this.filename = s.pop();
		// assign the name and extension if we can split by .
		var so = this.filename.split('.');
		if (so[1])
		{
			this.ext = so[1].toLowerCase();
			this.name = so[0];
		}
		// Get data from the localpath if it is URL encoded
		try
		{
			if (this.localpath && this.localpath != '' && this.localpath.split("?")) {
				var spl = this.localpath.split("?");
				if (spl[1])
				{
					var spl2 = spl[1].split('&');
					for (var i=0; i < spl2.length; i++)
					{
						var f = spl2[i].split('=');
						if (f.length && f.length == 2)
							_fln[f[0]] = f[1];
					}
					if (_fln.id && _fln.ext)
					{
						this.name = _fln.id;
						this.ext = _fln.ext.toLowerCase();
						this.filename = _fln.id + '.' + _fln.ext;
					}
				}
			}
		} catch(e)
		{
			console.log(e);
		}
		// figure out the ext from the file if we still don't have it
		if ( (!this.ext || this.ext == '') && (this.localpath && this.localpath != '') )
		{
			// @todo do something here ... get data from the bin file
		}
	}

	/**
	 * Stores the metadata from the image to parameters
	 * @todo To implement
	 */
	initMetaData() {

	}

	/**
	 * Upload the image located at this.localpath
	 * @todo To implement
	 * @returns {*|Promise.<T>}
	 */
	uploadImage() {
		var _that = this;
		var _qurl = this.config.API_URL + '/api-v2/' + this.schemaName + '/uploadfile/';
		if (this.localpath && this.localpath != '') {
			return RNFetchBlob.fetch('POST', _qurl, {
				'Content-Type': 'multipart/form-data'
			},
				[
					{ name : this.name, filename : this._id + '.' + this.ext, data: RNFetchBlob.wrap(_that.localpath)}
				]
			)
			// listen to upload progress event
				.uploadProgress((written, total) => {
					console.log('uploaded', [written, total, parseInt((written/total)*100) + '%' ])
				})
				// listen to download progress event
				.progress((received, total) => {
					console.log('progress', received, total)
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}


}

export default Photo;
