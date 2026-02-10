import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle
} from 'lucide-react';
import { pgData } from '../mockData';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      roomType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-zinc-950">
      <section className="px-4 py-12 bg-gradient-to-br from-zinc-50 to-orange-50 dark:from-zinc-900 dark:to-orange-950/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us anytime!
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6">Get in Touch</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Fill out the form and we'll contact you shortly. Or call us directly for immediate assistance.
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Phone</h3>
                      <a href={`tel:${pgData.phone}`} className="text-orange-600 dark:text-orange-400 hover:underline block">
                        {pgData.phone}
                      </a>
                      <a href={`tel:${pgData.alternatePhone}`} className="text-orange-600 dark:text-orange-400 hover:underline block">
                        {pgData.alternatePhone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">WhatsApp</h3>
                      <a 
                        href={`https://wa.me/91${pgData.phone}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-600 dark:text-orange-400 hover:underline"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Email</h3>
                      <a href={`mailto:${pgData.email}`} className="text-orange-600 dark:text-orange-400 hover:underline">
                        {pgData.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Address</h3>
                      <address className="text-zinc-600 dark:text-zinc-400 not-italic">
                        {pgData.address.line1}<br />
                        {pgData.address.line2}<br />
                        {pgData.address.area}<br />
                        {pgData.address.city}, {pgData.address.state} {pgData.address.pincode}
                      </address>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Open Hours</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">{pgData.openHours}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <Card className="p-8 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-zinc-900 dark:text-zinc-300">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1.5 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-zinc-900 dark:text-zinc-300">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1.5 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                      placeholder="Your contact number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-zinc-900 dark:text-zinc-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1.5 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="roomType" className="text-zinc-900 dark:text-zinc-300">Interested Room Type</Label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full mt-1.5 px-3 py-2 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select a room type</option>
                      <option value="double">Double Occupancy - ₹12,000/month</option>
                      <option value="triple">Triple Sharing - ₹10,500/month</option>
                      <option value="four">Four Sharing - ₹7,500/month</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-zinc-900 dark:text-zinc-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-1.5 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto">
          <Card className="overflow-hidden border-zinc-200 dark:border-zinc-800">
            <iframe
              src="https://maps.google.com/maps?q=12.9603923,77.5679047&z=15&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SRM PG Location"
            ></iframe>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
