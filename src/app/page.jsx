
"use client"
import { useState } from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/project'
import Achievement from './component/Achievement'
import Footer from './component/Footer'
import Donate from './component/DonateCTA'
import Give from './component/Give'
export default function Home() {
    const [showPledge, setShowPledge] = useState(false);
  return (
  <div>
<Header/>
<Hero/>
<About/>
<Project/>
<Skills/>
<Achievement/>
<Give onOpenPledge={() => setShowPledge(true)} />
{showPledge && <Donate onClose={() => setShowPledge(false)} />}
<Footer/>
  </div>
      );
}


