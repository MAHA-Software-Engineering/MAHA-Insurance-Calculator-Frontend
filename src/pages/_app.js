import '../app/globals.css'
import { Amplify } from "aws-amplify"

Amplify.configure({
  Auth: {
    verificationCodeValidity: 300, //verification code validity default 1 hrs, now set to 5 min
    userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
    region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
    userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOL_APP_CLIENT_ID,
    forgotPassword: {
      // Limit password resets to 3 attempts per hrs
      deliveryLimit: 3,
      timeToLive: 60, // 60 minutes (1 hours)
    },
  },
})

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }