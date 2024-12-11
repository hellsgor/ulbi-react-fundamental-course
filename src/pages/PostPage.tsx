import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();

  return (
    <section>
      <div className="container">
        <div className="sectionWrapper">
          <h1>You opened the post with ID = {id}</h1>
        </div>
      </div>
    </section>
  );
};

export default PostPage;
