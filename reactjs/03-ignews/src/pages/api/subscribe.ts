import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { stripe } from "../../services/stripe";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const session = await getSession({ req });

        const stripeCustomer = stripe.customers.create({
            email: session.user.email
        })

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: (await stripeCustomer).id, 
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [{
                price: 'price_1JkHRuG5FnLAdke7Bq1WFyZZ', quantity: 1},
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        })
        return res.status(200).json({
            sessionId: stripeCheckoutSession.id
        })
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
    }