import _cfg from '../../../libs/LenyooConfig.json';

let instance = null;

/**
 *
 */
class Config
{
	/**
	 *
	 * @param _env
	 * @returns {*}
	 */
	constructor(_env = 'production')
	{
		if (!instance)
		{
			this.instanceTime = new Date();
			this._env = process.env.NODE_ENV;
			// this._env = _env;
			this.debug = false;
			if (this._env === 'development')
				this.debug = true;
			this.parseConfigFile();
			instance = this;

			// console.warn(instance);
		}
		return instance;
	}

	/**
	 *
	 */
	parseConfigFile()
	{
		if (_cfg.defaults && _cfg[this._env])
		{
			var _t = Object.assign({}, _cfg.defaults, _cfg[this._env]);
				for (var t in _t)
				{
					if (_t[t]) {
						this[t] = _t[t];
					}
				}
		}
	}

}

export default Config