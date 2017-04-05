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

			RNFetchBlob.fs.readFile(_that.localpath, 'base64').then(
				function(data) {
					_that.data = data;
				}
			);

		} catch (er) {}
	}

}

export default Photo;
