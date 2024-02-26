import React from 'react';
import CommentBox from './comment-box';

class CommentList extends React.Component {

    render() {
        return (		
            <div className="comments-list">
                <CommentBox/>
            </div>	
        )
    }
    
}

export default CommentList;