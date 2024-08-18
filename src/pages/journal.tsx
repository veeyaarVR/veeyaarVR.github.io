"use client";

import React, { useEffect, useState } from "react";
import { account } from "../api/appwrite";
import { useRouter } from "next/navigation";
import { databases } from "../api/appwrite";
import { Calendar } from "react-date-range";
import { Query } from "appwrite";
import moment from "moment-timezone";

const JournalScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);
  const [shouldOpenCalendar, changeCalendarState] = useState(false);
  const [selectedTimeStamp, updateTimeStamp] = useState(new Date(Date.now()));

  useEffect(() => {
    const getUser = async () => {
      try {
        const accountData = await account.get();
        console.log(accountData);
        if (!accountData["labels"].includes("admin")) {
          router.push("/authfailed");
        } else {
          setUser(accountData);
          fetchEntries();
        }
      } catch {
        // redirect to login screen, if user is not logged in yet
        router.push("/login");
      }
    };
    getUser();
  }, [router]);

  async function fetchEntries() {
    const dateInMoment = moment.utc(selectedTimeStamp).local(); // Get the current date and time
    const isoStringWithTimezone = dateInMoment.toISOString(true).split("T")[0]; // true includes the offset
    console.log('date is ' + selectedTimeStamp)

    try {
      const posts = await databases.listDocuments(
        "667bda7d00130e6f9c7e",
        "66c0411800014b7ea798",
        [
          Query.greaterThanEqual("$createdAt", isoStringWithTimezone + "T00:00:00Z"), // Start of today
          Query.lessThan("$createdAt", isoStringWithTimezone + "T23:59:59Z"), // End of today
        ]
      );

      var projects = [];
      posts.documents.forEach((doc) => {
        projects.push({ entry: doc.entry, date: doc.$createdAt });
      });
      console.log(projects.length)
      setEntries(projects);
    } catch (err) {
      console.error(err);
      alert("Error fetching posts");
    }
  }

  const updateSelectedDateUI = async(selectedDate: Date) => {
    console.log('date is before ' + selectedDate)
    updateTimeStamp(selectedDate);
    changeCalendarState(false);
    await fetchEntries();
  };

  if (user == null) {
    return <div>validating...</div>;
  } else {
    if (entries == null) {
      return <div>fetching entries...</div>;
    } else {
      return (
        <div className="padding25 superPadding">
          <div className=" flex flex-jc-sb flex-ai-c">
            <div>
              <div className="superTitlePrimary colorPrimary">Journal</div>
              <div className="smallHeadingPrimary colorPrimary">
                inspired from Mark Zuckerberg (Social network)
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  changeCalendarState(!shouldOpenCalendar);
                }}
                className="interests buttonText colorSecondary"
              >
                {extractDateFromTimeStamp(selectedTimeStamp)}
              </button>
            </div>
          </div>
          <div className="flex flex-jc-end">
            {shouldOpenCalendar ? (
              <Calendar
                date={selectedTimeStamp}
                onChange={updateSelectedDateUI}
              />
            ) : (
              ""
            )}
          </div>
          <div className="superPaddingVertical">
            {!Array.isArray(entries) || !entries.length ?(
              <div className=" padding25 justify-center flex flex-ai-c">No entries made on that day! </div>
            ): (
              entries.map((entry) => (
                <div key={entry.entry} className="journal-entry">
                  <div className="padding25" key={entry.entry}>
                    <p className="colorPrimary subHeadingSecondary ">
                      {entry.entry}
                    </p>
                    <p className="colorSecondary">
                      {extractTimeFromTimestamp(entry.date)}
                    </p>
                  </div>
                </div>
              ))
            ) }
          </div>
        </div>
      );
    }
  }

  function extractTimeFromTimestamp(timestamp: string) {
    const date = new Date(timestamp);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${amPm}`;

    return formattedTime;
  }

  function extractDateFromTimeStamp(date: Date) {
    // Extract the desired components (month, day, year)
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the output
    const outputDateString = `${month} ${day} ${year}`;

    return outputDateString;
  }
};

export default JournalScreen;
