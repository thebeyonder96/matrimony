"use client"
import { useAuth } from "@/store/authStore";
import React from "react";

const Profile = () => {
  const { user, fetchUser } = useAuth();
  if(!user) return <>Please login to continue</>
  return <div>Profile</div>;
};

export default Profile;
