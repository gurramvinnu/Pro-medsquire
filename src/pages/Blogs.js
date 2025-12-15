import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Blogs.css';
import postsData from '../data/blogPosts';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';

// Minimal markdown -> HTML helper for basic formatting used in posts
function mdToHtml(md) {
  if (!md) return '';
  let html = md;
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/^---$/gim, '<hr/>');
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  
  const lines = html.split(/\r?\n/);
  let out = [];
  let inList = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('* ')) {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push('<li>' + trimmed.substring(2) + '</li>');
    } else {
      if (inList) { out.push('</ul>'); inList = false; }
      if (trimmed === '') { out.push(''); }
      else if (/^<h[1-3]>/i.test(trimmed) || /^<hr\/>/.test(trimmed)) { out.push(trimmed); }
      else out.push('<p>' + trimmed + '</p>');
    }
  }
  if (inList) out.push('</ul>');
  return out.join('\n');
}

const Blogs = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [showShareModal, setShowShareModal] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const posts = postsData;

  // Check URL for blog ID parameter on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const blogId = params.get('id');
    if (blogId) {
      const id = parseInt(blogId);
      if (!isNaN(id)) {
        setExpandedId(id);
        // Scroll to the expanded blog card
        setTimeout(() => {
          const element = document.getElementById(`blog-${id}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location.search]);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
    // Update URL without page reload
    if (expandedId === id) {
      navigate('/blogs');
    } else {
      navigate(`/blogs?id=${id}`);
    }
  };

  const toggleShareModal = (id) => {
    setShowShareModal(showShareModal === id ? null : id);
  };

  const getBlogUrl = (id) => {
    return `${window.location.origin}/blogs?id=${id}`;
  };

  const handleCopyLink = (id) => {
    const url = getBlogUrl(id);
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('Link copied to clipboard!');
        setShowShareModal(null);
      })
      .catch(err => console.error('Failed to copy:', err));
  };

  return (
    <div className="blogs-page container">
      <h1 className="blogs-heading">Blogs</h1>
      <div className="blogs-cards">
        {posts.map((p) => (
          <article 
            key={p.id} 
            id={`blog-${p.id}`}
            className={`blog-card ${expandedId === p.id ? 'expanded' : ''}`}
          >
            <div className="card-image-wrapper">
              {p.image && (
                <div className="card-image">
                  <img src={p.image} alt={p.title} />
                </div>
              )}
              <div className="card-date-overlay">
                {new Date(p.date).toLocaleDateString('en-US', { 
                  day: 'numeric',
                  month: 'short'
                })}
              </div>
            </div>
            
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">{p.title}</h3>
                <div className="card-meta">
                  <span className="card-author">By {p.author || 'Admin'}</span>
                  <span className="card-read-time">{p.readTime || '5 min read'}</span>
                </div>
              </div>
              
              <div className="card-excerpt">
                {p.excerpt || p.content.split('\n').slice(0, 3).join(' ').substring(0, 150) + '...'}
              </div>
              
              <div className="card-footer">
                <div className="card-tags">
                  {p.tags && p.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="card-actions">
                  <button 
                    className="btn btn-primary" 
                    onClick={() => toggleExpand(p.id)}
                  >
                    {expandedId === p.id ? 'Collapse' : 'Read More'}
                  </button>
                  
                  <div className="share-container">
                    <button 
                      className="share-btn"
                      onClick={() => toggleShareModal(p.id)}
                    >
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                      </svg>
                    </button>
                    
                    {showShareModal === p.id && (
                      <div className="share-modal">
                        <div className="share-modal-content">
                          <h4>Share this article</h4>
                          <div className="share-buttons">
                            <FacebookShareButton url={getBlogUrl(p.id)} quote={p.title}>
                              <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            
                            <TwitterShareButton url={getBlogUrl(p.id)} title={p.title}>
                              <TwitterIcon size={32} round />
                            </TwitterShareButton>
                            
                            <LinkedinShareButton url={getBlogUrl(p.id)} title={p.title}>
                              <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                            
                            <WhatsappShareButton url={getBlogUrl(p.id)} title={p.title}>
                              <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                            
                            <button 
                              className="copy-link-btn"
                              onClick={() => handleCopyLink(p.id)}
                            >
                              Copy Link
                            </button>
                          </div>
                          <button 
                            className="close-share-btn"
                            onClick={() => setShowShareModal(null)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {expandedId === p.id && (
                <div className="card-full-content">
                  <div 
                    className="card-full" 
                    dangerouslySetInnerHTML={{ __html: mdToHtml(p.content) }} 
                  />
                  
                  <div className="article-share-footer">
                    <p>Share this article:</p>
                    <div className="article-share-buttons">
                      <FacebookShareButton url={getBlogUrl(p.id)} quote={p.title}>
                        <FacebookIcon size={40} round />
                      </FacebookShareButton>
                      
                      <TwitterShareButton url={getBlogUrl(p.id)} title={p.title}>
                        <TwitterIcon size={40} round />
                      </TwitterShareButton>
                      
                      <LinkedinShareButton url={getBlogUrl(p.id)} title={p.title}>
                        <LinkedinIcon size={40} round />
                      </LinkedinShareButton>
                      
                      <WhatsappShareButton url={getBlogUrl(p.id)} title={p.title}>
                        <WhatsappIcon size={40} round />
                      </WhatsappShareButton>
                      
                      <button 
                        className="copy-link-btn"
                        onClick={() => handleCopyLink(p.id)}
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;