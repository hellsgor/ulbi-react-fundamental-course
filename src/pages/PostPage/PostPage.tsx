import classes from './PostPage.module.css';

import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../api/PostService';
import { useEffect, useState } from 'react';
import { Post } from '../../types/Post';
import { Loader } from '../../components/UI/Loader/Loader';
import { getDate } from '../../utils/getDate';
import { ErrorView } from '../../components/UI/ErrorView/ErrorView';

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
            <div className={classes.loader}>
              <Loader />
            </div>
          ) : !error && post ? (
            <>
              <h1>You opened the post with ID = {id}</h1>

              <div className={classes.dataContainer}>
                <span>Title:</span>
                <h2>{post.title}</h2>
              </div>

              <div className={classes.dataContainer}>
                <span>Date:</span>
                <p>{getDate(post.id, 'en-US')}</p>
              </div>

              <div className={classes.dataContainer}>
                <span>Description:</span>
                <p>{post.body}</p>
              </div>

              <hr />

              <div className={classes.dataContainer}>
                <span>Comments:</span>
              </div>
            </>
          ) : (
            <ErrorView error={error} />
          )}
        </div>
      </div>
    </section>
  );
};

export default PostPage;
