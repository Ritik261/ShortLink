import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const LandingPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-center font-extrabold text-white'>
        The only url shortener You Will need ❤️
      </h2>

      <form className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2' >
        <Input type="url" placeholder ='Enter Your Loooong URL?'  className='h-full flex-1 py-4 px-4'/>
        <Button type='submit' variant = 'destructive' className='h-full'>Shorten Me!</Button>
      </form>

      <img src="Banner.png" alt="Banner" className='my-10 px-10 items-center opacity-60'  />

      <Accordion type="multiple" collapsible className='w-full md:px-11'>
      <AccordionItem value="item-1">
  <AccordionTrigger>How does the URL shortener work?</AccordionTrigger>
  <AccordionContent>
    The URL shortener takes a long URL and converts it into a shorter version, making it easier to share. When someone clicks on the shortened link, they are redirected to the original URL.
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-2">
  <AccordionTrigger>Is there a limit on the number of URLs I can shorten?</AccordionTrigger>
  <AccordionContent>
    No, there is no limit on the number of URLs you can shorten. You can shorten as many URLs as you need, without any restrictions.
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-3">
  <AccordionTrigger>Can I track the performance of my shortened URLs?</AccordionTrigger>
  <AccordionContent>
    Yes, you can track the performance of your shortened URLs. Our analytics feature allows you to see how many clicks your links receive, where the traffic is coming from, and other useful metrics.
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-4">
  <AccordionTrigger>Is my data secure when using the URL shortener?</AccordionTrigger>
  <AccordionContent>
    Absolutely. We prioritize your privacy and security. All data is encrypted, and we do not share your information with third parties.
  </AccordionContent>
</AccordionItem>

</Accordion>

    </div>
  )
}

export default LandingPage