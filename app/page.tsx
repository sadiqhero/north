import Image from "next/image";
import Script from 'next/script';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


<Image
      src="/logo.png"
      alt="Picture of the author"
      width={165}
      height={60}
    />
   

    <div id="result"><p id="p">hello world...</p></div>
    <div id="search">
<textarea name="input" id="input"> write it here... </textarea> 
<div id="send"><img id="im" src="/sendw.png" alt="send" width="80px" /></div>

    </div>

    <Script src="/note.js" />     
    </main>
  );
}
