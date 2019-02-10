import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>Are you sure you want to do that?</ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:54pm" 
                    commentText="Nice blog post!" 
                    imgsrc={faker.image.avatar()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00am" 
                    commentText="I agree" 
                    imgsrc={faker.image.avatar()} 
                    />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:01pm" 
                    commentText="I am bored, entertain me..." 
                    imgsrc={faker.image.avatar()} 
                    />
            </ApprovalCard>

        </div>
    );
};



ReactDOM.render(
    <App />,
    document.querySelector('#root')
)


