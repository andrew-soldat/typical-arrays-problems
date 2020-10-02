
exports.min = function min (array) {
    if (array === undefined || array.length === 0) return 0;
    array.sort((a, b) => a - b);
    return array[0];
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) return 0;
    array.sort((a, b) => a - b).reverse();
    return array[0];
}

exports.avg = function avg (array) {
	if (array === undefined || array.length === 0) return 0;
	let sum = 0;
	for (let element of array) {
		sum += element;
	}
	return sum / array.length;
}
