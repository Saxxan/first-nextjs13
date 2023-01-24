const fetchPostComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchPostComments(id);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <small>{comment.email}</small>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
