import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

function BlogPost() {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-brand-blue hover:text-brand-dark transition mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <div className="flex items-center space-x-6 text-sm text-brand-dark/60 mb-6">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </span>
          <span className="flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-brand-dark mb-6 font-montserrat">
          {post.title}
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-brand-dark/80 mb-8">
            {post.introduction}
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 font-montserrat">
            Key Takeaways
          </h2>
          <ul className="space-y-2 mb-8">
            {post.keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-brand-blue rounded-full mr-2 mt-2"></span>
                {takeaway}
              </li>
            ))}
          </ul>

          <div className="text-brand-dark/80 space-y-4 mb-12">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="bg-brand-dark rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
              Ready to Secure Your Business?
            </h3>
            <Link
              to={post.ctaLink}
              className="inline-block bg-brand-green text-brand-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              {post.ctaText}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogPost