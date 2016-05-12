import {
	INCREMENT,
	DECREMENT
} from './action.js'

const initState = {
	cnt: 0
}

export default function counterReducer (state=initState, action) {

	switch(action.type) {
		case INCREMENT:
			console.log('in reducer INCREMENT' + ' state.cnt: ' + state.cnt)
			return Object.assign({}, state, {cnt: state.cnt + 1})
			break
		case DECREMENT:
			console.log('in reducer DECREMENT' + ' state.cnt: ' + state.cnt)
			return Object.assign({}, state, {cnt: state.cnt - 1})
			break
		default:
			return state
	}
}