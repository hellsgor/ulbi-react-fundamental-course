import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../api/PostService';
import { useEffect, useState } from 'react';
import { Post } from '../types/Post';
import { Loader } from '../components/UI/Loader/Loader';
import { ErrorView } from '../components/UI/ErrorView/ErrorView';
import { PostDetail } from '../components/PostDetail/PostDetail';
import { CommentListType } from '../types/Comment';
import { CommentList } from '../components/CommentList/CommentList';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<CommentListType | null>(null);
  const [fetchPostById, isLoading, error] = useFetching(
    async (id: string | undefined) => {
      setPost(id ? await PostService.getById(id) : null);
    },
  );
  const [fetchComments, isCommentsLoading, commentsError] = useFetching(
    async (id: string | undefined) => {
      setComments(id ? await PostService.getComments(id) : null);
    },
  );

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
  }, [id]);

  return (
    <section>
      <div className="container">
        <div className="sectionWrapper">
          {isLoading || isCommentsLoading ? (
            <Loader />
          ) : !error && post ? (
            <>
              <PostDetail post={post} />
              <hr />
              {comments ? (
                <CommentList comments={comments} />
              ) : (
                <p>Comments on the post were not found :(</p>
              )}
            </>
          ) : (
            <ErrorView error={error || commentsError} />
          )}
        </div>
      </div>
    </section>
  );
};

export default PostPage;
