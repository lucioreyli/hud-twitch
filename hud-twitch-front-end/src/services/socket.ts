import { io } from "socket.io-client";

/*
  ⚠️⚠️ CHANGE THE SERVER PORT (BACK-END)
  ⚠️⚠️ TROQUE A PORTA DO SERVIDOR (BACK-END)
*/
export const socket = io(`http://localhost:${'2004'}`)

