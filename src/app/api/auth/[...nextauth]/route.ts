import { connectDB } from "@/libs/mongodb";
import UserModel from "@/models/User";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, credentials, email, profile }) => {
      await connectDB();
      let us = await UserModel.findOneAndUpdate(
        { email: email },
        {
          image: user?.image as string,
          name: user?.name as string,
        }
      );
      if (!us) {
        const newUser = new UserModel({
          name: user?.name as string,
          email: user?.email as string,
          image: user?.image as string,
        });
        await newUser.save();
        us = newUser;
      }
      if (us._doc?.status === 0) {
        return false;
      }
      return true;
    },
    session: async ({ session, token, user }) => {
      await connectDB();
      const userDb = await UserModel.findOne({ email: user.email });
      if (userDb) {
        session.user.status = userDb._doc.status;
      }
      console.log(session);
      return session;
    },
  },
  //   pages: {
  //     signIn: "/login",
  //   },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
