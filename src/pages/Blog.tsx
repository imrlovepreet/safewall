import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, BookOpen } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogPosts';

function Blog() {
  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Blog & Resources
            </h1>
            <p className="text-xl text-brand-grey max-w-3xl mx-auto">
              Stay informed about the latest trends in IT and cybersecurity
            </p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-white dark:bg-brand-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-4 font-montserrat">Categories</h2>
            <p className="text-brand-dark/70 dark:text-white/70">Browse articles by topic</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogCategories.map((category) => (
              <Link
                key={category.id}
                to={`/blog/category/${category.id}`}
                className="bg-brand-grey/10 dark:bg-white/5 p-8 rounded-xl text-center hover:bg-brand-blue/5 dark:hover:bg-white/10 transition duration-200"
              >
                <BookOpen className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-montserrat text-brand-dark dark:text-white">{category.name}</h3>
                <p className="text-brand-dark/70 dark:text-white/70">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Posts */}
      <div className="py-16 bg-brand-grey dark:bg-black/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-12 font-montserrat">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
                  <h3 className="text-xl font-bold mb-2 font-montserrat text-brand-dark dark:text-white">
                    {post.title}
                  </h3>
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

export default Blog;