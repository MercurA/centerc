// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { getCalendar } from './services/api';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
    authorization: {
      params: {
        scope: 'openid email profile https://www.googleapis.com/auth/calendar',
      },
    },
  })
],
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      const calendar = await getCalendar(session)
      return {...session, calendar};
    },
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
},
})