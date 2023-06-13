import './App.css';
import Post from './Post'
import { useState, useEffect } from 'react';
import {db} from './firebase';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    //code
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    })
  }, []);


  return (
    <div className="app">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2>I am a modal</h2>
          </div>
        </Modal>

      <div className = "app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      
      <h1>Hello</h1>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
    </div>
  );
}

export default App;
