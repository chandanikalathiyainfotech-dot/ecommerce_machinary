import React from 'react';
console.log(React);
import { useParams, Link } from "react-router-dom";
import {
    FaCalendarAlt,
    FaClock,
    FaArrowLeft,
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

function Blogdetails() {
    const { id } = useParams();

    const blogs = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600",
            title: "Top 5 Industrial Machinery Trends in 2026",
            date: "15 June 2026",
            category: "Industry News",
            readTime: "8 Min Read",
            content:
                "Industrial machinery is evolving rapidly through automation, artificial intelligence, predictive maintenance, and smart manufacturing technologies. Businesses are investing heavily in modern equipment to improve productivity and reduce operational costs.",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600",
            title: "How to Choose the Right Heavy Equipment",
            date: "10 June 2026",
            category: "Equipment Guide",
            readTime: "6 Min Read",
            content:
                "Selecting the right heavy equipment requires careful evaluation of project requirements, operating conditions, maintenance costs, and future scalability.",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600",
            title: "Maintenance Tips for Maximum Productivity",
            date: "05 June 2026",
            category: "Maintenance",
            readTime: "7 Min Read",
            content:
                "Regular inspections, lubrication schedules, and preventive maintenance are critical for ensuring machinery performance and reducing downtime.",
        },
    ];

    const blog = blogs.find((item) => item.id === Number(id));


    return (
        <div>
            <section className="pt-32 pb-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-amber-500 font-semibold mb-8"
                    >
                        <FaArrowLeft />
                        Back to Blogs
                    </Link>

                    <div className="text-center">

                        <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-600 rounded-full font-bold uppercase tracking-wider text-sm">
                            {blog.category}
                        </span>

                        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-[#0b1b3a] max-w-5xl mx-auto leading-tight">
                            {blog.title}
                        </h1>

                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-500">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-amber-500" />
                                {blog.date}
                            </div>

                            <div className="flex items-center gap-2">
                                <FaClock className="text-amber-500" />
                                {blog.readTime}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

                        {/* Main Content */}
                        <div>

                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-[500px] object-cover rounded-3xl"
                            />

                            {/* Share Buttons */}
                            <div className="flex gap-4 mt-8">
                                <button className="w-12 h-12 rounded-full bg-[#0b1b3a] text-white flex items-center justify-center hover:bg-amber-500 hover:text-[#0b1b3a] transition-all">
                                    <FaFacebookF />
                                </button>

                                <button className="w-12 h-12 rounded-full bg-[#0b1b3a] text-white flex items-center justify-center hover:bg-amber-500 hover:text-[#0b1b3a] transition-all">
                                    <FaTwitter />
                                </button>

                                <button className="w-12 h-12 rounded-full bg-[#0b1b3a] text-white flex items-center justify-center hover:bg-amber-500 hover:text-[#0b1b3a] transition-all">
                                    <FaLinkedinIn />
                                </button>
                            </div>

                            {/* Intro */}
                            <div className="mt-10">
                                <p className="text-lg text-gray-700 leading-9">
                                    {blog.content}
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid md:grid-cols-3 gap-6 my-14">

                                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                    <h3 className="text-4xl font-black text-amber-500">
                                        30%
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Higher Productivity
                                    </p>
                                </div>

                                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                    <h3 className="text-4xl font-black text-amber-500">
                                        45%
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Less Downtime
                                    </p>
                                </div>

                                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                    <h3 className="text-4xl font-black text-amber-500">
                                        24/7
                                    </h3>
                                    <p className="text-gray-700 mt-2">
                                        Monitoring
                                    </p>
                                </div>

                            </div>

                            {/* Content */}
                            <div className="space-y-8 text-lg text-gray-700 leading-9">
                                <p>
                                    Modern industries rely on smart machinery systems that
                                    integrate automation, analytics, and intelligent monitoring.
                                </p>

                                <p>
                                    Businesses adopting advanced equipment often experience
                                    improved production quality, reduced maintenance costs,
                                    and better operational efficiency.
                                </p>

                                <p>
                                    The future of industrial manufacturing is driven by
                                    innovation, connectivity, and data-driven decision making.
                                </p>
                            </div>

                            {/* Quote */}
                            <div className="my-16 bg-[#0b1b3a] rounded-3xl p-10">
                                <h3 className="text-3xl font-black text-amber-500 mb-4">
                                    Expert Insight
                                </h3>

                                <p className="text-white text-xl italic leading-relaxed">
                                    "The future of industrial machinery lies in automation,
                                    connectivity, and intelligent manufacturing systems."
                                </p>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">

                            {/* Author */}
                            <div className="bg-[#0b1b3a] rounded-3xl p-8">
                                <h3 className="text-2xl font-black text-white">
                                    About Author
                                </h3>

                                <p className="text-gray-300 mt-4 leading-7">
                                    Our industrial experts share practical insights,
                                    market trends, and machinery innovations to help
                                    businesses make better decisions.
                                </p>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-white border border-gray-200 rounded-3xl p-8">
                                <h3 className="text-2xl font-black text-[#0b1b3a] mb-6">
                                    Quick Facts
                                </h3>

                                <div className="space-y-4 text-gray-700">
                                    <p>✓ Smart Automation</p>
                                    <p>✓ AI Integration</p>
                                    <p>✓ Predictive Maintenance</p>
                                    <p>✓ Reduced Downtime</p>
                                    <p>✓ Better Efficiency</p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-amber-500 rounded-3xl p-8">
                                <h3 className="text-2xl font-black text-[#0b1b3a]">
                                    Need Machinery?
                                </h3>

                                <p className="mt-4 text-[#0b1b3a]">
                                    Explore our premium machinery collection.
                                </p>

                                <button className="mt-6 px-6 py-3 bg-[#0b1b3a] text-white rounded-xl font-bold">
                                    View Products
                                </button>
                            </div>

                        </div>

                    </div>

                    {/* Related Blogs */}
                    <div className="mt-24">
                        <h2 className="text-4xl font-black text-[#0b1b3a] mb-10">
                            Related Articles
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {blogs
                                .filter((item) => item.id !== blog.id)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-amber-500 hover:shadow-xl transition-all"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-56 w-full object-cover"
                                        />

                                        <div className="p-6">
                                            <h3 className="text-xl font-black text-[#0b1b3a] mb-3">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-500">
                                                {item.date}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                        </div>
                    </div>

                </div>
            </section>
        </div >
    );
}

export default Blogdetails;