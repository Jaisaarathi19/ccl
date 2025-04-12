// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
const App: React.FC = () => {
const [isNavOpen, setIsNavOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 50);
};
window.addEventListener('scroll', handleScroll);
return () => {
window.removeEventListener('scroll', handleScroll);
};
}, []);
return (
<div className="font-sans min-h-screen">
{/* Navigation */}
<header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#7B0000] shadow-lg py-2' : 'bg-gradient-to-b from-black/50 to-transparent py-4'}`}>
<div className="container mx-auto px-4">
<div className="flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-30 h-20 flex items-center justify-center overflow-hidden">
<img src="/codde label logo.png" alt="CODDE LABELS Logo" className="w-full h-full object-contain" />
</div>
<div>
<h1 className="text-white text-2xl font-bold font-['Montserrat']">CODDE LABELS</h1>
<p className="text-white/80 text-sm hidden sm:block">Premium Label Manufacturers</p>
</div>
</div>

{/* Desktop Navigation */}
<nav className="hidden lg:flex items-center space-x-8">
{['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
<a
key={item}
href={`#${item.toLowerCase()}`}
className="text-white font-medium hover:text-white relative group cursor-pointer whitespace-nowrap transition-all duration-300 transform hover:scale-105"
>
{item}
<span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
))}
<a href="tel:+919688712777" className="ml-4 bg-white text-[#7B0000] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 active:scale-95 flex items-center space-x-2 !rounded-button whitespace-nowrap">
<i className="fas fa-phone-alt text-sm"></i>
<span>Get Quote</span>
</a>
</nav>

{/* Mobile Navigation Toggle */}
<div className="lg:hidden flex items-center space-x-4">
<button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 !rounded-button whitespace-nowrap">
<i className="fas fa-phone-alt text-white text-sm"></i>
</button>
<button
className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
onClick={() => setIsNavOpen(!isNavOpen)}
>
<i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'} text-white text-sm`}></i>
</button>
</div>
</div>

