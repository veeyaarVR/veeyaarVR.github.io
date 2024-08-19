"use client";

import React, { useEffect, useState } from "react";
import { account } from "../api/appwrite";
import { useRouter } from "next/navigation";

const AddEntryScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const accountData = await account.get();
        console.log(accountData);
        if (!accountData["labels"].includes("admin")) {
          router.push("/authfailed");
        } else {
          setUser(accountData);
        }
      } catch {
        // redirect to login screen, if user is not logged in yet
        router.push("/login");
      }
    };
    getUser();
  }, [router]);

  if (user == null) {
    return <div>validating...</div>;
  } else {
    return (
      <div className="padding25 superPadding">
        <div className=" flex flex-jc-sb flex-ai-c">
          <div>
            <div className="superTitlePrimary colorPrimary">{user.name}</div>
            <div className="smallHeadingPrimary colorPrimary">
              inspired from Mark Zuckerberg (Social network)
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AddEntryScreen;
