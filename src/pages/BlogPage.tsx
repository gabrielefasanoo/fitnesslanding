import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: "Come Iniziare il Tuo Percorso Fitness",
      excerpt: "Guide complete e consigli pratici per iniziare il tuo viaggio nel fitness...",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
      date: "Feb 24, 2024",
      readTime: "5 min"
    },
    // ...altri post
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Blog</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <button className="mt-4 text-accent-500 font-medium hover:text-accent-600">
                    Leggi di più →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
