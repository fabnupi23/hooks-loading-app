import React, { useState, useRef, useEffect } from 'react'
import { getPost } from './helpers/getPost'

function Card() {
  const [post, setPost] = useState({ title: "post1"});
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);


  const updatePost =  () =>{
    //Ejecutamos la función que queremos en el helper 
    getPost() //Ejecutamos la función
        .then((newPost) =>{    //Y si esto tiene exito ejecuta esta función, que retorna como argumento lo que retorna getPost
          setTimeout(() =>{
              if(isMountedRef.current){
                setPost(newPost); //Acá le decimos que nos actualice los Post
                setLoading(false);
              }
          }, 1000);
        }) 
  }
  useEffect(() =>{
    updatePost();
    return () => {
      isMountedRef.current = false;
    }
  }, []);

  if(loading) return <h1>Loading...</h1>

  return (
    <div>
        <h1>{post.title}</h1>
    </div>
  )
}

export { Card };