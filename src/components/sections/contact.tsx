import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Contact form submitted:', data)
      setIsSubmitted(true)
      reset()
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error('Error submitting contact form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#191919] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your marketing? Let's discuss how we can help 
            grow your business with our cloud-based solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#191919] mb-4">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-[#35c677] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#191919] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for your message. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          {...register('name')}
                          placeholder="Your Name *"
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="Your Email *"
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        {...register('company')}
                        placeholder="Company Name"
                      />
                      <Input
                        {...register('phone')}
                        placeholder="Phone Number"
                      />
                    </div>

                    <div>
                      <Textarea
                        {...register('message')}
                        placeholder="Tell us about your project *"
                        rows={6}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full flex items-center justify-center space-x-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#191919] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#35c677] rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#191919]">Email</p>
                    <p className="text-gray-600">hello@barecloudz.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#35c677] rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#191919]">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#35c677] rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#191919]">Office</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#35c677] border-[#35c677]">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Ready to get started?
                </h4>
                <p className="text-green-100 mb-6">
                  Schedule a free consultation to discuss your marketing goals 
                  and see how we can help your business grow.
                </p>
                <Button variant="outline" className="bg-white text-[#35c677] border-white hover:bg-gray-50">
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact