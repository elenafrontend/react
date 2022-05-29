import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
  // Sorting
  return useMemo(() => {
    if (sort) {
      return [...posts].sort(
        (a, b) => a[sort].localeCompare(b[sort])
      );
    }
    return posts;
  }, [sort, posts]);
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  // Searching
  return useMemo(() => {
    return sortedPosts.filter(
      post => post.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [sortedPosts, query]);
}