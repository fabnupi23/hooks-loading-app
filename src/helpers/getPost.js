const getPost = async () => {
    //comenzamos a hacer la petición 
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await fetch(url); //como es un proceso async ponemos el await para que espere a que termine antes de utilizar esta constante res.
    const post = await response.json();//Le damos formato a la respuesta.

    return post;
}

export { getPost };