 import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "../Editor";

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);


  async function createNewPost(ev) {

    
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <form className="edit-post-form" onSubmit={createNewPost}>
      <h4>Enter Name of Car</h4>
      <input type="title"
             placeholder={'Car Name'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <h4>Enter Car Summary</h4>
      <input type="summary"
             placeholder={'Description'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <h4>Upload Car Image</h4>
      <input type="file"
             onChange={ev => setFiles(ev.target.files)} />
      <h4>Enter Car Description</h4>
      <Editor value={content} onChange={setContent} />
      <button className="button-17" style={{marginTop:'5px'}}>Create Post</button>
    </form>
  );
}