import React, {useState} from "react";
import * as actionCreators from '../../state/actionCreators';
import { Form, Field, Formik} from 'formik';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import StarRatingComponent from "react-star-rating-component";

const ReviewFormStyled = styled.div`
	.text-area {
	  width:400px;
		height:200px;
		text-align:start;
	}
	.star-rating {
	font-size: 30px;
	margin-left: 20px;
	}
`;

export function AddReview(props) {

	const {authedUserId, book, addReview, fetchReviews} = props;

	const [rating, setRating] = useState(0);

	const onStarClick = (nextValue, prevValue, name) => {
		setRating(nextValue)
	}


	const onSubmit = formValues => {
		addReview(formValues, authedUserId);
		fetchReviews(props.history);
		props.history.push(`/book/${book.id}`)
	}



	return (
		<Formik
		initialValues={{
			contents: '',
			rating: 0,
			
		}}
		onSubmit={onSubmit}
		render={props => (
			<Form>
				<ReviewFormStyled>
					<Field className='text-area' name='contents' type='text' placeholder='Add a review'/>
				</ReviewFormStyled>
				<ReviewFormStyled>
				{/* <Field name='rating' type='number' placeholder='rate from 1 to 5'/> */}
				<StarRatingComponent 
          name="rating" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
				</ReviewFormStyled>
				<button type='submit'>Add Review</button>
			</Form>
		)}
		/>
	)
}

export default connect(
	state => state,
	actionCreators
)(AddReview)