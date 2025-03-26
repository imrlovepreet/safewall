import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { blogPosts, blogCategories } from '../../data/blogPosts';

function BlogCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = blogCategories.find(c => c.id === categoryId);
  const posts = blogPosts.filter(post => post.category === categoryId);

  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              {category.name}
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-brand-dark/50 rounded-xl shadow-sm border border-brand-grey/10 dark:border-white/10 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-brand-dark/60 dark:text-white/60 mb-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 font-montserrat text-brand-dark dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-brand-dark/70 dark:text-white/70 mb-4">
                    {post.introduction.substring(0, 150)}...
                  </p>
                  <Link
                    to={`/blog/post/${post.id}`}
                    className="inline-flex items-center text-brand-blue hover:text-brand-dark dark:hover:text-white transition"
                  >
                    Read More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCategory;