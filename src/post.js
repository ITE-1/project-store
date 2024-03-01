import { useState } from 'react';
import './post.scss';

const Post = () => {
const posts = [{id: 1, title: 'Post 1', descr: 'eeee2'},
                {id: 2, title: 'Post 2', descr: 'eeee2'}, 
                {id: 3, title: 'Post 3', descr: 'eeee2'}];

const [post, setNewPost] = useState([
{id: 1, title: 'Post 1', descr: 'eeee2'},
{id: 2, title: 'Post 2', descr: 'eeee2'}, 
{id: 3, title: 'Post 3', descr: 'eeee2'}]);

const [formData, setFormData] = useState({
    id: post.length + 1,
    title: '',
    descr: '',
})

const addNewPost = (e) => {
    e.preventDefault();
    const newPost = formData;
   
    const newPosts = [...posts, newPost];
    setNewPost(newPosts);
    console.log(post)
    console.log(formData);

}
    return (
        <section> 
            
            <form className='form'>
                    <label>Title
                    <input 
                        type='text' 
                        placeholder='enter Title name' 
                        onChange={(e) => setFormData({...formData, title: e.target.value})} />
                    </label>
                   
                    <label>Descr
                    <input 
                    type='descr' 
                    placeholder='enter descr name' 
                    onChange={(e) => setFormData({...formData, descr: e.target.value})}/>
                    </label>
                    <button onClick={(e) => addNewPost(e)}>New post</button>
                </form>
              <div className='post'>Post 
            <div className="post__list">
                
                {post.map(item => {
                    return  <div className="post__item">
                    <span>id - {item.id}</span>
                    <div className="post__item__title">{item.title}</div>
                    <div className="post__item__descr">{item.descr}</div>
                </div>
                })}
              
            
            </div>
            
        </div>
        </section>
      
    )
}

export default Post;