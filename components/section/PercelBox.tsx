import Image from "next/image";

export default function PercelBox() {
    return (
        <div id="faq" className="pt-52">
            <div className="wrapper flex">
                <div className="right w-1/2 flex flex-col justify-center ">
                    <div className=" flex flex-col gap-0">
                        <div className="flex justify-center">
                            <h2 className="font-thin text-6xl mr-20 uppercase">What</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="font-thin text-6xl ml-8 uppercase">we</h2>
                        </div>
                        <div className="flex justify-center">
                            <h2 className=" text-8xl">DO</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/assets/img/frame.png" alt="" width={500} height={500} />
                    </div>
                </div>
                <div className="left w-1/2 flex flex-col  justify-center">
                    <div className="top  flex gap-8">
                        <div className="boxText">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed fuga. Maiores dolorem consequatur sapiente eveniet, consectetur dolorum iure ducimus?</p>
                        </div>
                        <div className="boxText mt-12">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed fuga. Maiores dolorem consequatur sapiente eveniet, consectetur dolorum iure ducimus?</p>
                        </div>
                    </div>
                    <div className="bottom flex gap-8">
                        <div className="boxText">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed fuga. Maiores dolorem consequatur sapiente eveniet, consectetur dolorum iure ducimus?</p>
                        </div>
                        <div className="boxText mt-12">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed fuga. Maiores dolorem consequatur sapiente eveniet, consectetur dolorum iure ducimus?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}