"use client";

import React, { useEffect, useState } from "react";
import { account } from "../api/appwrite";
import { useRouter } from 'next/navigation'

const JournalScreen = () => {
  const router = useRouter()
  const [user, setUser] = useState(null);

  const getAccount = async () => { 
    try {
      const accountData = await account.get();
      console.log(accountData);
      if (!accountData['labels'].includes("admin")) {
          router.push('/authfailed')
      } else {
        setUser(accountData);
      }
    } catch {
      // redirect to login screen, if user is not logged in yet
      router.push('/login')
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  if (user == null) {
    return <div>validating...</div>    
  } else {
    return (
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-3xl">Dashboard</h1>
          {user && (
            <div className="mt-3">
              <p>Username:{user['name']} </p>
              <p>Email: {user['email']}</p>
            </div>
          )}
        </div>
      );
  }


};

export default JournalScreen;