import React from "react";



function Comments({commentsVid}){
    
    return(
        <section className="section__comments">
            <h3> 3 Comments</h3>
            <div className="comment__main">
                <form className="comment__main-form">
                    <label htmlFor="comment" className="comment__main-label">Join the conversation:
                    <textarea typeof="text" className="comment__main-text" id="comment" name="comment" placeholder="Add a new Comment"/></label>
                    <button className="button" href="#">
                    <img  alt=""/>Comment</button></form>
                </div>
                <div className="comment__main-all">
                    {commentsVid.map((comment)=>{
                        return(
                            <section>
                            <img src="" alt="" className="avatar"/>
                            <div className="comment__main-all--description">
                                <div className="comment__main-all--desc">
                                    <p className="comment__main-all--author">{comment.name}</p>
                                    <p className="comment__main-all--date">{comment.timestamp}</p>
                                </div>
                                <div className="comment__main-all--comment">{comment.comment}</div>
                            </div>
                            </section>
                        )
                    })}
                </div>
        </section>
    );
}
export default Comments;