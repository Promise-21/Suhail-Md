const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_25_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMSxcbiAgICAgICAgNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTAyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInIvejFPaFJ3aTlwWVhhUldpaWl3L29GeGp3bG9QZjFQRGZqNlR6cEUzSUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlMzTHFwY3VBUmc2YjdOOWhOVXpiZmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzY1OTlmYTEtZTBjMC00Y2IwLWI1NjktNjFmMzBjYmExMzQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgNTksXG4gICAgICA0OSxcbiAgICAgIDIxNyxcbiAgICAgIDk1LFxuICAgICAgMTI4LFxuICAgICAgMjU0LFxuICAgICAgMjA5LFxuICAgICAgMTY3LFxuICAgICAgMTE4LFxuICAgICAgMTkwLFxuICAgICAgODEsXG4gICAgICAxMDgsXG4gICAgICAxMSxcbiAgICAgIDIwMSxcbiAgICAgIDYzLFxuICAgICAgMjA4LFxuICAgICAgMjMxLFxuICAgICAgNjEsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgMjIsXG4gICAgICAyNTUsXG4gICAgICAzLFxuICAgICAgMTAxLFxuICAgICAgMjM3LFxuICAgICAgMTIyLFxuICAgICAgMTk3LFxuICAgICAgOSxcbiAgICAgIDIyNixcbiAgICAgIDUsXG4gICAgICAyMSxcbiAgICAgIDIzOCxcbiAgICAgIDIzNyxcbiAgICAgIDIxMSxcbiAgICAgIDE5NSxcbiAgICAgIDE1NSxcbiAgICAgIDYzLFxuICAgICAgNTQsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQzhOM0VFTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTAyNzY2MDU1OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDU3MTI0ODMwOTA2MTc6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUw0dGM4REVNREpvYlFHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVdU4zQ2ZxTmxkaE1LeXVjaXBGenQ2UTdoUTUyWkZZNkhnN1JmTWVrdENvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInUxaDJ1MnZvZmwwOUF3TmpnSWZQZ2Y0aFhlU0w0aTZwVk1oSkZ4ZHBWU1phdllHT2VEVzAxdzhzY3Y2dDd3aWtqYTQvTFlGcU04MkpEclNlWEdYVkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZhSVZwM3Q3NjNjMm16c241ZjVpVjZYRlc5V0I2aWRaWjRtTGdxVE1XWWxrSytBOURWeWMvMUk4bnl1ZVgvbVcvcnUxd2l3b29yMmN2bHkyTnoxWkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwMjc2NjA1NToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjE0NzIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVIrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0VlhlZmRDMTAxckdVZk90MlZmaU96OXhURVR2OUUzT0VxdndKNjBvTTNBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3MTg2NTE1NCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
