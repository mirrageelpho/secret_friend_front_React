

export const  login = (token) => { localStorage.setItem(TOKEN, JSON.stringify(token))}
  
export const  logout = () => { localStorage.removeItem(TOKEN)}
  
export const  isAuthenticated = () => localStorage.getItem(TOKEN) !== null
  
export const  getToken = () => {
    let playload = localStorage.getItem(TOKEN)
    return JSON.parse(playload)
}

export const TOKEN = "@Token"
  