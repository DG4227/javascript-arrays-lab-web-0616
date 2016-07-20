const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
	kittens.push(name)
	return kittens
}

function destructivelyPrependKitten(name) { 
	kittens.unshift(name)
	return kittens
}

function destructivelyRemoveLastKitten() { 
	kittens.pop()
	return kittens
}

function destructivelyRemoveFirstKitten() { 
	kittens.shift()
	return kittens
}

function appendKitten(name) {
	arr = [...kittens, name]
	return arr
}

function prependKitten(name) {
	arr = [name, ...kittens]
	return arr
}

function removeLastKitten() { 
	arr = kittens.slice(0, kittens.length - 1)
	return arr
}

function removeFirstKitten() {
	arr = kittens.slice(1, kittens.length)
	return arr
}




