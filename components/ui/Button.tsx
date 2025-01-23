
export default function Button() {
  return (
    <>

<button
  className="cursor-pointer bg-gradient-to-r z-[999] from-violet-500 to-pink-800 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl  text-white font-medium group"
>
  <div className="relative overflow-hidden">
    <p
      className="group-hover:-translate-y-7 text-white duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
      Contact us
    </p>
    <p
      className="absolute top-7 left-0 group-hover:top-0 text-white duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
       Contact us
    </p>
  </div>
</button>



    </>


  )
}