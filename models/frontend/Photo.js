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
					console.log('---------- '+width +' x '+ height+' ---------');
					_that.width = width;
					_that.height = height;
				});

			_that.data = RNFetchBlob.wrap(_that.localpath);


		} catch (er)
		{
			console.log(er);
		}
		console.log('-------------------');
		console.log(_that.getJsonData());
		console.log(_that);
	}

}

export default Photo;
