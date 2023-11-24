import { useState } from 'react';
import { qwikify$ } from '@builder.io/qwik-react';

// src/entry.client.tsx
//import './global.css';

function Greetings () {
    //const [isRapidRewardsMember, setIsRapidRewardsMember] = useState(false)
    return <div>hi</div>


}

export const QGreetings = qwikify$(Greetings);