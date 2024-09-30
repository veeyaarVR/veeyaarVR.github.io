"use client";

import React, { useEffect, useState } from "react";
import { account, databases } from "../api/appwrite";
import { ID } from "appwrite";
import { useRouter } from "next/navigation";

const AddEntryScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [entry, setEntry] = useState("");

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


  const handleChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSubmit = () => {
    databases.createDocument(
      '667bda7d00130e6f9c7e',
      '66c0411800014b7ea798',
      ID.unique(),
      { entry: entry }
    ).then((response) => {
      alert("Journal entry added");
      console.log('Document created:', response);
      setEntry("");
    })
      .catch((error) => {
        console.error('Error creating document:', error);
        // Handle errors, e.g., show an error message
      });
  };

  if (user == null) {
    return <div>validating...</div>;
  } else {
    return (
      <div className="padding25Horizontal padding10Vertical width100 height100">
        <div className="flex flex-dir-c">
          <div >
            <div className="superTitlePrimary colorPrimary">Journal Entry</div>
            <div className="smallHeadingPrimary colorPrimary">
              {`write away... don't think twice!`}
            </div>
          </div>
          <textarea value={entry} id="fname" name="journal-entry" placeholder="what's up...?" onChange={handleChange} className="margin10Vertical flex-length-1"></textarea>
          <div>
            <button className="personal-link flex-ai-end" onClick={handleSubmit}> Submit</button>
          </div>
        </div>
      </div>
    );
  }
};

export default AddEntryScreen;
