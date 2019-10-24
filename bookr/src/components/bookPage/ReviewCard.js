import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";

const StyledReviewCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    p {
        margin-bottom: 0.5rem;
    }
`;

export function ReviewCard(props) {
    const { review, contents, rating, user, fetchUser } = props;
    const userId = review.user_id;

    useEffect(() => {
        if (!user) {
            fetchUser(userId);
        }
    }, []);

    return (
        <StyledReviewCard>
            {(!user && <h6>...</h6>) ||
                <>
                    <p>"{contents}"</p>
                    <p>{rating}</p>
                    <h6>— {user.username}</h6>
                </>
            }
        </StyledReviewCard>
    )
}

export default connect(
    state => state,
    actionCreators,
)(ReviewCard);