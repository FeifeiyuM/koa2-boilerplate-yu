export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function increment() {
	console.log('in increment')
	return ({
		type: INCREMENT
	})
}

export function decrement() {
	console.log('in decrement')
	return ({
		type: DECREMENT
	})
}