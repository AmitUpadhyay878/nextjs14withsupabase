// import { supabase,supabaseAdmin } from "@/lib/supabase";
import AboutusSection from "./_components/AboutusSection";
import HeroSection from "./_components/HeroSection";
import styles from './_components/style'

export default function Home() {

//     async function newView(){
//     const{data,error} = await supabase
//    .from('views')
//    .insert({
//     name:"abccccc"
//    })

//    if(data) console.log(data," view data")
//     if(error) console.log(error," view error")
//  }
 
//  newView()

  return (
    <>
     <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
   <HeroSection />
    </div>
  </div>
   <AboutusSection />
    </>
  );
}
