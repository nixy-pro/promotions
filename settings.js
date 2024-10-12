require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6281312892060"
global.namaowner = "NIXY"

//======== Setting Bot & Link ========//
global.namabot = "NIXY" 
global.namabot2 = "NIXY"
global.foother = "NIXY"
global.idsaluran = "120363311920743499@newsletter"
global.linkgc = 'https://chat.whatsapp.com/HtepiHGYjSC8ShHmVvTQeD'
global.linksaluran = "https://whatsapp.com/channel/0029VaaEx09CcW4j7D5XlR3m"
global.linkyt = 'https://youtube.com/@nixyproject'
global.linktele = "https://t.me/nixy_store"
global.packname = "NIXY"
global.author = "NIXY"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = true
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 100000
global.delayjpm = 100000

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "085783856862"
global.gopay = "087793857430"
global.ovo = "087793857430"
global.pulsa = "087793857430"
global.qris = fs.readFileSync("./media/qris.jpeg")

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})