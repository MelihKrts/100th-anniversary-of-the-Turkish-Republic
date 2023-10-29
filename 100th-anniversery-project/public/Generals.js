const images = [
    {
        src: "/image/Kazim_Karabekir_Pasha.jpg",
        content: "Kâzım Karabekir",
    },
    {
        src: "/image/Fevzi_cakmak.png",
        content: "Field Marshal Fevzi Çakmak",
    },
    {
        src:"/image/Ali_Fuat_.png",
        content:"Ali Fuat Cebesoy"
    },
    {
        src:"/image/Refet_Beles.jpg",
        content:"Refet Bele"
    }
]
const Commanders = images.map((data, index) => ({
    id: index + 1,
    src: data.src,
    content: data.content,
}))

export default Commanders