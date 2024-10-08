"use client"
import HTMLFlipBook from "react-pageflip";
import React from "react"
import Link from "next/link";

import { Inter } from "next/font/google"
import Image from "next/image";
import Commanders from "@/public/Generals";


const inter = Inter({ subsets: ["latin"] })
const year = new Date().getFullYear()
const birthYear = 1923


export default function Book() {
    return(
        <section classname="w-full h-screen bg-book-BG"></section>
    )
}