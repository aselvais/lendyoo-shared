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
	constructor(_env = 'development')
	{
		if (!instance)
		{
			this.instanceTime = new Date();
			this._env = _env;
			this.parseConfigFile();
			instance = this;
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
				this[t] = _t[t];
			}
		}
	}

}

export default Config