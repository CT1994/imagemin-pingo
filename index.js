'use strict';
const pingoBin = require('pingo-bin');
const execBuffer = require('exec-buffer');
const tempy = require("tempy");

module.exports = ({
	optimizationLevel = 3,
} = {}) => buffer => {
	if (!Buffer.isBuffer(buffer)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (optimizationLevel < 0 || optimizationLevel > 9) {
		return Promise.reject(new TypeError('optimization level must be 0 to 9'));
	}

	const tempFilePath = tempy.file({extension: 'png'});

	const args = [
		`-s${optimizationLevel}`,
	];

	args.push(tempFilePath);

	return execBuffer({
		input: buffer,
		bin: pingoBin,
		args,
		inputPath: tempFilePath,
		outputPath: tempFilePath,
	}).catch(err => {
		err.message = err.stderr || err.message;
		throw err;
	});
};
