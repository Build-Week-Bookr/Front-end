import * as types from '../state/actionTypes';
import axios from 'axios';
import axiosWithAuth from "../axios";

// Forms:
export function signUpFormChange(target) {
	return {
		type: types.ON_SIGN_UP_INPUT_CHANGE,
		payload: {
			name: target.name,
			value: target.value
		}
	}
}

const signUpUser = user => {
	return {
		type: types.POST_SIGN_UP,
		payload: user
	}
}

export const signUp = addUser => dispatch => {
	axios
	.post('https://bookr-build-backend.herokuapp.com/api/auth/register', addUser)
	.then(res => {
		console.log('response', res)
		console.log('user added', addUser)
		localStorage.setItem('token', res.data.token)
		dispatch(signUpUser(res.data.user))
	})
	.catch(error => {
		console.log('Sign up Error', error)
		alert('error.response.data.message')
	})
}

export function logInFormChange(target) {
	return {
		type: types.ON_LOGIN_INPUT_CHANGE,
		payload: {
			name: target.name,
			value: target.value
		}
	}
}
const logInUser = user => {
	return {
		type: types.POST_LOGIN_DATA,
		payload: user
	}
}
export const logIn = logUser => dispatch => {
	axios.post('https://bookr-build-backend.herokuapp.com/api/auth/login', logUser)
	.then(res => {
		console.log('submitLogin', res)
		console.log('Log in user', logUser)
		localStorage.setItem('token', res.data.token)
		dispatch(logInUser(res.data.user))
	})
	.catch(error => {
		console.log('Login Error', error)
		alert(error.response.data.message)
	})
}

// Books:
export const fetchBooks = history => dispatch => {
	axiosWithAuth().get("https://bookr-build-backend.herokuapp.com/api/books")
		.then(res => {
			const books = res.data;
			dispatch({ 
				type: types.FETCH_BOOKS,
				payload: books, 
			});
		})
		.catch(err => {
			if (err.response.status === 401) {
				alert("Your session has expired. Please log back in.");
				history.push("/");
			} else {
				alert(err.message);
			}
		});
};
export const fetchBook = id => dispatch => {
	axiosWithAuth().get(`https://bookr-build-backend.herokuapp.com/api/books/${id}`)
		.then(res => {
			const book = res.data;
			dispatch({
				type: types.FETCH_BOOK,
				payload: book,
			})
		})
		.catch(err => {
			alert(err.message);
		});
};
export const clearBook = () => {
	return { type: types.CLEAR_BOOK }
};

export const fetchReviews = id => dispatch => {
	axiosWithAuth().get(`https://bookr-build-backend.herokuapp.com/api/reviews/book/${id}`)
		.then(res => {
			const reviews = res.data;
			dispatch({
				type: types.FETCH_REVIEWS,
				payload: reviews,
			});
		})
		.catch(err => {
			if (err.response.status === 404) {
				dispatch({
					type: types.FETCH_REVIEWS,
					payload: [],
				});
			}
		});
};
export const clearReviews = () => {
	return { type: types.CLEAR_REVIEWS }
}

export const fetchUser = id => dispatch => {
	axiosWithAuth().get(`https://bookr-build-backend.herokuapp.com/api/users/${id}`)
		.then(res => {
			dispatch({
				type: types.FETCH_USER,
				payload: res.data,
			});
		})
		.catch(err => {
			debugger
		})
};