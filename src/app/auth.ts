import NextAuth from "next-auth"
// import Auth0 from "next-auth/providers/auth0"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google]
})