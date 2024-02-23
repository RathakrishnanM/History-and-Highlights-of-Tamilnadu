import Navigation from '../Components/Navigation.js'
import React from 'react';
import img from '../Components/images/Kindom/end-line.png';
import '../Component_CSS/blog.css';

export default function Blog(){
    const blogPosts = [
      {
        id: 1,
        title: "Exploring Ancient Temples",
        content: "Discover the rich history behind Tamil Nadu's ancient temples and their architectural marvels. Explore the intricate carvings and spiritual significance of each site.",
      },
      {
        id: 2,
        title: "Cultural Heritage Festivals",
        content: "Learn about the vibrant cultural festivals that showcase the diversity of Tamil Nadu's traditions. Immerse yourself in the colors, music, and rituals that make each festival a unique experience.",
      },
      {
        id: 3,
        title: "Natural Beauty of Nilgiri Hills",
        content: "Explore the breathtaking landscapes of Nilgiri Hills, adorned with lush greenery, tea plantations, and charming hill stations like Ooty and Coonoor.",
      },
      {
        id: 4,
        title: "Ancient Chola Temples",
        content: "Delve into the history of the Chola dynasty and its magnificent temples, including the Brihadeeswarar Temple in Thanjavur, showcasing Dravidian architecture.",
      },
      {
        id: 5,
        title: "Traditional Tamil Cuisine",
        content: "Savor the flavors of traditional Tamil cuisine, known for its diverse dishes, rich spices, and unique preparation methods. From dosas to Chettinad curries, it's a culinary delight.",
      },
      {
        id: 6,
        title: "Art and Handicrafts",
        content: "Discover the artistic heritage of Tamil Nadu through its handicrafts, including Tanjore paintings, Channapatna toys, and the famous Kanchipuram silk sarees.",
      },
      {
        id: 7,
        title: "Marina Beach: A Coastal Gem",
        content: "Unwind at Marina Beach, one of the longest urban beaches in the world. Enjoy the sea breeze, take a stroll along the promenade, and witness the vibrant atmosphere.",
      },
      {
        id: 8,
        title: "Pichavaram Mangrove Forest",
        content: "Embark on a boat ride through the enchanting Pichavaram Mangrove Forest, known for its intertwined waterways and diverse ecosystem. A must-visit for nature enthusiasts.",
      },
    ];
  
    return (
        <>
            <div className='head'>
                <h1>Blog</h1>
                <Navigation></Navigation>
            </div>

            <div className='welcome-blog'>
                <p>Welcome to our blog page where you can explore the history, culture, and tourism highlights of Tamil Nadu.</p>
            </div>

            <div className="blog-page">
        
                {blogPosts.map(post => (
                <div key={post.id} className="blog-post">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
                ))}
            </div>

            <div className='end-logo'>
                <img src={img}/>
            </div>
        </>
    );
  };