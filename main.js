var aText = new Array(
    "hi abiella",
    "",
    "If I sent you this, it means either I'm deciding for you or you chose to leave already. HAHAHAHAHAHAHA and I'm writing this as of November 3, 2023.",
    "",
    "i'm just gonna rant everything na here since i'm planning to send you this naman :]",
    "anyways first of all, kamusta ka? I hope you're doing well. i'll go start my rant na",
    "",
    "Haha, I'm mostly sad about how I wasn't able to help you overcome your fear of committing. I guess all the things I did didn't make you comfortable and made you think that you really should risk it for us. HWAHWAHWHAHWA. Although I'm still thinking of all the promises you made me, and I hate myself because I kept falling for all your words that you can never back up with actions. You said that you're afraid of all the responsibilities that come with a relationship, pero you can't even provide me that, kahit a simple bit of it. May ginagawa ba ako para madeserve to? HWHAHAHHAH",
    "",
    "All i've been trying to do for the past 11 months is to make us work. i've fixed everything about us, and I was fine with doing all the fixing, but I realized since I'm the only one doing all the fixing, did you even care at all if we make it out of the argument? Did you care if we ended right on that spot? Hahahah, so many unanswered questions. I'm not really the kind of person to say these kind of things, but oh well. Did you know ba na I started to doubt if you even loved me? You say that you love me in 'your' way, pero is your way ignoring me? Treating me differently from others? Giving me silent treaments wheneever we argue? Ang funny noh? To think that you also had a side like this",
    "",
    "It's exhausting to constantly fight for this. for something that should be a partnership. I've sacrificed so much, and i t feels you've given me so little. Your actions, or thereof, speaks louder than words. I'm tired of feeling like I'm the only one invested in this 'relationship' of ours HWAHWAHW, and it's become painfully clear that what we had is an uneven balance.",
    "",
    "I'm also starting to think that you only liked the idea of me being there for you. It's as if you enjoyed the comfort of having someone who cared, but you were never willing to reciprocate or meet me halfway.",
    "",
    "and It's sobrang frustrating to feel like my feelings were taken for granted, like my presence in your life was convenient when you needed it, and disposable when you didn't. I've poured so much into this 'thing' we have, only to realized na you were content with the idea of my support without actually valuing me as ur someone.",
    "",
    "It's painful to accept pero it's the truth that's become impossible to ignore. and I think I deserve to be with someone who appreciates me for who I am, not just for what I can do for them.",
    "",
    "And to the start and end of this 'relationship' of ours, you never changed, unless you consider that one week change every time I gave you the chance to change HWAHWHAHWHA. It's like you put a concealer na make up whenever I pushed you, pero as soon as things went back to normal, so did you. It's clear na ano that those moments of change were just for show, and you had no real ntention of making a lasting effort para sakin.",
    "",
    "I've learned this the hard way that I can't keep waiting for someone to change when they're not truly willing to do so. I'm gonna leave this cycle of false hope na from you and this disappointment.", 
    "",
    "anyways thats my rant jhwhwahwahdhsad, bye bye na talaga ibloblock n kita sa fb HWAHWHAHWA i'm so disappointed, and very annoyed lolz. everytime I hear your voce naalala ko ung mga promise mong sinabi irl HWAHHWAHWHA wag ka muna masyado mag speak for a month i'm naiinis",
    );
    var iSpeed = 50; 
    var iIndex = 0;
    var iArrLength = aText[0].length;
    var iScrollAt = 20;
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow;
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 100);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();