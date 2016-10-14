function fibonacci(n) {
	var x = 0;
	var y = 1;
	var z = 1;

	for (var i = 2; i <= n; i++) {
		z = x + y;
		x = y;
		y = z;
		console.log(z);
	}
}

fibonacci(14);