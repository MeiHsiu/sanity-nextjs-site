import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(site)/(models)/User";
import bcrypt from "bcrypt";


export const options = {
    secret: process.env.AUTH_SECRET,
    providers: [
    GitHubProvider({
        profile(profile: any) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email == "mche213@mywhitecliffe.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
  }),
  CredentialsProvider({
    id: "Credentials",
    name: "Credentials",
    credentials: {
      name: {
        label: "User name:",
        type: "text",
        placeholder: "your-name",
      },
      password: {
        label: "Password:",
        type: "password",
        placeholder: "your-password",
      },
    },
    async authorize(credentials: any) {
      try {
        console.log("authorizing...");
        const foundUser = await User.findOne({ name: credentials.name })
          .lean()
          .exec() as any;


        if (foundUser) {
          console.log("User Exists");
          const match = await bcrypt.compare(
            credentials.password,
            foundUser.password
          );

          if (match) {
            console.log("Good Pass");
            delete foundUser.password;

            //foundUser["role"] = "Unverified Email";
            return foundUser;
          }
        }
        else {
          
          const hashPassword = await bcrypt.hash(credentials.password, 10);
          credentials.password = hashPassword;
      
          await User.create(credentials);
          return credentials;
        }
      
      } catch (error) {
        console.log(error);
      }
      return null;
    },
  }),

],
    callbacks: {
    async jwt({ token, user }: any) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};