{/* Mobile Navigation Menu */}
<div className={`lg:hidden ${isNavOpen ? 'max-h-[400px] py-4' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`}>
<div className="bg-white/10 backdrop-blur-lg rounded-2xl mt-4">
{['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
<a
key={item}
href={`#${item.toLowerCase()}`}
className="flex items-center space-x-3 px-6 py-4 text-white hover:bg-white/20 transition-all duration-300 transform hover:translate-x-1 cursor-pointer"
onClick={() => setIsNavOpen(false)}
>
<i className={`fas fa-${item.toLowerCase() === 'home' ? 'home' : 
item.toLowerCase() === 'about' ? 'info-circle' : 
item.toLowerCase() === 'services' ? 'cogs' : 
item.toLowerCase() === 'gallery' ? 'images' : 
'envelope'} text-sm`}></i>
<span>{item}</span>
</a>
))}
<div className="px-6 py-4 border-t border-white/10">
<button className="w-full bg-white text-[#7B0000] py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 !rounded-button whitespace-nowrap">
<i className="fas fa-phone-alt text-sm"></i>
<span>Get Quote</span>
</button>
</div>
</div>
</div>
</div>
</header>
{/* Hero Section */}
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img
src="https://readdy.ai/api/search-image?query=Elegant%20textile%20pattern%20background%20with%20subtle%20maroon%20and%20white%20threads%20woven%20together%20in%20a%20professional%20pattern%2C%20high-quality%20fabric%20texture%2C%20minimalist%20design%2C%20soft%20lighting%2C%20premium%20appearance%2C%20perfect%20for%20a%20label%20manufacturing%20company%20website%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape"
alt="Textile Background"
className="w-full h-full object-cover object-top opacity-20"
/>
<div className="absolute inset-0 bg-gradient-to-r from-[#7B0000]/90 to-[#7B0000]/70"></div>
</div>
<div className="container mx-auto px-4 z-10 text-center">
<div className="animate-fadeIn">
<h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Montserrat']">We Make The Brand</h2>
<p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
Suppliers of Woven & Printed Labels, Hang Tags & Garment Printing
</p>
<a href="#services" className="bg-white text-[#7B0000] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 active:scale-95 cursor-pointer !rounded-button whitespace-nowrap inline-block">
Explore Our Services
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
<a href="#about" className="text-white">
<i className="fas fa-chevron-down text-2xl"></i>
</a>
</div>
</section>
{/* About Section */}
<section id="about" className="py-20 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#7B0000] mb-4 font-['Montserrat']">About Us</h2>
<div className="w-24 h-1 bg-[#7B0000] mx-auto"></div>
</div>
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2 overflow-hidden rounded-lg shadow-lg">
<img
src="https://readdy.ai/api/search-image?query=Professional%20Indian%20businessman%20in%20formal%20attire%20standing%20confidently%20in%20a%20modern%20textile%20manufacturing%20facility%2C%20surrounded%20by%20label%20manufacturing%20equipment%2C%20warm%20lighting%2C%20professional%20portrait%20style%2C%20high-quality%20professional%20photograph&width=600&height=700&seq=founder&orientation=portrait"
alt="Nagaraj - Founder"
className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="md:w-1/2">
<h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Montserrat']">Our Story</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
Founded by Mr. Nagaraj, CODDE LABELS has established itself as a premier label manufacturing company based in Chennai. With years of experience in the textile industry, we have perfected the art of creating high-quality labels that elevate brands.
</p>
<p className="text-gray-600 mb-6 leading-relaxed">
Our commitment to excellence, attention to detail, and customer-focused approach has made us a trusted partner for businesses across various industries. We combine traditional craftsmanship with modern technology to deliver products that meet the highest standards.
</p>
<div className="space-y-6">
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-[#7B0000] flex items-center justify-center mr-4">
<i className="fas fa-check text-white"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Quality Assurance</h4>
<p className="text-gray-600">Every product undergoes rigorous quality checks</p>
</div>
</div>

<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-[#7B0000] flex items-center justify-center mr-4">
<i className="fas fa-certificate text-white"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Premium Materials</h4>
<p className="text-gray-600">We use only the finest materials for durability and appearance</p>
</div>
</div>

<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-[#7B0000] flex items-center justify-center mr-4">
<i className="fas fa-sync-alt text-white"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Consistent Production</h4>
<p className="text-gray-600">Standardized processes ensure uniformity across all orders</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Services Section */}
<section id="services" className="py-20 bg-gray-50 overflow-hidden">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#7B0000] mb-4 font-['Montserrat']">Our Services</h2>
<div className="w-24 h-1 bg-[#7B0000] mx-auto mb-6"></div>
<p className="text-gray-600 max-w-2xl mx-auto">
We offer a comprehensive range of labeling solutions to meet all your branding needs
</p>
</div>
<div className="relative">
<div className="flex space-x-8 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
{[
{
title: "Woven Labels",
icon: "fa-tags",
description: "High-quality woven labels with intricate designs and durability for premium branding",
image: "https://readdy.ai/api/search-image?query=Close-up%20of%20high-quality%20woven%20fabric%20labels%20with%20intricate%20thread%20patterns%2C%20professional%20textile%20manufacturing%2C%20premium%20brand%20labels%20on%20white%20background%2C%20detailed%20stitching%20visible%2C%20clean%20and%20professional%20product%20photography&width=400&height=300&seq=woven&orientation=landscape"
},
{
title: "Printed Labels",
icon: "fa-print",
description: "Vibrant printed labels with exceptional color accuracy and long-lasting finish",
image: "https://readdy.ai/api/search-image?query=Colorful%20printed%20fabric%20labels%20with%20vibrant%20designs%20and%20clear%20text%2C%20professional%20product%20photography%20on%20white%20background%2C%20showing%20various%20printed%20label%20samples%20for%20clothing%20and%20textiles%2C%20high-resolution%20detail%20of%20printing%20quality&width=400&height=300&seq=printed&orientation=landscape"
},
{
title: "Hang Tags",
icon: "fa-tag",
description: "Custom hang tags that complement your products and enhance brand recognition",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20elegant%20hang%20tags%20for%20clothing%20with%20string%20attachments%2C%20various%20shapes%20and%20designs%2C%20professional%20product%20photography%20on%20white%20background%2C%20retail%20clothing%20tags%20with%20brand%20logos%20and%20information%2C%20high-quality%20paper%20materials&width=400&height=300&seq=tags&orientation=landscape"
},
{
title: "Garment Printing",
icon: "fa-tshirt",
description: "Professional garment printing services with attention to detail and quality",
image: "https://readdy.ai/api/search-image?query=Professional%20garment%20printing%20process%20in%20a%20manufacturing%20facility%2C%20screen%20printing%20on%20t-shirts%2C%20detailed%20view%20of%20printing%20equipment%20and%20freshly%20printed%20garments%2C%20industrial%20textile%20printing%20machinery%2C%20clean%20professional%20environment&width=400&height=300&seq=printing&orientation=landscape"
}
].map((service, index) => (
<div 
key={index}
className="w-80 flex-shrink-0 snap-center bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
>
<div className="h-48 overflow-hidden relative">
<img
src={service.image}
alt={service.title}
className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#7B0000]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<h3 className="text-white text-xl font-bold font-['Montserrat']">{service.title}</h3>
</div>
</div>
<div className="p-6 text-center">
<div className="w-20 h-20 rounded-full bg-[#7B0000] flex items-center justify-center mx-auto mb-4 transform -translate-y-12 group-hover:rotate-12 transition-transform duration-500">
<i className={`fas ${service.icon} text-white text-3xl`}></i>
</div>
<p className="text-gray-600 -mt-8">{service.description}</p>
</div>
</div>
))}
</div>
</div>
</div>
</section>
{/* Gallery Section */}
<section id="gallery" className="py-20 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#7B0000] mb-4 font-['Montserrat']">Our Work</h2>
<div className="w-24 h-1 bg-[#7B0000] mx-auto mb-6"></div>
<p className="text-gray-600 max-w-2xl mx-auto">
Browse through our portfolio of high-quality label products
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{[
{
title: "Premium Woven Labels",
category: "Woven Labels",
image: "https://readdy.ai/api/search-image?query=Close-up%20of%20premium%20woven%20clothing%20labels%20with%20gold%20thread%20details%2C%20attached%20to%20luxury%20garment%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20showing%20intricate%20weaving%20pattern%20and%20brand%20logo%2C%20high-quality%20textile%20manufacturing&width=400&height=400&seq=gallery1&orientation=squarish"
},
{
title: "Custom Printed Labels",
category: "Printed Labels",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20colorful%20printed%20fabric%20labels%20with%20various%20brand%20logos%20and%20care%20instructions%2C%20arranged%20neatly%20on%20white%20background%2C%20professional%20product%20photography%20showing%20printing%20quality%20and%20color%20accuracy%2C%20textile%20industry%20manufacturing%20samples&width=400&height=400&seq=gallery2&orientation=squarish"
},
{
title: "Luxury Hang Tags",
category: "Hang Tags",
image: "https://readdy.ai/api/search-image?query=Elegant%20luxury%20hang%20tags%20with%20gold%20foil%20details%20and%20embossed%20logos%2C%20attached%20with%20black%20string%2C%20professional%20product%20photography%20on%20dark%20background%2C%20retail%20clothing%20tags%20for%20high-end%20fashion%20brands%2C%20premium%20paper%20materials&width=400&height=400&seq=gallery3&orientation=squarish"
},
{
title: "Designer T-Shirt Printing",
category: "Garment Printing",
image: "https://readdy.ai/api/search-image?query=Close-up%20of%20professionally%20printed%20design%20on%20high-quality%20t-shirt%20fabric%2C%20showing%20vibrant%20colors%20and%20precise%20details%2C%20textile%20printing%20craftsmanship%2C%20garment%20manufacturing%20process%20result%2C%20clean%20product%20photography%20on%20neutral%20background&width=400&height=400&seq=gallery4&orientation=squarish"
},
{
title: "Satin Labels Collection",
category: "Woven Labels",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20satin%20woven%20labels%20with%20smooth%20texture%20and%20shiny%20finish%2C%20various%20sizes%20and%20designs%2C%20professional%20product%20photography%20on%20light%20background%2C%20luxury%20clothing%20labels%20with%20detailed%20brand%20logos%2C%20premium%20textile%20manufacturing&width=400&height=400&seq=gallery5&orientation=squarish"
},
{
title: "Eco-Friendly Tags",
category: "Hang Tags",
image: "https://readdy.ai/api/search-image?query=Eco-friendly%20recycled%20paper%20hang%20tags%20with%20natural%20twine%20attachments%2C%20minimalist%20design%20with%20earthy%20colors%2C%20sustainable%20packaging%20materials%2C%20professional%20product%20photography%20on%20wooden%20background%2C%20environmentally%20conscious%20brand%20identity%20elements&width=400&height=400&seq=gallery6&orientation=squarish"
}
].map((item, index) => (
<div
key={index}
className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
>
<img
src={item.image}
alt={item.title}
className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<h3 className="text-white text-xl font-bold mb-1 font-['Montserrat']">{item.title}</h3>
<p className="text-gray-200">{item.category}</p>
</div>
</div>
))}
</div>
<div className="text-center mt-12">
<button className="bg-[#7B0000] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#5a0000] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
View More Projects
</button>
</div>
</div>
</section>
{/* Contact Section */}
<section id="contact" className="py-20 bg-gray-50">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#7B0000] mb-4 font-['Montserrat']">Contact Us</h2>
<div className="w-24 h-1 bg-[#7B0000] mx-auto mb-6"></div>
<p className="text-gray-600 max-w-2xl mx-auto">
Get in touch with us for inquiries, quotes, or any information about our services
</p>
</div>
<div className="flex flex-col lg:flex-row gap-12">
<div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
<h3 className="text-2xl font-bold text-gray-800 mb-6 font-['Montserrat']">Send Us a Message</h3>
<form onSubmit={async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);
  
  try {
    const result = await emailjs.send(
      'service_8f2zidk',
      'template_h5f95ej',
      {
        from_name: data.name,
        from_email: data.email,
        phone_number: data.phone,
        message: data.message,
        to_email: 'coddelabel@gmail.com'
      },
      'vq_rCGqHOalH_6Etx'
    );
    
    if (result.status === 200) {
      alert('Thank you! Your message has been sent successfully.');
      const form = e.currentTarget as HTMLFormElement;
      if (form) {
        form.reset();
      }
    } else {
      alert('Message failed to send. Please try again later.');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    alert('There was an error sending your message. Please check your information and try again.');
  }
}}>
<div className="mb-6">
<label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
<input
type="text"
id="name"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B0000] focus:border-transparent transition-all duration-300 text-sm"
placeholder="Your name"
/>
</div>
<div className="mb-6">
<label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
<input
type="email"
id="email"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B0000] focus:border-transparent transition-all duration-300 text-sm"
placeholder="Your email"
/>
</div>
<div className="mb-6">
<label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
<input
type="tel"
id="phone"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B0000] focus:border-transparent transition-all duration-300 text-sm"
placeholder="Your phone number"
/>
</div>
<div className="mb-6">
<label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
<textarea
id="message"
rows={4}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B0000] focus:border-transparent transition-all duration-300 text-sm"
placeholder="Your message"
></textarea>
</div>
<button
type="submit"
className="w-full bg-[#7B0000] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#5a0000] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
Send Message
</button>
</form>
</div>
<div className="lg:w-1/2">
<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
<h3 className="text-2xl font-bold text-gray-800 mb-6 font-['Montserrat']">Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start">
<div className="w-12 h-12 rounded-full bg-[#7B0000]/10 flex items-center justify-center mr-4 flex-shrink-0">
<i className="fas fa-user text-[#7B0000]"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Nagaraj</h4>
<p className="text-gray-600">
<a href="tel:9688712777" className="hover:text-[#7B0000] transition-colors duration-300 cursor-pointer">
+91 9688712777
</a>
</p>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 rounded-full bg-[#7B0000]/10 flex items-center justify-center mr-4 flex-shrink-0">
<i className="fas fa-phone text-[#7B0000]"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Phone</h4>
<p className="text-gray-600">
<a href="tel:9840574284" className="hover:text-[#7B0000] transition-colors duration-300 cursor-pointer">
+91 9840574284
</a>
<br />
<a href="tel:9841812777" className="hover:text-[#7B0000] transition-colors duration-300 cursor-pointer">
+91 9841812777
</a>
</p>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 rounded-full bg-[#7B0000]/10 flex items-center justify-center mr-4 flex-shrink-0">
<i className="fas fa-envelope text-[#7B0000]"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Email</h4>
<p className="text-gray-600">
<a href="mailto:coddelabel@gmail.com" className="hover:text-[#7B0000] transition-colors duration-300 cursor-pointer">
coddelabel@gmail.com
</a>
</p>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 rounded-full bg-[#7B0000]/10 flex items-center justify-center mr-4 flex-shrink-0">
<i className="fas fa-map-marker-alt text-[#7B0000]"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Address</h4>
<p className="text-gray-600">
#1, Pillaiyar Koil Street, Padikuppam,<br />
Koyambedu, Chennai - 600107
</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
<iframe 
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.8958159464597!2d80.1887932!3d13.0780661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266aabddedd99%3A0x89a168a311d67710!2sMADINA%20FOOTWEAR!5e0!3m2!1sen!2sin!4v1744481566164!5m2!1sen!2sin" 
width="600" 
height="450" 
style={{ border: 0, width: '100%', height: '100%' }} 
allowFullScreen={true} 
loading="lazy" 
referrerPolicy="no-referrer-when-downgrade"
title="CODDE LABELS Location"></iframe>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-[#7B0000] text-white pt-16 pb-8">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div>
<h3 className="text-2xl font-bold mb-6 font-['Montserrat']">CODDE LABELS</h3>
<p className="mb-6 text-gray-300">
We Make The Brand - Suppliers of high-quality labels and tags for the textile industry.
</p>
<div className="flex space-x-4">
<a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
<i className="fab fa-facebook-f text-white"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
<i className="fab fa-twitter text-white"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
<i className="fab fa-instagram text-white"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
<i className="fab fa-linkedin-in text-white"></i>
</a>
</div>
</div>
<div>
<h3 className="text-2xl font-bold mb-6 font-['Montserrat']">Quick Links</h3>
<ul className="space-y-3">
  <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
  <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
  <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
  <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-300">Gallery</a></li>
  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-2xl font-bold mb-6 font-['Montserrat']">Business Hours</h3>
<ul className="space-y-3">
  <li className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</li>
  <li className="text-gray-300">Saturday: 9:00 AM - 1:00 PM</li>
  <li className="text-gray-300">Sunday: Closed</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} CODDE LABELS. All rights reserved.</p>
<p className="text-gray-400 text-sm">Designed with <i className="fas fa-heart text-red-500"></i> for quality labels</p>
</div>
</div>
</div>
</footer>
</div>
);
};

export default App;