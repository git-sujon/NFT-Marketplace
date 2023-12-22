"use client"

export const  convertBidEndTimeToRemainingTime = (timestamp: string) => {
  // Parse the timestamp string to a Date object
  const endTime = new Date(timestamp) as Date;

  // Get the current time
  const now = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = endTime.getTime() - now.getTime();

  // Convert milliseconds to hours, minutes, and seconds
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Create the formatted string
  const formattedTime = `${hours}h ${minutes}m ${seconds}s`;

  return formattedTime;
}

