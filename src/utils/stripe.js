/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
 import { loadStripe } from '@stripe/stripe-js'

 let stripePromise
 const getStripe = () => {
   if (!stripePromise) {
       console.log(`${process.env.GATSBY_PUBLISHABLE_KEY}`);
     stripePromise = loadStripe(`${process.env.GATSBY_PUBLISHABLE_KEY}`)
   }
   return stripePromise
 }
 
 export default getStripe