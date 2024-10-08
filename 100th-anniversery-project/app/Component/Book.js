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


const Page = React.forwardRef((props, ref) => {
    return (
        <div className="bg-[#F5F5DC]" ref={ref}>
            <div className="w-full">
                <h3 className="text-center align-middle text-2xl py-4 text-black">{props.title}</h3>
                <div className="text-justify text-black">{props.children}</div>
            </div>
        </div>
    )

})


const Cover = React.forwardRef((props, ref) => {
    return (
        <div className="bg-cover-image bg-cover bg-no-repeat bg-top-center h-screen" ref={ref}>
            <div className="w-full">
                <div className="w-full absolute top-24">
                    <div className={`container mx-auto flex flex-col text-white justify-center items-center 
                    ${inter.className}`}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div >
    )
})


export default function Book() {


    return (
        <section className="w-full h-screen bg-book-BG ">
            <div className="container">
                <HTMLFlipBook width={600} height={570} size="fixed" showCover={true} maxShadowOpacity={0} mobileScrollSupport={true} className="py-2">

                    <Cover>
                        <h4 className={` text-3xl  font-bold text-center text-white `}>Republic of Turkey</h4>
                        <p className="font-bold py-4 text-xl">The Republic of Turkey is <span className="text-black underline">{year - birthYear}</span> years old</p>
                    </Cover>

                    <Page title="About this Project">
                        <div className="w-full">
                            <div className="w-full text-justify text-black">

                                <p className="lg:px-8 sm:px-3 py-2 text-black">This project is dedicated to the 100th anniversery of the founding of the Republic of Turkey. </p>

                                <p className="lg:px-8 sm:px-3 py-2 text-black">This project has been prepared and arrangements have been made for the 100th anniversery of the founding of the Republic of Turkey </p>

                                <p className="lg:px-8 sm:px-3 py-2 text-black">As stated in the sentence above, the project was realized on the 100th anniversary. At the time of the revision, the 101st anniversary of the founding of the Republic will be celebrated. Therefore, it is called 101 years old.</p>

                                <p className="lg:px-8 sm:px-3 py-2 text-black">
                                    As the project aims to celebrate the 100th anniversary and the history of the Republic of Turkey is long and complex, a brief overview of the topics is provided.
                                </p>

                            </div>

                        </div>
                    </Page>

                    <Page title="History of the Republic of Turkey">
                        <div className="w-full">

                            <p className="px-8 py-2">The Ottoman Empire was a multinational empire with territories in Asia, Africa and Europe between 1299 and 1922. The empire, which was weakened by the nationalism movement, geographical discovery, lost in the 1st World War by joining the Alliance states.</p>

                            <p className="px-8 py-2">
                                After the signing of the Montros Armistice, the reaction of the people and officers against the occupation of the Allied Powers (WW1) led to the adoption of a sense of independence.
                            </p>

                            <p className="px-8 py-2">Atatürk's departure to Samsun on May 19, 1919 is considered to be the beginning of the National Struggle. During the Turkish War of Independence during the War of Independence, wars were fought with Armenia on the Eastern Front, France on the Southern Front and Greece on the Western Front.</p>

                            <p className="px-8 py-2">After the Turkish War of Independence was won, the Ottoman Empire ended with the Mudanya Peace, the Treaty of Lausanne and the abolition of the Sultanate during the treaty process. November 1, 1922</p>

                        </div>
                    </Page>

                    <Page title="History of the Republic of Turkey">
                        <div className="w-full">
                            <p className="px-8 py-2">
                                On October 29, 1923, the Parliament declared a Republic. Mustafa Kemal Atatürk was the first president of the Republic of Turkey.
                            </p>

                            <p className="px-8 py-2">Mustafa Kemal Atatürk served as president from October 29, 1923 until November 10, 1938. During this time he carried out political, economic and cultural reforms. During his term, he made very important reforms such as the preservation of world peace (Balkan Treaty, Saadabad Pact, democracy (democracy management according to the interwar period and continental countries, rebellion against the republican regime, the economic crisis of 1929 prevented the full realization of democracy practices), the right to elect and be elected for women (very important reforms of the period).  </p>

                        </div>
                    </Page>

                    <Page title="Mustafa Kemal Ataturk">

                        <div className="w-full">
                            <div className="container flex flex-col items-center justify-center">
                                <Image
                                    src="/image/Ataturk1930s.jpg"
                                    width={375}
                                    height={100}
                                    className="px-8 py-2"
                                    alt="Mustafa Kemal Ataturk first president"
                                />
                                <h4 className="font-semibold py-2">Mustafa Kemal Ataturk Republic of Turkey First President </h4>
                            </div>
                        </div>
                    </Page>

                    <Page title="Republic Day">

                        <div className="w-full">
                            <div className="container flex flex-col items-center justify-center">
                                <Image
                                    src="/image/10th_Anniversary_Speech.jpg"
                                    width={500}
                                    height={100}
                                    className="px-2 py-2"
                                    alt="Mustafa Kemal Ataturk first president"
                                />
                                <p className="py-2 px-4">
                                    Mustafa Kemal's 1933 speech at the 10th anniversary of the Republic of Turkey, left to right: Chief of General Staff Mareşal Fevzi (Çakmak), President Gazi Mustafa Kemal (Atatürk), Speaker of the Grand National Assembly Kâzım Köprülü (Özalp), Prime Minister İsmet (İnönü) </p>
                            </div>
                        </div>
                    </Page>

                    <Page title="Excerpt of 10th anniversary celebration speech">
                        <div className="w-full">
                            <p className="px-4 py-2">
                                The Turkish Nation!

                                We are in the fifteenth year of the start of our way of liberation. This
                                is the greatest day marking the tenth year of our Republic.
                            </p>

                            <p className="px-4 py-2">
                                At his moment, as a member of the great Turkish nation, I feel the
                                deepest joy and excitement for having achieved this happy day.
                            </p>

                            <p className="px-4 py-2">
                                Turkish nation has been successf ul in overcoming hardships through national unity and togetherness. And because the torch the Turkish nation holds in her hand and in her mind, while marching on the road of progress and civilization, is positive science.  I would like to point out with special emphasis that one of the historical characteristics of the Turkish nation, which is a society composed of worthy people, is to appreciate the fine arts and to advance in them as well. </p>

                            <p className="px-4 py-2">Therefore, it is our national id eal to support and to develop the worthy and noble character of the Turkish nation, her industrious quality, her intelligence, her dedication to science, her love of fine arts, and her feeling of national unity always and with every available means and m easure. This aim, which is one very suited to the Turkish nation, will make her successful in fulfiling her obligation to cultivate real peace in the entire world.
                            </p>

                        </div>
                    </Page>

                    <Page title="Excerpt of 10th anniversary celebration speech">
                        <div className="w-full">
                            <p className="px-4 py-2">
                                The Turkish nation,

                                I express my heartfelt wish that you will celebrate, after each decade
                                elapsing into eternity, this great national day, in greater honour,
                                happiness, peace and prosperity.

                                How happy is the one who says "I am a Turk."
                            </p>

                            <div className="container flex flex-col items-center justify-center">
                                <Image
                                    src="/image/Atatürk_during_the_10th_Anniversary_Speech.jpg"
                                    width={580}
                                    height={100}
                                    className="px-2 py-2"
                                    alt="Ataturk during the 10th Anniversary Speech"
                                />
                                <h4 className="font-semibold py-2">Ataturk during the 10th Anniversary Speech </h4>
                            </div>

                        </div>
                    </Page>

                    <Page title="Commanders of the Turkish War of Independence">
                        <div className="w-full">
                            <div className="container flex flex-wrap flex-row justify-center">

                                {Commanders.map((data) => (
                                    <div className="w-1/3 mx-2" key={data.id}>

                                        <Image src={data.src} width={200} height={120} alt={data.content} className="h-52 object-cover object-center" />

                                        <h4 className="text-center font-semibold my-1">
                                            {data.content}
                                        </h4>

                                    </div>
                                ))}

                            </div>
                        </div>
                    </Page>

                    <Page title="Women in Turkey">
                        <div className="w-full">
                            <p className="px-4 py-2">Turkish women's movements to take part in the social and cultural sphere started in the 19th century. The right to vote was granted in 1930 and 1934 respectively.</p>

                            <p className="px-4 py-2">Compared to other countries of the world, Turkish women's suffrage was granted early or recently. It was recognised in Central European countries in the 1918s, in Latin America (Brazil, Uruguay) in 1932 and in Yugoslavia, France and China after the Second World War.  </p>

                            <p className="px-4 py-2">
                                From left to right, World's first female fighter pilot, Turkish woman doctor and lieutenant in the Turkish war of independence
                            </p>

                            <div className="container flex flex-row mt-8">

                                <div className="w-1/3 mx-4">
                                    <Image
                                        alt="Sabiha Gokcen First female combat pilot"
                                        src="/image/Sabiha_gokcen.jpg"
                                        width={150}
                                        height={150}
                                        className="h-40 object-cover object-top"
                                    />
                                    <h4 className="font-semibold text-center">Sabiha Gokcen</h4>
                                </div>

                                <div className="w-1/3 mx-4">
                                    <Image
                                        alt="Safiye Ali the first Turkish female doctor"
                                        src="/image/Safiye_Ali.jpg"
                                        width={150}
                                        height={150}
                                        className="h-40 object-cover object-top"
                                    />
                                    <h4 className="font-semibold text-center">Safiye Ali</h4>
                                </div>

                                <div className="w-1/3 mx-4">
                                    <Image
                                        alt="Fatma Seher Erden(Kara Fatma)"
                                        src="/image/Kara_Fatma.jpg"
                                        width={150}
                                        height={150}
                                        className="h-40 object-cover object-top"
                                    />
                                    <h4 className="font-semibold text-center">Kara Fatma female soldier</h4>
                                </div>

                            </div>

                        </div>
                    </Page>

                    <Page title="BibloGraphy">
                        <Link className="text-blue-500" href="https://www.britannica.com/place/Turkey" replace target="_blank">
                        <p className="px-4 py-2">Britannica</p></Link>

                        <Link className="text-blue-500" href="https://en.wikipedia.org/wiki/Turkey" replace target="_blank">
                        <p className="px-4 py-2">Wikipedia</p></Link>

                        <Link className="text-blue-500" href="https://en.wikipedia.org/wiki/Turkish_War_of_Independence" replace target="_blank">
                        <p className="px-4 py-2">Turkish War of Independence</p></Link>
                        
                    </Page>

                    <Cover />
                </HTMLFlipBook>
            </div>
        </section >
    )
}