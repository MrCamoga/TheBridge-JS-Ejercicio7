let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [
	[0, 1, 2],
	["a", "b", "c"],
];

function suma(a, b) {
	return a + b;
}

function potenciacion(a, b) {
	return a ** b;
}

function separarPalabras(str) {
	return str.split(" ");
}

function repetirString(str, n) {
	let res = "";
	for (let i = 0; i < n; i++) {
		res += str;
	}
	return res;
}

function esPrimo(n) {
	/**
	* returns x**a % m
	*/
	function modpow(x, a, m) {
		if (a == 0) return 1;
		let res = 1;
		while (a != 0) {
			if (a & 1) res = (res * x) % m;
			x = x ** 2 % m;
			a >>= 1;
		}
		return res;
	}

	/**
	* returns 2-adic valuation of x, highest power of two that divides x
	*/
	function trailingZeroes(x) {
		let d = x & ~(x - 1);
		return (
			((d & 0xffff0000) != 0) * 16 +
			((d & 0xff00ff00) != 0) * 8 +
			((d & 0xf0f0f0f0) != 0) * 4 +
			((d & 0xcccccccc) != 0) * 2 +
			((d & 0xaaaaaaaa) != 0)
		);
	}

	const bases = [2, 3, 5, 7, 11, 13, 17, 19];
	if (bases.includes(n)) return true;
	if (n % 2 == 0 || n <= 1) return false;
	let s = trailingZeroes(n-1);
	let d = (n - 1) >> s;

	mr: for (let i = 0; i < bases.length; i++) {
		let x = modpow(bases[i], d, n);
		if (x == n - 1 || x == 1) continue;
		for (let j = 1; j <= s; j++) {
			x = x ** 2 % n;
			if (x == n - 1) continue mr;
		}
		return false;
	}

	return true;
}

function ordenarArray(arr) {
	const res = arr.slice();
	for (let j = res.length - 1; j > 0; j--) {
		for (let i = 0; i < j; i++) {
			if (res[i] < res[i + 1]) continue;
			let temp = res[i];
			res[i] = res[i + 1];
			res[i + 1] = temp;
		}
	}
	return res;
}

function obtenerPares(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) res.push(arr[i]);
	}
	return res;
}

function pintarArray(arr) {
	let s = "[";
	for (let i = 0; i < arr.length - 1; i++) {
		s += arr[i] + ", ";
	}
	s += arr[arr.length - 1];
	s += "]";
	return s;
}

function arrayMapi(arr, f) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		res.push(f(arr[i]));
	}
	return res;
}

function eliminarDuplicados(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		let isDuplicated = false;
		for (let j = 0; j < res.length; j++) {
			if (res[j] == arr[i]) {
				isDuplicated = true;
				break;
			}
		}
		if (!isDuplicated) res.push(arr[i]);
	}
	return res;
}

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arrayDeArrays = [
	[756, "nombre"],
	[225, "apellido"],
	[298, "direccion"],
];

function multiplicacion(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}

function esPar(x) {
	return x % 2 == 0;
}

function resta(a, b) {
	return a - b;
}

let arrayFunciones = [suma, resta, multiplicacion];

function ordenarArray2(arr) {
	return ordenarArray(arr).reverse();
}

function obtenerImpares(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 != 0) res.push(arr[i]);
	}
	return res;
}

function sumarArray(arr) {
	return arr.reduce(suma, 0);
}

function multiplicarArray(arr) {
	return arr.reduce(multiplicacion, 1);
}
