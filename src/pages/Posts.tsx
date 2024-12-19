import { PostList, PostListFilter } from '../components/PostList/PostList';
import { PostForm } from '../components/PostForm/PostForm';
import { useEffect, useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { usePosts } from '../hooks/usePosts';
import { Post } from '../types/Post';
import PostService from '../api/PostService';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/getPagesCount';
import { usePagination } from '../hooks/usePagination';
import { Pagination } from '../components/Pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<PostListFilter>({
    sort: 'id',
    query: '',
  });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const foundPosts = usePosts(posts, filter);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit: number, page: number) => {
      if (page <= 0) {
        setPosts([]);
        setPage(1);
        return;
      }

      const response = await PostService.getAll(limit, page);
      setPosts([
        // ...posts,
        // ...response.data.filter((newPost) => {
        //   return !posts.some((oldPost) => oldPost.id === newPost.id);
        // }),
        ...response.data,
      ]);
      setTotalPages(getPagesCount(response.postsCount, limit));
    },
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  useEffect(() => {
    changePage(0);
  }, [limit]);

  function createPost(newPost: Post): void {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post: Post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function changePage(p: number | null = null) {
    if (p === null && page + 1 <= totalPages) {
      setPage(page + 1);
    } else {
      if (p !== null) {
        setPage(p);
      }
    }
  }

  return (
    <section className="section posts">
      <div className="container">
        <div className="sectionWrapper">
          <Modal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
          </Modal>

          <PostList
            remove={removePost}
            list={foundPosts}
            title="Posts list"
            filter={filter}
            setFilter={setFilter}
            setFormVisible={setModal}
            loading={isPostsLoading}
            error={postError}
            // setPage={changePage}
          />

          <Pagination
            pages={usePagination(totalPages)}
            current={page}
            setPage={changePage}
            limit={limit}
            changeLimit={setLimit}
          />
        </div>
      </div>
    </section>
  );
}

export default Posts;
