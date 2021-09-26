import { useRouter } from 'next/router';

//Catch - All Routes: Fox Ex: /blog/blog_title or /blog/20/2021/blog_title
function BlogPostPage() {
  const router = useRouter();

  console.log('router', router.query);

  return (
    <div>
      <h1>The Blog Post Page</h1>
    </div>
  );
}

export default BlogPostPage;
