import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../api/PostService';
import { useEffect, useState } from 'react';
import { Post } from '../types/Post';
import { Loader } from '../components/UI/Loader/Loader';
import { ErrorView } from '../components/UI/ErrorView/ErrorView';
import { PostDetail } from '../components/PostDetail/PostDetail';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [fetchPostById, isLoading, error] = useFetching(
    async (id: string | undefined) => {
      setPost(id ? await PostService.getById(id) : null);
    },
  );

  useEffect(() => {
    fetchPostById(id);
  }, [id]);

  return (
    <section>
      <div className="container">
        <div className="sectionWrapper">
          {isLoading ? (
            <Loader />
          ) : !error && post ? (
            <PostDetail post={post} />
          ) : (
            <ErrorView error={error} />
          )}

          <hr />

          <h3>Post comments:</h3>
        </div>
      </div>
    </section>
  );
};

export default PostPage;
