

function rowSumOddNumbers(n) {
	// TODO
	return n * n * n;
}



function findOdd(A) {
	//TODO
	let result = 0;

	for (let i = 0; i < A.length; i++){
		if(!A[i] % 2 === 0 && A[i] > 0){
			result = A[i];
		}
	}
	return result;
}