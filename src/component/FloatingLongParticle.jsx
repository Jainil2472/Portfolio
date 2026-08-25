import {motion} from "motion/react"

export default function FloatingLongParticle(){
    const longparticle = Array.from({length:3});

    return(
        <>
        <motion.div className=" overflow-visible absolute inset-0 pointer-events-none">
            {longparticle.map((_,index) => {

                const width = Math.random() * 1;
                const height = Math.random() * 5 + 3;
                const duration = Math.random() * 4 + 5;
                const delay = Math.random() * 1;
                const left = Math.random() * 100;


            
            return(
                <motion.span
                className="absolute rounded-4xl bg-amber-200"
                style={{
                    width : width,
                    height: height,
                    bottom : -20,
                    left : `${left}%`  
                }}
                animate ={{
                    y :[-20,-900],
                    x :[0,-20,40,0],
                    opacity : [0,1,1,0],
                    scale : [0.5, 1, 0.8],
                    rotate:[0,20,-40,0]
                }}
                transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "linear",
                }}

                />
            )})
            }



        </motion.div>

        
        </>
    )

}