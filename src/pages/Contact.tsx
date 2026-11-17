
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const mailSubject = encodeURIComponent(formData.subject);
        const mailBody = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );

        window.location.href =
            `mailto:?subject=${mailSubject}&body=${mailBody}`;
    };

    return (
        <main className="bg-[#FAF9F6] text-[#252A27]">

            {/* Hero */}
            <section className="bg-[#163B32] py-24 px-6 text-center">
                <p className="text-sm uppercase tracking-[4px] text-[#C5A46D] mb-4">
                    We'd Love to Hear From You
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Contact Us
                </h1>
                <p className="max-w-2xl mx-auto text-[#E8DFCE] leading-8">
                    Have questions or need help planning your next adventure?
                    Get in touch with us.
                </p>
            </section>

            {/* Contact Content */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-5 gap-12">

                    {/* Contact Information */}
                    <div className="lg:col-span-2">
                        <p className="text-sm uppercase tracking-[3px] text-[#A88955] mb-3">
                            Get In Touch
                        </p>

                        <h2 className="text-3xl font-bold text-[#163B32] mb-5">
                            Let's Start a Conversation
                        </h2>

                        <p className="text-gray-600 leading-8 mb-10">
                            Whether you need destination recommendations, travel
                            information, or assistance with a travel package,
                            we're here to help.
                        </p>

                        <div className="space-y-7">

                            <div className="flex gap-4 items-start">
                                <div className="bg-[#E8DFCE] p-3 rounded-xl">
                                    <Mail className="text-[#163B32]" size={23} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#163B32]">Email</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Send us your questions through the contact form.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-[#E8DFCE] p-3 rounded-xl">
                                    <MapPin className="text-[#163B32]" size={23} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#163B32]">Location</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Sri Lanka
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-[#E8DFCE] p-3 rounded-xl">
                                    <Clock className="text-[#163B32]" size={23} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#163B32]">Availability</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Send us a message anytime.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-7 md:p-10">
                        <h2 className="text-2xl font-bold text-[#163B32] mb-2">
                            Send Us a Message
                        </h2>

                        <p className="text-gray-500 text-sm mb-8">
                            Fill out the form below and tell us how we can help.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A88955]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A88955]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) =>
                                        setFormData({ ...formData, subject: e.target.value })
                                    }
                                    placeholder="Enter subject"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A88955]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    placeholder="Write your message..."
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#A88955] resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 bg-[#163B32] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#245447] transition"
                            >
                                Send Message <Send size={17} />
                            </button>

                        </form>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Contact;
