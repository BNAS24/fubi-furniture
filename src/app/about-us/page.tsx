// pages/about.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Welcome to Fubi Furniture
        </Typography>
        <Typography variant="body1" paragraph>
          At <strong>Fubi Furniture</strong>, we believe that your home is a reflection of your unique style and taste. That&apos;s why we are dedicated to providing luxurious, high-quality furniture and home accessories that elevate your living spaces and bring your interior design visions to life.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2005, Fubi Furniture emerged from a passion for exceptional craftsmanship and a desire to create timeless pieces that blend comfort, elegance, and durability. Our journey began in a small workshop where artisans meticulously crafted each piece by hand, paying homage to traditional techniques while embracing innovative designs.
        </Typography>
        <Typography variant="body1" paragraph>
          Over the years, Fubi Furniture has grown into a renowned name in the furniture industry, known for our commitment to excellence and an unwavering focus on customer satisfaction. We take pride in our heritage and continuously strive to push the boundaries of design and functionality.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Our Philosophy
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Quality and Luxury:</strong> At the heart of Fubi Furniture is our dedication to quality and luxury. Each piece in our collection is crafted using the finest materials, sourced ethically and sustainably. We believe that true luxury is about more than just aesthetics – it&apos;s about creating furniture that stands the test of time.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Innovative Design:</strong> Our design team is constantly exploring new trends and techniques to ensure that our furniture and accessories are both stylish and functional. We blend classic elegance with contemporary flair, resulting in pieces that are not only visually stunning but also practical for modern living.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Customization:</strong> We understand that every home is unique, and so are your needs. Fubi Furniture offers bespoke solutions, allowing you to customize our pieces to fit your specific requirements. From fabric choices to finishes, we provide a range of options to help you create the perfect look.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Our Collection
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our extensive collection, which includes:
        </Typography>
        <ul>
          <li><Typography variant="body1">Pillows: Luxurious and comfortable pillows that add a touch of elegance and coziness to your living spaces.</Typography></li>
          <li><Typography variant="body1">Bedding: High-quality bedding sets that transform your bedroom into a serene and stylish retreat.</Typography></li>
          <li><Typography variant="body1">Chairs: A variety of chairs designed to offer both comfort and style, perfect for any room in your home.</Typography></li>
          <li><Typography variant="body1">Lamps: Elegant and functional lamps that illuminate your space with a warm, inviting glow.</Typography></li>
          <li><Typography variant="body1">Sofas: Sophisticated sofas crafted for ultimate comfort, making them the centerpiece of your living room.</Typography></li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom>
          Our Commitment
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Sustainability:</strong> We are committed to sustainable practices and environmentally friendly production methods. From sourcing materials responsibly to ensuring minimal waste, Fubi Furniture strives to protect our planet while delivering exceptional products.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. Our knowledgeable and friendly staff are here to assist you at every step, from selecting the right pieces to after-sales support. We believe in building lasting relationships with our customers, ensuring you receive the best service and experience.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Visit Us
        </Typography>
        <Typography variant="body1" paragraph>
          We invite you to visit our showroom and experience the elegance and comfort of Fubi Furniture firsthand. Our beautifully curated displays offer inspiration and allow you to see the quality and craftsmanship that define our brand.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Location:</strong> 123 Lux Avenue, King Of Prussia, PA 19406
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Showroom Hours:</strong>
          <br />- Monday to Friday: 10 AM - 7 PM
          <br />- Saturday: 10 AM - 6 PM
          <br />- Sunday: 12 PM - 5 PM
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Contact Us:</strong>
          <br />- Phone: (123) 456-7890
          <br />- Email: info@fubifurniture.com
        </Typography>

        <Typography variant="body1" paragraph>
          Follow us on social media for the latest updates, design tips, and exclusive offers:
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Instagram:</strong> @fubifurniture
          <br />- <strong>Facebook:</strong> facebook.com/fubifurniture
          <br />- <strong>Pinterest:</strong> pinterest.com/fubifurniture
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Join the Fubi Furniture Family
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you&apos;re furnishing a new home or looking to refresh your current space, Fubi Furniture offers the perfect blend of luxury, quality, and style. Join our family of satisfied customers and discover the difference that exceptional furniture can make in your home.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
