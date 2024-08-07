'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, Phone } from 'lucide-react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SectionTitle from '@/components/SectionTitle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <MaxWidthWrapper>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionTitle TextColor="black" VectorColor="Black" title="Contact" />
                    <h2 className="text-3xl font-bold text-center mt-8 mb-12">Get in Touch</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                <div className="relative">
                                    <Input id="name" type="text" placeholder="Your name" className="pl-10" />
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="surname" className="text-sm font-medium text-gray-700">Surname</label>
                                <div className="relative">
                                    <Input id="surname" type="text" placeholder="Your surname" className="pl-10" />
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <div className="relative">
                                    <Input id="email" type="email" placeholder="Your email" className="pl-10" />
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                                <div className="relative">
                                    <Input id="phone" type="tel" placeholder="Your phone number" className="pl-10" />
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                            <Textarea id="message" placeholder="Your message..." className="h-32" />
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </MaxWidthWrapper>
        </section>
    )
}

export default Contact