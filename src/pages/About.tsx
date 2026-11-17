
import { Link } from 'react-router-dom';
import { Compass, Heart, Globe, Leaf, ArrowRight } from 'lucide-react';

function About() {
    return (
        <main className="bg-[#FAF9F6] text-[#252A27]">

            {/* Hero Section */}
            <section className="relative min-h-[420px] flex items-center justify-center bg-[#163B32] px-6 text-center">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm uppercase tracking-[4px] text-[#C5A46D]">
                        Discover the Pearl of the Indian Ocean
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        About WanderLanka
                    </h1>

                    <p className="text-base md:text-lg leading-8 text-[#E8DFCE]">
                        Your journey to discover the beauty, culture, and unforgettable
                        experiences of Sri Lanka begins here.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-sm uppercase tracking-[3px] text-[#A88955] mb-3">
                        Our Story
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#163B32] mb-6">
                        Explore Sri Lanka With Us
                    </h2>

                    <p className="text-gray-600 leading-8 mb-5">
                        WanderLanka is a travel discovery platform created to help
                        travelers explore the incredible beauty of Sri Lanka.
                    </p>

                    <p className="text-gray-600 leading-8 mb-5">
                        From golden beaches and ancient historical sites to beautiful
                        tea plantations and exciting wildlife experiences, we bring
                        Sri Lanka's most memorable destinations together in one place.
                    </p>

                    <p className="text-gray-600 leading-8">
                        Our goal is to make discovering and planning your next
                        Sri Lankan adventure simple, inspiring, and enjoyable.
                    </p>
                </div>

                <div className="h-[350px] rounded-2xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                        alt="Beautiful travel landscape"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-[#E8DFCE] py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                    <div className="bg-[#FAF9F6] rounded-2xl p-9">
                        <div className="w-14 h-14 rounded-full bg-[#163B32] flex items-center justify-center mb-6">
                            <Compass className="text-[#C5A46D]" size={27} />
                        </div>

                        <h3 className="text-2xl font-bold text-[#163B32] mb-4">
                            Our Mission
                        </h3>

                        <p className="text-gray-600 leading-8">
                            To inspire travelers to discover Sri Lanka by providing
                            useful destination information and helping them explore
                            unique travel experiences.
                        </p>
                    </div>

                    <div className="bg-[#FAF9F6] rounded-2xl p-9">
                        <div className="w-14 h-14 rounded-full bg-[#163B32] flex items-center justify-center mb-6">
                            <Heart className="text-[#C5A46D]" size={27} />
                        </div>

                        <h3 className="text-2xl font-bold text-[#163B32] mb-4">
                            Our Vision
                        </h3>

                        <p className="text-gray-600 leading-8">
                            To become a trusted travel discovery platform that showcases
                            Sri Lanka's natural beauty, rich heritage, and diverse
                            cultural experiences to the world.
                        </p>
                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-[3px] text-[#A88955] mb-3">
                        Why WanderLanka
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#163B32]">
                        Discover More, Experience More
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                    <div className="text-center p-7">
                        <Globe className="mx-auto text-[#A88955] mb-5" size={42} />
                        <h3 className="text-xl font-semibold text-[#163B32] mb-3">
                            Explore Destinations
                        </h3>
                        <p className="text-gray-600 leading-7">
                            Discover beautiful places across Sri Lanka, from beaches
                            to historical landmarks.
                        </p>
                    </div>

                    <div className="text-center p-7">
                        <Leaf className="mx-auto text-[#A88955] mb-5" size={42} />
                        <h3 className="text-xl font-semibold text-[#163B32] mb-3">
                            Discover Nature
                        </h3>
                        <p className="text-gray-600 leading-7">
                            Experience the island's stunning landscapes, wildlife,
                            mountains, and natural wonders.
                        </p>
                    </div>

                    <div className="text-center p-7">
                        <Heart className="mx-auto text-[#A88955] mb-5" size={42} />
                        <h3 className="text-xl font-semibold text-[#163B32] mb-3">
                            Create Memories
                        </h3>
                        <p className="text-gray-600 leading-7">
                            Find inspiration for meaningful journeys and unforgettable
                            travel experiences.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#163B32] py-16 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                    Ready to Explore Sri Lanka?
                </h2>

                <p className="text-[#E8DFCE] mb-8">
                    Start discovering the beauty of the island with WanderLanka.
                </p>

                <Link
                    to="/destinations"
                    className="inline-flex items-center gap-2 bg-[#C5A46D] text-[#163B32] px-8 py-3 rounded-full font-semibold hover:bg-[#E8DFCE] transition"
                >
                    Explore Destinations
                    <ArrowRight size={18} />
                </Link>
            </section>

        </main>
    );
}

export default About;
