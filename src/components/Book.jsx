import React from 'react'
import HTMLFlipBook from "react-pageflip";
import "../App.css"
import 'semantic-ui-css/semantic.min.css'
import { Flag, Segment } from 'semantic-ui-react'


export const Book = () => {
    const PageCover = React.forwardRef((props, ref) => {
        return (
            <div className="page page-cover" ref={ref} data-density="hard">
                <div className="page-content">
                    <div>{props.children}</div>
                </div>
            </div>
        );
    });



    const Page = React.forwardRef((props, ref) => {
        return (
            <div className="page" ref={ref}>
                <div className="page-content">
                    <h2 className="page-header text-center text-2xl text-black font-bold py-2">Cumhuriyetin 100.yılı </h2>
                    <div className="page-image"></div>
                    <div className="page-text">{props.children}</div>
                    <div className="page-footer "><span className='px-2 py-2'>{props.number + 1}</span></div>
                </div>
            </div>
        );
    });


    return (
        <div>
            <HTMLFlipBook
                width={550}
                height={505}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={300}
                maxHeight={300}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={false}
                className="demo-book"
            >


                <PageCover className="">
                    <div className="w-full top-1/2 relative">
                        <div className="absolute top-1/2 flex items-center justify-center my-[50%] w-full">
                            <h1 className='text-white text-2xl font-bold text-center'>Türkiye Cumhuriyeti 100 Yaşında</h1>
                        </div>
                    </div>
                </PageCover>
                <Page number={1}>
                    <h1 className='capitalize text-left px-4 text-xl text-mini-title font-semibold'>Cumhuriyet'in 100.yılı Kutlu olsun</h1>
                    <div className="w-full  my-2">
                        <p className='px-4 text-justify'>Bundan tam 100 yıl önce <q>Efendiler, yarın Cumhuriyeti ilan edeceğiz.</q>Sözü söylendi. Ertesi günü Cumhuriyet ilan edildi ve bu söz söyleneli tam <b>100 yıl</b> geçti. <b>Nice 100 yıllara.</b> <Flag name='tr' /> </p>
                        <div className="first-image image-style mt-2 mx-4 rounded-xl"></div>

                    </div>


                </Page>
                <Page number={2}>
                    <h1 className='capitalize text-left px-4 text-xl text-mini-title font-semibold'>Cumhuriyet'e giden süreç</h1>
                    <div className="w-full my-2">
                        <p className='px-4 text-justify'>Cumhuriyet'e giden süreç <i>(Uzun dönem kapsadığı için başka projede anlatacağız)</i> <b>kanlı,acı, yoksullukla</b> geçmiştir. Cumhuriyet ilan edilen süreçte En başta <b>Başkomutan Mustafa Kemal Atatürk, silah arkadaşları, tüm şehitlerimiz ve gazilerimize</b> saygılarımızla ve sevgilerle. Mekanınız cennet olsun.</p>
                        <div className="second-image image-style mt-2 mx-4 rounded-xl">

                        </div>
                    </div>
                </Page>

                <Page number={3}>
                    <h1 className='capitalize text-left px-4 text-xl text-mini-title font-semibold' >Cumhuriyet'in Kazanımları</h1>
                    <div className="w-full my-2">
                        <ul className='px-4 text-justify'>
                            <li>Kadına seçme seçilme hakkı</li>
                            <li>Okuma Hakkı</li>
                            <li>Kimlik ve aidiyet duygusu</li>
                            <li>Hür insan olma hakkı</li>
                            <li><b>Türk'ün Tarih'ten yok edilemeyeceği dünyaya ilan ve ispat edildi</b></li>
                            <li>Ülkenin yönetiminde söz hakkı</li>
                        </ul>
                        <p className='px-4 text-justify'>Liste daha da uzayıp gidebilir.</p>
                        <div className="third-image image-style mt-2 mx-4 rounded-xl"></div>
                    </div>

                </Page>

                <Page number={4}>
                    <h1 className='capitalize text-left px-4 text-xl text-mini-title font-semibold' >Cumhuriyet'in Kuruluşunda Yer Alan Komutanlar</h1>
                    <div className="w-full my-2">
                        <p className='px-4 text-justify'>Şüphesiz subay ve generallerimiz bağımsızlık  için canını vermiştir. Hepsini maalesef ki hepsini yazmaya vaktimiz yok.</p>
                        <div className="fourth-image image-style mt-2 mx-4 rounded-xl"></div>
                    </div>
                </Page>

                <Page number={5}>
                    <h1 className='capitalize text-left px-4 text-xl text-mini-title font-semibold'> Atatürk'ün 10.Yıl Nutku (Söylevi)</h1>
                    <p className='text-justify px-4 py-2'>Türk Milleti!</p>
                    <p className="text-justfiy px-4 py-2">Kurtuluş savaşına başladığımızın 15'inci yılındayız. Bugün cumhuriyetimizin onuncu yılını doldurduğu en büyük bayramdır.</p>
                    <p className="text-justify px-4 py-2">Kutlu Olsun!</p>


                    <div className="fifth-image image-style mt-2 mx-4 rounded-xl">
                    </div>
                </Page>

                <Page number={6}>
                    <h1 className='capitalize text-left px-4 text-xl text-mini-title font-semibold'> Atatürk'ün 10.Yıl Nutku (Söylevi)</h1>
                    <p className="text-justfiy px-4 py-2">
                    Bu anda büyük Türk milletinin bir ferdi olarak bu kutlu güne kavuşmanın en derin sevinci ve heyecanı içindeyim.
                    </p>
                    <p className="text-justfiy px-4 py-2">Fakat yaptıklarımızı asla kâfi göremeyiz.Çünkü daha çok ve daha büyük işler yapmak mecburiyetinde ve azmindeyiz.Yurdumuzu dünyanın en mâmur ve en medenî memleketleri seviyesine çıkaracağız. Milletimizi en geniş refah vasıta ve kaynaklarına sahip kılacağız. Millî kültürümüzü muasır medeniyet seviyesinin üstüne çıkaracağız.</p>

                    <p className="text-justfiy px-4 py-2">Türk milletine çok yaraşan bu ülkü, onu, bütün beşeriyete hakikî huzurun temini yolunda, kendine düşen medenî vazifeyi yapmakta, muvaffak kılacaktır.</p>

                    <p className="text-justfiy px-4 py-2">Büyük Türk Milleti, on beş yıldan beri giriştiğimiz işlerde muvaffakiyet vadeden çok sözlerimi işittin. Bahtiyarım ki, bu sözlerimin hiçbirinde, milletimin hakkımdaki itimadını sarsacak bir isabetsizliğe uğramadım.</p>

                    <p className="text-justfiy px-4 py-2">Türk Milleti!</p>

                    <p className="text-justfiy px-4 py-2">Ebediyete akıp giden her on senede, bu büyük millet bayramını daha büyük şereflerle, saadetlerle huzur ve refah içinde kutlamanı gönülden dilerim.</p>

                    <p className="uppercase text-justfiy px-4 py-2"><b><q>Ne mutlu Türk'üm dİyene!</q></b></p>

                </Page>

                <Page number={7}>
                    <h1 className='capitalize text-left px-4 text-xl text-mini-title font-semibold'> Atatürk'ün Cumhuriyet vurgusu</h1>
                    <p className='text-justify px-4 py-2'><q>Cumhuriyetimiz öyle zannolunduğu gibi zayıf değildir. Cumhuriyet bedava da kazanılmış değildir. Bunu elde etmek için kan döktük. Her tarafta kırmızı kanımızı akıttık. İcabında müesseselerimizi müdafaa için lazım olanı yapmaya hazırız.</q></p>

                    <p className="text-justfiy px-4 py-2">Çağdaş bir cumhuriyet kurmak demek, milletin insanca yaşamasını bilmesi, insanca yaşamanın neye bağlı olduğunu öğrenmesi demektir.</p>

                    <div className="sixth-image image-style mt-2 mx-4 rounded-xl">
                    </div>
                </Page>

                <Page number={8}>
                    <h1 className='capitalize text-left px-4 text-xl text-mini-title font-semibold'> Atatürk'ün Cumhuriyet vurgusu</h1>

                    <p className='text-justify px-4 py-2'><q>Hiçbir zaman hatırınızdan çıkmasın ki, Cumhuriyet sizden fikri hür, vicdanı hür, irfanı hür nesiller ister.</q></p>

                    <p className="text-justfiy px-4 py-2"><q>Benim naçiz vücudum elbet bir gün toprak olacaktır ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır. Ve Türk milleti güven ve mutluluğun kefili olan ilkelerle, medeniyet yolunda, tereddütsüz yürümeye devam edecektir.</q></p>

                    <p className="text-justfiy px-4 py-2"><q>Cumhuriyet bilhassa kimsesizlerin kimsesidir</q></p>

                    <p className="text-justfiy px-4 py-2"><q>Az zamanda çok ve büyük işler yaptık. Bu işlerin en büyüğü, temeli; Türk kahramanlığı ve yüksek Türk kültürü olan Türkiye Cumhuriyeti'dir.</q></p>

                    <p className="text-justfiy px-4 py-2"><q>Cumhuriyeti, onun gereklerini yüksek sesle anlatınız. Cumhuriyet ilkelerini sevdiriniz. Bunu kalplere yerleştirmek için hiçbir fırsatı ihmal etmeyiniz.</q></p>

                    <p className="text-justfiy px-4 py-2"><q>Cumhuriyet, yeni ve sağlam esaslarıyla, Türk milletini emin ve sağlam bir gelecek yoluna koyduğu kadar, asıl fikirlerde ve ruhlarda yarattığı güvenlik itibariyle, büsbütün yeni bir hayatın müjdecisi olmuştur.</q></p>

                    <p className="text-justfiy px-4 py-2"><q>Çağdaş bir cumhuriyet kurmak demek, milletin insanca yaşamasını bilmesi, insanca yaşamanın neye bağlı olduğunu öğrenmesi demektir.</q></p>

                    <p className="text-justfiy px-4 py-2"><q>Efendiler ve ey millet! İyi biliniz ki Türkiye Cumhuriyeti; şeyhler, dervişler, müritler, mensuplar memleketi olamaz. En doğru ve en hakiki tarikat, tarikatımedeniyedir. Medeniyetin emrettiğini ve talep ettiğini yapmak, insan olmak için kâfidir.</q></p>

                </Page>

                <Page number={9}>
                    <div className="flag-of-Turkey image-style"></div>
                </Page>

                <Page number={10}>
                <div className="w-full top-1/2 relative">
                        <span className='uppercase font-bold text-center text-2xl my-[50%] block'><q>Ne mutlu Türküm Dİyene !</q></span>
                        </div>
                </Page>


                <PageCover></PageCover>

            </HTMLFlipBook>


        </div>
    );
}
