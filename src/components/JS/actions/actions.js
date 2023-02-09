const LOADING = "LOADING"
const READY = "READY"
const SEARCHVAL = "SEARCHVAL"

const loading = () => {return{type: LOADING} }
const ready =() => { return {type :READY} }
const searchVal=(searchvalue)={return {type:SEARCHVAL,payload:searchvalue}}