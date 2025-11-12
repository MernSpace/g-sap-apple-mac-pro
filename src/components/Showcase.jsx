import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

const Showcase =()=>{
    const isTablet = useMediaQuery({query:"(max-width:1024px)"})
    useGSAP(()=>{
        if(!isTablet){
            const timeLine = gsap.timeline({
                scrollTrigger:{
                    trigger:"#showcase",
                    start:"top top",
                    end:"bottom top",
                    scrub:true,
                    pin:true
                }
            })
            timeLine.to(".mask img",{
                scale:1.1
            }).to(".content",{opacity:1,y:0,ease:"power1.in"})
        }
    },[isTablet])
    return(
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline/>
                <div className="mask">
                    <img src="/mask-logo.svg"/>
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>
                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next generation of Apple silicon
                                </span>
                                . m4 powers
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officiis fugiat consequuntur alias ad eos nulla sequi, repellat qui cum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus dicta suscipit. Alias nulla doloribus maiores, beatae pariatur temporibus accusantium excepturi error, illum at praesentium accusamus dignissimos expedita non quaerat?</p>
                            <p className="text-primary">Learn more about Apple intellgences</p>
                        </div>
                    </div>
                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>Pro rendering perfomance then M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU perfomance then M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase